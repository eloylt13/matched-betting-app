'use client'

import { useEffect, useMemo, useState } from 'react'
import Link from 'next/link'

import type { CombinadaData } from '@/app/pronosticos/mockData'

type FreebetDailyRevealProps = {
  dailyCombinada: CombinadaData
}

type CombinadaPick = CombinadaData['picks'][number]

const PROCESSING_STEPS = [
  'Analizando partidos del día...',
  'Filtrando mercados de goles y ganador...',
  'Calculando valor esperado...',
  'Generando Freebet diaria...',
]

function buildFallbackPickDetails(pick: CombinadaPick) {
  const [partido = pick.text, marketAndOdd = ''] = pick.text.split(' · ')
  const oddMatch = marketAndOdd.match(/@\s*(\d+(?:\.\d+)?)/)
  const market = marketAndOdd.replace(/\s*@\s*\d+(?:\.\d+)?/, '').trim()

  return {
    partido,
    liga: pick.liga ?? 'Dato no disponible',
    hora: pick.hora ?? 'Dato no disponible',
    mercado: pick.mercado ?? market ?? 'Dato no disponible',
    cuota: pick.cuota ?? oddMatch?.[1] ?? 'Dato no disponible',
    probabilidadModelo: pick.probabilidadModelo ?? 'Dato no disponible',
    fairOdds: pick.fairOdds ?? 'Dato no disponible',
    ev: pick.ev ?? 'Dato no disponible',
    motivoCorto: pick.motivoCorto ?? pick.motivoBreve ?? 'Sin motivo adicional disponible.',
  }
}

export function FreebetDailyReveal({ dailyCombinada }: FreebetDailyRevealProps) {
  const [status, setStatus] = useState<'idle' | 'processing' | 'revealed'>('idle')
  const [stepIndex, setStepIndex] = useState(0)

  function handleStartProcessing() {
    setStepIndex(0)
    setStatus('processing')
  }

  useEffect(() => {
    if (status !== 'processing') {
      return
    }

    const totalDuration = 2200
    const stepDuration = Math.floor(totalDuration / PROCESSING_STEPS.length)
    const intervalId = window.setInterval(() => {
      setStepIndex((current) => {
        if (current >= PROCESSING_STEPS.length - 1) {
          window.clearInterval(intervalId)
          return current
        }

        return current + 1
      })
    }, stepDuration)

    const timeoutId = window.setTimeout(() => {
      window.clearInterval(intervalId)
      setStatus('revealed')
    }, totalDuration)

    return () => {
      window.clearInterval(intervalId)
      window.clearTimeout(timeoutId)
    }
  }, [status])

  const picks = useMemo(() => dailyCombinada.picks.map(buildFallbackPickDetails), [dailyCombinada.picks])

  return (
    <div>
      {status === 'idle' ? (
        <div className="rounded-2xl border border-stone-100 bg-stone-50 p-5 sm:p-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="max-w-2xl">
              <h3 className="text-lg font-bold text-stone-800">Tu Freebet diaria está lista</h3>
              <p className="mt-1 text-sm text-stone-600">
                Procesa la selección diaria para revelar los pronósticos seleccionados
              </p>
            </div>

            <button
              type="button"
              onClick={handleStartProcessing}
              className="relative isolate inline-flex min-h-12 items-center justify-center rounded-lg border border-emerald-300/60 bg-emerald-500 px-6 py-3 text-sm font-bold text-white shadow-[0_18px_46px_rgba(16,185,129,0.35),0_0_0_1px_rgba(255,255,255,0.08)_inset] transition-all duration-200 after:pointer-events-none after:absolute after:inset-0 after:-z-10 after:rounded-lg after:bg-emerald-400/20 after:blur-xl hover:-translate-y-0.5 hover:border-emerald-200/80 hover:bg-emerald-400 hover:shadow-[0_22px_58px_rgba(16,185,129,0.46),0_0_22px_rgba(52,211,153,0.22)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500"
            >
              Procesar Freebet
            </button>
          </div>
        </div>
      ) : null}

      {status === 'processing' ? (
        <div className="rounded-2xl border border-emerald-100 bg-emerald-50/70 p-5 sm:p-6">
          <div className="flex items-center gap-3">
            <div className="relative h-10 w-10 shrink-0">
              <div className="absolute inset-0 rounded-full border-4 border-emerald-200" />
              <div className="absolute inset-0 animate-spin rounded-full border-4 border-transparent border-t-emerald-600" />
            </div>

            <div>
              <p className="text-sm font-semibold text-emerald-700">Procesando Freebet diaria</p>
              <p className="mt-1 text-sm text-stone-600">{PROCESSING_STEPS[stepIndex]}</p>
            </div>
          </div>

          <div className="mt-4 h-2 overflow-hidden rounded-full bg-emerald-100">
            <div
              className="h-full rounded-full bg-emerald-500 transition-all duration-500"
              style={{ width: `${((stepIndex + 1) / PROCESSING_STEPS.length) * 100}%` }}
            />
          </div>
        </div>
      ) : null}

      {status === 'revealed' ? (
        <>
          <div className="mb-5 sm:mb-6">
            <div
              className="relative overflow-hidden rounded-2xl border border-white/10 px-5 py-6 shadow-[0_20px_50px_rgba(16,185,129,0.12)] sm:px-8 sm:py-7"
              style={{ background: 'linear-gradient(135deg, #12112A 0%, #1e1840 50%, #2A1F3D 100%)' }}
            >
              <div className="grid grid-cols-2 divide-x divide-white/10">
                <div className="pr-4 sm:pr-6">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-300">
                    CUOTA TOTAL
                  </p>
                  <p className="mt-2 text-4xl font-extrabold leading-none tracking-tight text-emerald-400 tabular-nums sm:text-5xl">
                    {dailyCombinada.cuotaTotal}
                  </p>
                </div>

                <div className="pl-4 sm:pl-6">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-300">
                    CONFIANZA
                  </p>
                  <p className="mt-2 text-xl font-semibold leading-tight text-white sm:text-2xl">
                    {dailyCombinada.confianza}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-5 rounded-2xl border border-stone-200/80 bg-stone-50/80 p-4 shadow-sm shadow-stone-950/[0.03] backdrop-blur-sm sm:mb-6 sm:p-5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-stone-500">
              Resumen de la combinada
            </p>
            <div className="mt-3 space-y-2">
              {picks.map((pick, index) => (
                <p
                  key={`summary-${pick.partido}-${pick.mercado}-${index}`}
                  className="text-sm leading-6 text-stone-700 sm:text-[15px]"
                >
                  <span className="font-semibold text-stone-900">{index + 1}.</span>{' '}
                  <span className="font-medium text-stone-900">{pick.partido}</span> {'\u2192'} {pick.mercado}
                </p>
              ))}
            </div>
          </div>

          <div className="mb-5 rounded-2xl border border-emerald-100 bg-emerald-50/80 p-5 shadow-sm sm:mb-6 sm:p-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-700">
              Siguiente paso recomendado
            </p>
            <h3 className="mt-2 text-lg font-bold leading-tight text-stone-900">
              Si quieres activar una freebet real hoy, empieza por Versus
            </h3>
            <p className="mt-2 text-sm leading-6 text-stone-600">
              Versus te da 100€ en freebet al registrarte. Después puedes seguir la ruta guiada para convertirla en
              beneficio estimado de ~65€.
            </p>
            <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:items-center">
              <Link
                href="/casas/versus"
                className="inline-flex min-h-11 items-center justify-center rounded-lg bg-emerald-600 px-5 py-3 text-sm font-bold text-white shadow-sm transition-colors hover:bg-emerald-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
              >
                Ver bono de Versus →
              </Link>
              <Link
                href="/casas"
                className="inline-flex min-h-11 items-center justify-center rounded-lg px-4 py-3 text-sm font-semibold text-stone-600 transition-colors hover:bg-white/70 hover:text-stone-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
              >
                Ver otras casas con bono →
              </Link>
            </div>
          </div>

          <div className="grid gap-3">
          {picks.map((pick, index) => (
            <div
              key={`${pick.partido}-${pick.mercado}-${index}`}
              className="rounded-2xl border border-stone-100 bg-stone-50 px-4 py-4 shadow-sm transition-opacity duration-300"
            >
              <div className="flex items-start gap-3">
                <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-xs font-bold text-emerald-700">
                  {index + 1}
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <p className="text-sm font-semibold text-stone-800">{pick.partido}</p>
                      <p className="mt-1 text-xs text-stone-500">
                        {pick.liga} · {pick.hora}
                      </p>
                    </div>

                    <div className="rounded-xl border border-emerald-200 bg-white px-3 py-2 text-right">
                      <p className="text-[11px] uppercase tracking-wide text-stone-500">Cuota</p>
                      <p className="text-sm font-bold text-emerald-700">{pick.cuota}</p>
                    </div>
                  </div>

                  <div className="mt-3 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
                    <div className="rounded-xl bg-white px-3 py-2">
                      <p className="text-[11px] uppercase tracking-wide text-stone-500">Mercado</p>
                      <p className="mt-1 text-sm font-medium text-stone-800">{pick.mercado}</p>
                    </div>
                    <div className="rounded-xl bg-white px-3 py-2">
                      <p className="text-[11px] uppercase tracking-wide text-stone-500">Probabilidad modelo</p>
                      <p className="mt-1 text-sm font-medium text-stone-800">{pick.probabilidadModelo}</p>
                    </div>
                    <div className="rounded-xl bg-white px-3 py-2">
                      <p className="text-[11px] uppercase tracking-wide text-stone-500">Fair odds</p>
                      <p className="mt-1 text-sm font-medium text-stone-800">{pick.fairOdds}</p>
                    </div>
                    <div className="rounded-xl bg-white px-3 py-2">
                      <p className="text-[11px] uppercase tracking-wide text-stone-500">EV</p>
                      <p className="mt-1 text-sm font-medium text-stone-800">{pick.ev}</p>
                    </div>
                  </div>

                  <div className="mt-3 rounded-xl border border-stone-200 bg-white px-3 py-3">
                    <p className="text-[11px] uppercase tracking-wide text-stone-500">Motivo corto</p>
                    <p className="mt-1 text-sm text-stone-700">{pick.motivoCorto}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
          </div>
        </>
      ) : null}
    </div>
  )
}
