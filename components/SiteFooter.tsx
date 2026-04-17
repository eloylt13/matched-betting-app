import Image from 'next/image'
import Link from 'next/link'

export default function SiteFooter() {
  return (
    <footer
      style={{ background: 'linear-gradient(180deg, #0a0918 0%, #090816 100%)' }}
      className="relative overflow-hidden border-t border-white/10"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-300/35 to-transparent" />
      <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-11 lg:px-8">
        <div className="mb-9 flex flex-col items-center justify-between gap-8 rounded-[1.25rem] border border-violet-200/10 bg-white/[0.035] px-5 py-6 shadow-[0_20px_58px_rgba(0,0,0,0.22)] ring-1 ring-white/[0.035] backdrop-blur-sm sm:flex-row sm:items-start sm:px-7 sm:py-7">
          <div className="text-center sm:text-left">
            <div className="mb-3 flex items-center justify-center gap-3 sm:justify-start">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-full border border-violet-200/15 bg-white/[0.05] shadow-[0_14px_34px_rgba(124,58,237,0.18)] sm:h-14 sm:w-14">
                <Image
                  src="/logo.png"
                  alt="IAPredictHub"
                  width={56}
                  height={56}
                  className="aspect-square h-full w-full object-contain object-center"
                />
              </span>
              <span className="text-base font-bold text-white">IAPredictHub</span>
            </div>
            <p className="max-w-xs text-xs leading-relaxed text-gray-500">
              Herramienta en español para organizar bonos, guías y cálculo paso a paso.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 text-xs sm:grid-cols-5 sm:gap-6">
            <div>
              <p className="mb-3 text-[11px] font-semibold uppercase tracking-wider text-violet-200/75">
                Herramienta
              </p>
              <div className="flex flex-col gap-2">
                <Link href="/guias" className="text-gray-500 transition-colors hover:text-violet-100">
                  Guías
                </Link>
                <Link href="/calculadora" className="text-gray-500 transition-colors hover:text-violet-100">
                  Calculadora
                </Link>
                <Link href="/casas" className="text-gray-500 transition-colors hover:text-violet-100">
                  Casas
                </Link>
                <Link href="/dashboard" className="text-gray-500 transition-colors hover:text-violet-100">
                  Dashboard
                </Link>
              </div>
            </div>
            <div>
              <p className="mb-3 text-[11px] font-semibold uppercase tracking-wider text-violet-200/75">
                Proyecto
              </p>
              <div className="flex flex-col gap-2">
                <Link href="/sobre-este-proyecto" className="text-gray-500 transition-colors hover:text-violet-100">
                  Sobre este proyecto
                </Link>
                <Link href="/preguntas-frecuentes" className="text-gray-500 transition-colors hover:text-violet-100">
                  Preguntas frecuentes
                </Link>
              </div>
            </div>
            <div>
              <p className="mb-3 text-[11px] font-semibold uppercase tracking-wider text-violet-200/75">
                Legal
              </p>
              <div className="flex flex-col gap-2">
                <Link href="/legal/aviso" className="text-gray-500 transition-colors hover:text-violet-100">
                  Aviso legal
                </Link>
                <Link href="/legal/privacidad" className="text-gray-500 transition-colors hover:text-violet-100">
                  Privacidad
                </Link>
                <Link href="/legal/cookies" className="text-gray-500 transition-colors hover:text-violet-100">
                  Cookies
                </Link>
              </div>
            </div>
            <div>
              <p className="mb-3 text-[11px] font-semibold uppercase tracking-wider text-violet-200/75">
                Contacto
              </p>
              <div className="flex flex-col gap-2">
                <a
                  href="https://t.me/Elte13"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 transition-colors hover:text-violet-100"
                >
                  Telegram
                </a>
                <a
                  href="https://www.instagram.com/iapredicthub/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 transition-colors hover:text-violet-100"
                >
                  Instagram
                </a>
              </div>
            </div>
            <div>
              <p className="mb-3 text-[11px] font-semibold uppercase tracking-wider text-violet-200/75">
                Confianza
              </p>
              <div className="flex flex-col gap-2 text-gray-500">
                <span>Mayores de 18</span>
                <span>Juego responsable</span>
                <span>Uso educativo</span>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-white/8 pt-6">
          <p className="mb-2 text-center text-[11px] leading-relaxed text-gray-600">
            Algunos enlaces pueden ser de afiliado. Esto no cambia el precio para el usuario.
          </p>
          <p className="text-center text-[11px] leading-relaxed text-gray-600">
            © 2026 IAPredictHub. Todos los derechos reservados. · Solo para uso educativo. Apuesta con responsabilidad.
          </p>
        </div>
      </div>
    </footer>
  )
}
