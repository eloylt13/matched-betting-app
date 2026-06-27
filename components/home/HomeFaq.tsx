"use client";

import { useState } from 'react'

const FAQ_ITEMS = [
  {
    question: '¿Es gratis?',
    answer: 'Sí. Puedes consultar las guías, la calculadora y el primer bono recomendado sin pagar en IAPredictHub.',
  },
  {
    question: '¿Necesito cuenta en IAPredictHub?',
    answer:
      'No. Puedes seguir la guía sin crear cuenta en IAPredictHub. El registro se realiza en la casa de apuestas cuando decides aprovechar una promoción.',
  },
  {
    question: '¿Hace falta depositar en la casa?',
    answer:
      'Sí, normalmente las promociones de bienvenida requieren registro, verificación y depósito en la casa. En la guía se explica el proceso paso a paso.',
  },
  {
    question: '¿Es para mayores de 18?',
    answer:
      'Sí. IAPredictHub está dirigido únicamente a mayores de 18 años. Revisa siempre las condiciones oficiales de cada casa y apuesta de forma responsable.',
  },
]

export default function HomeFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="landing-reveal relative overflow-hidden bg-[#080B16] py-16 sm:py-20">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-200/35 to-transparent" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-full max-w-4xl -translate-x-1/2 bg-[radial-gradient(circle_at_center,rgba(52,211,153,0.12),transparent_62%)]" />

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-playfair text-2xl font-bold text-white sm:text-3xl">Preguntas frecuentes</h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-400 sm:text-base">
            Resuelve las dudas básicas antes de empezar.
          </p>
        </div>

        <div className="mt-9 space-y-3">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index
            const answerId = `home-faq-answer-${index}`
            const buttonId = `home-faq-button-${index}`

            return (
              <div
                key={item.question}
                className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.045] shadow-[0_18px_46px_rgba(0,0,0,0.20),0_0_26px_rgba(16,185,129,0.06)] ring-1 ring-white/[0.035] backdrop-blur-sm"
              >
                <button
                  id={buttonId}
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left text-sm font-semibold text-white transition-colors hover:bg-white/[0.035] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-emerald-200/70 sm:px-6 sm:text-base"
                >
                  <span className="min-w-0">{item.question}</span>
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-emerald-200/20 bg-emerald-300/10 text-emerald-100 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : 'rotate-0'
                    }`}
                    aria-hidden="true"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4"
                    >
                      <path d="m7 10 5 5 5-5" />
                    </svg>
                  </span>
                </button>

                <div
                  id={answerId}
                  role="region"
                  aria-labelledby={buttonId}
                  hidden={!isOpen}
                  className="px-5 pb-5 text-sm leading-relaxed text-slate-300 sm:px-6 sm:pb-6"
                >
                  {item.answer}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
