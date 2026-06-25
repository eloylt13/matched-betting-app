import Link from 'next/link'

type BlogCtaVariant = 'world-cup' | 'first-bonus' | 'bonuses' | 'recurrentes'

type BlogCtaProps = {
  variant: BlogCtaVariant
  className?: string
}

type BlogCtaContent = {
  eyebrow: string
  title: string
  text: string
  primaryLabel: string
  primaryHref: string
  secondaryLabel: string
  secondaryHref: string
}

const ctaContent: Record<BlogCtaVariant, BlogCtaContent> = {
  'world-cup': {
    eyebrow: 'Especial Mundial 2026',
    title: 'Sigue todas las predicciones del Mundial 2026',
    text: 'Consulta el especial editorial con predicciones, favoritos, bajas y mercados destacados.',
    primaryLabel: 'Ver especial Mundial',
    primaryHref: '/especial/mundial',
    secondaryLabel: 'Ver bono recomendado',
    secondaryHref: '/casas/versus',
  },
  'first-bonus': {
    eyebrow: 'Primer bono guiado',
    title: 'Empieza con tu primer bono paso a paso',
    text: 'Te guiamos con una casa sencilla para empezar sin perderte entre decenas de opciones.',
    primaryLabel: 'Ver bono recomendado',
    primaryHref: '/casas/versus',
    secondaryLabel: 'Abrir bienvenida',
    secondaryHref: '/bienvenida',
  },
  bonuses: {
    eyebrow: 'Bonos de bienvenida',
    title: 'Compara bonos antes de registrarte',
    text: 'Revisa casas, condiciones y dificultad antes de elegir dónde empezar.',
    primaryLabel: 'Ver bonos',
    primaryHref: '/bonos',
    secondaryLabel: 'Ver casas',
    secondaryHref: '/casas',
  },
  recurrentes: {
    eyebrow: 'Beneficios recurrentes',
    title: 'Aprende a evaluar promociones recurrentes',
    text: 'No se trata de acertar partidos, sino de revisar condiciones, cubrir escenarios y calcular si una promoción compensa.',
    primaryLabel: 'Ver guía de recurrentes',
    primaryHref: '/blog/que-son-los-bonos-recurrentes',
    secondaryLabel: 'Abrir calculadora',
    secondaryHref: '/calculadora',
  },
}

export default function BlogCta({ variant, className = '' }: BlogCtaProps) {
  const content = ctaContent[variant]

  return (
    <aside
      className={`my-8 overflow-hidden rounded-3xl border border-violet-100 bg-[linear-gradient(135deg,#ffffff_0%,#faf7ff_52%,#f8fbfa_100%)] p-5 shadow-[0_18px_50px_rgba(46,16,101,0.08)] sm:p-6 ${className}`}
    >
      <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="max-w-2xl">
          <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.18em] text-violet-700">
            {content.eyebrow}
          </p>
          <h2 className="text-xl font-bold leading-tight text-stone-950 sm:text-2xl">
            {content.title}
          </h2>
          <p className="mt-3 text-sm leading-6 text-stone-600 sm:text-base">
            {content.text}
          </p>
        </div>

        <div className="flex shrink-0 flex-col gap-3 sm:min-w-52">
          <Link
            href={content.primaryHref}
            className="inline-flex min-h-12 items-center justify-center rounded-2xl bg-[#2A1F3D] px-5 py-3 text-center text-sm font-semibold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-[#3d2e57] hover:shadow-md"
          >
            {content.primaryLabel}
          </Link>
          <Link
            href={content.secondaryHref}
            className="inline-flex min-h-12 items-center justify-center rounded-2xl border border-stone-200 bg-white px-5 py-3 text-center text-sm font-semibold text-stone-700 transition-colors hover:border-violet-200 hover:bg-violet-50 hover:text-violet-700"
          >
            {content.secondaryLabel}
          </Link>
        </div>
      </div>

      <p className="mt-5 border-t border-stone-200/70 pt-4 text-xs leading-5 text-stone-500">
        +18 · Juego responsable · Algunos enlaces pueden ser de afiliado.
      </p>
    </aside>
  )
}
