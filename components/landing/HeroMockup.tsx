import Link from 'next/link'

export default function HeroMockup() {
  return (
    <div className="mx-auto w-full max-w-[20rem] sm:max-w-xs lg:max-w-[20rem]">
      <Link
        href="/casas"
        className="group relative block overflow-hidden rounded-2xl border border-violet-200/20 bg-white/[0.07] p-3 text-left shadow-[0_18px_46px_rgba(88,28,135,0.22)] backdrop-blur-xl transition-all duration-200 hover:-translate-y-0.5 hover:border-violet-200/35 hover:bg-white/[0.1] hover:shadow-[0_22px_56px_rgba(124,58,237,0.28)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-300/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
      >
        <div className="pointer-events-none absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-violet-100/70 to-transparent" />
        <div className="pointer-events-none absolute -right-8 -top-10 h-24 w-24 rounded-full bg-violet-400/14 blur-3xl" />
        <div className="pointer-events-none absolute -left-8 bottom-[-2.25rem] h-20 w-20 rounded-full bg-fuchsia-400/10 blur-3xl" />

        <div className="relative flex items-center gap-3.5">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-violet-200/20 bg-violet-300/12 text-lg shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_10px_24px_rgba(109,40,217,0.14)]">
            <span aria-hidden="true">{"\uD83C\uDF81"}</span>
          </div>

          <div className="min-w-0 flex-1">
            <h3 className="bg-gradient-to-r from-violet-100 via-cyan-100 to-emerald-100 bg-clip-text text-sm font-semibold leading-tight text-transparent">
              Explora bonos por casa
            </h3>
            <p className="mt-1 text-xs leading-snug text-slate-300">50+ casas disponibles</p>
          </div>

          <span
            className="shrink-0 text-lg font-semibold leading-none text-violet-100 transition-transform duration-200 group-hover:translate-x-0.5"
            aria-hidden="true"
          >
            {"\u2192"}
          </span>
        </div>
      </Link>
    </div>
  )
}
