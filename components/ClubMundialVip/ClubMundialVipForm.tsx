export default function ClubMundialVipForm() {
  return (
    <div className="mt-4 rounded-3xl border border-amber-700/30 bg-gradient-to-br from-[#0a2e1f] via-[#1a4d32] to-[#0a1410] px-5 py-5 shadow-sm sm:px-6">
      <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-amber-300">
        PRÓXIMAMENTE
      </p>
      <div className="mt-3">
        <h3 className="text-lg font-semibold leading-tight text-white sm:text-xl">
          Club Mundial VIP
        </h3>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-stone-200">
          Apúntate a la lista de espera del Mundial 2026.
        </p>
        <p className="mt-2 text-xs font-medium text-amber-300/90">
          100 plazas previstas · Precio especial para los primeros inscritos
        </p>
      </div>
      <iframe
        src="https://tally.so/embed/EkBgjN?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
        title="Lista de espera · Club Mundial VIP"
        loading="lazy"
        width="100%"
        height="220"
        scrolling="no"
        className="mt-4 w-full rounded-2xl border border-amber-700/20 bg-white"
        style={{ border: 0 }}
      />
    </div>
  )
}
