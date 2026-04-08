import re
import sys
import os
import subprocess
from datetime import datetime

if len(sys.argv) < 2:
    print("❌ Uso: python scripts/update-freebet.py freebet-hoy.txt")
    sys.exit(1)

with open(sys.argv[1], encoding="utf-8") as f:
    raw = f.read()

if "HOY NO HAY FREEBET DIARIA" in raw or "COMBINADA NO DISPONIBLE" in raw:
    print("⚠️  Sin combinada hoy — no se realizan cambios.")
    sys.exit(0)

def extract(field):
    m = re.search(rf'{field}:\s*"([^"]+)"', raw)
    if not m:
        raise ValueError(f"❌ Campo no encontrado: {field}")
    return m.group(1)

def extract_picks():
    picks = []
    blocks = re.split(r'PICK_\d+:', raw)[1:]
    for block in blocks:
        end = re.search(r'(PICK_\d+:|RESUMEN_FINAL:|=== FIN)', block)
        if end:
            block = block[:end.start()]
        def get(field):
            m = re.search(rf'{field}:\s*"([^"]+)"', block)
            return m.group(1) if m else ""
        partido = get("partido")
        liga    = get("liga")
        hora    = get("hora")
        mercado = get("mercado")
        cuota   = get("cuota")
        prob    = get("probabilidadModelo")
        fair    = get("fairOdds")
        ev      = get("ev")
        motivo  = get("motivoCorto")
        if not partido or not mercado or not cuota:
            print(f"⚠️  Pick incompleto ignorado")
            continue
        picks.append(dict(partido=partido, liga=liga, hora=hora, mercado=mercado,
                          cuota=cuota, prob=prob, fair=fair, ev=ev, motivo=motivo))
    if len(picks) < 3:
        raise ValueError(f"❌ Solo {len(picks)} picks válidos. Mínimo 3.")
    return picks

etiqueta  = extract("ETIQUETA_DIA")
hora_act  = extract("HORA_ACTUALIZACION")
cuota_tot = extract("CUOTA_TOTAL")
confianza = extract("CONFIANZA")
nota      = extract("NOTA_CONFIANZA")
motivo_g  = extract("MOTIVO_GENERAL")
picks     = extract_picks()

picks_ts = ",\n".join(f"""    {{
      text: '{p["partido"]} · {p["mercado"]} @ {p["cuota"]}',
      partido: '{p["partido"]}',
      liga: '{p["liga"]}',
      hora: '{p["hora"]}',
      mercado: '{p["mercado"]}',
      cuota: '{p["cuota"]}',
      probabilidadModelo: '{p["prob"]}',
      fairOdds: '{p["fair"]}',
      ev: '{p["ev"]}',
      motivoCorto: '{p["motivo"]}',
    }}""" for p in picks)

output = f"""export type CombinadaData = {{
  etiquetaDia: string
  cuotaTotal: string
  confianza: string
  horaActualizacion: string
  notaConfianza: string
  motivoGeneral: string
  picks: Array<{{
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
  }}>
}}

export const combinadaDelDia: CombinadaData = {{
  etiquetaDia: '{etiqueta}',
  cuotaTotal: '{cuota_tot}',
  confianza: '{confianza}',
  horaActualizacion: '{hora_act}',
  notaConfianza: '{nota}',
  motivoGeneral: '{motivo_g}',
  picks: [
{picks_ts}
  ],
}}
"""

with open("app/pronosticos/mockData.ts", "w", encoding="utf-8") as f:
    f.write(output)
print(f"✅ mockData.ts actualizado — {len(picks)} picks | Cuota: {cuota_tot} | Confianza: {confianza}")

fecha = datetime.now().strftime("%Y-%m-%d")

try:
    print("\n🏗️  Build...")
    subprocess.run("npm run build", shell=True, check=True)
    subprocess.run("git add app/pronosticos/mockData.ts", shell=True, check=True)
    subprocess.run(f'git commit -m "chore: freebet diaria {fecha}"', shell=True, check=True)
    subprocess.run("git push", shell=True, check=True)
    print("\n✅ Push completado. Vercel desplegando automáticamente.")
except subprocess.CalledProcessError:
    print("\n❌ Error en build o push. Revisa el output arriba.")
    sys.exit(1)