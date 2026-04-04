import { readFileSync, writeFileSync } from 'fs'
import { execSync } from 'child_process'

const inputFile = process.argv[2]
if (!inputFile) {
  console.error('❌ Uso: node scripts/update-freebet.mjs <archivo.txt>')
  process.exit(1)
}

const raw = readFileSync(inputFile, 'utf-8')

if (raw.includes('HOY NO HAY FREEBET DIARIA') || raw.includes('COMBINADA NO DISPONIBLE')) {
  console.log('⚠️  Sin combinada hoy — no se realizan cambios.')
  process.exit(0)
}

function extract(field) {
  const match = raw.match(new RegExp(`${field}:\\s*"([^"]+)"`))
  if (!match) throw new Error(`❌ Campo no encontrado: ${field}`)
  return match[1]
}

function extractPicks() {
  const picks = []
  const pickRegex = /PICK_\d+:\s*([\s\S]*?)(?=PICK_\d+:|RESUMEN_FINAL:|=== FIN)/g
  let match
  while ((match = pickRegex.exec(raw)) !== null) {
    const block = match[1]
    const get = (field) => {
      const m = block.match(new RegExp(`${field}:\\s*"([^"]+)"`))
      return m ? m[1] : ''
    }
    const partido = get('partido')
    const liga    = get('liga')
    const hora    = get('hora')
    const mercado = get('mercado')
    const cuota   = get('cuota')
    const prob    = get('probabilidadModelo')
    const fair    = get('fairOdds')
    const ev      = get('ev')
    const motivo  = get('motivoCorto')
    if (!partido || !mercado || !cuota) {
      console.warn(`⚠️  Pick incompleto ignorado`)
      continue
    }
    picks.push({ partido, liga, hora, mercado, cuota, prob, fair, ev, motivo })
  }
  if (picks.length < 3) throw new Error(`❌ Menos de 3 picks válidos (${picks.length}). Revisa el formato del input.`)
  return picks
}

const etiquetaDia       = extract('ETIQUETA_DIA')
const horaActualizacion = extract('HORA_ACTUALIZACION')
const cuotaTotal        = extract('CUOTA_TOTAL')
const confianza         = extract('CONFIANZA')
const notaConfianza     = extract('NOTA_CONFIANZA')
const motivoGeneral     = extract('MOTIVO_GENERAL')
const picks             = extractPicks()

const picksTs = picks.map(p => `    {
      text: '${p.partido} · ${p.mercado} @ ${p.cuota}',
      partido: '${p.partido}',
      liga: '${p.liga}',
      hora: '${p.hora}',
      mercado: '${p.mercado}',
      cuota: '${p.cuota}',
      probabilidadModelo: '${p.prob}',
      fairOdds: '${p.fair}',
      ev: '${p.ev}',
      motivoCorto: '${p.motivo}',
    }`).join(',\n')

const output = `export type CombinadaData = {
  etiquetaDia: string
  cuotaTotal: string
  confianza: string
  horaActualizacion: string
  notaConfianza: string
  motivoGeneral: string
  picks: Array<{
    text: string
    motivoBreve?: string
    partido?: string
    liga?: string
    hora?: string
    mercado?: string
    cuota?: string
    probabilidadModelo?: string
    fairOdds?: string
    ev?: string
    motivoCorto?: string
  }>
}

export const combinadaDelDia: CombinadaData = {
  etiquetaDia: '${etiquetaDia}',
  cuotaTotal: '${cuotaTotal}',
  confianza: '${confianza}',
  horaActualizacion: '${horaActualizacion}',
  notaConfianza: '${notaConfianza}',
  motivoGeneral: '${motivoGeneral}',
  picks: [
${picksTs}
  ],
}
`

writeFileSync('app/pronosticos/mockData.ts', output, 'utf-8')
console.log('✅ mockData.ts actualizado')
console.log(`   ${picks.length} picks | Cuota total: ${cuotaTotal} | Confianza: ${confianza}`)

try {
  console.log('\n🔍 Lint...')
  execSync('npx eslint app/pronosticos/mockData.ts --fix', { stdio: 'inherit' })
  console.log('\n🏗️  Build...')
  execSync('npm run build', { stdio: 'inherit' })
  const fecha = new Date().toISOString().slice(0, 10)
  execSync('git add app/pronosticos/mockData.ts', { stdio: 'inherit' })
  execSync(`git commit -m "chore: freebet diaria ${fecha}"`, { stdio: 'inherit' })
  execSync('git push', { stdio: 'inherit' })
  console.log('\n✅ Push completado. Vercel desplegando automáticamente.')
} catch {
  console.error('\n❌ Error en lint/build/push. Revisa el output arriba.')
  process.exit(1)
}
