import Image from 'next/image'
import Link from 'next/link'

const telegramHref = 'https://t.me/Elte13'
const instagramHref = 'https://www.instagram.com/iapredicthub/'

const socialLinks = [
  {
    label: 'Telegram',
    href: telegramHref,
    icon: (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 fill-current">
        <path d="M21.74 4.87 18.55 19.9c-.24 1.07-.87 1.33-1.76.83l-4.87-3.59-2.35 2.26c-.26.26-.48.48-.98.48l.35-4.97 9.04-8.17c.39-.35-.09-.55-.61-.2L6.2 13.57 1.39 12.06c-1.04-.33-1.07-1.04.22-1.54L20.4 3.28c.87-.33 1.64.2 1.34 1.59Z" />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: instagramHref,
    icon: (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 fill-current">
        <path d="M7.8 2h8.4A5.81 5.81 0 0 1 22 7.8v8.4a5.81 5.81 0 0 1-5.8 5.8H7.8A5.81 5.81 0 0 1 2 16.2V7.8A5.81 5.81 0 0 1 7.8 2Zm-.2 2A3.6 3.6 0 0 0 4 7.6v8.8A3.6 3.6 0 0 0 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6A3.6 3.6 0 0 0 16.4 4H7.6Zm9.65 1.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5ZM12 7.35A4.65 4.65 0 1 1 12 16.65 4.65 4.65 0 0 1 12 7.35Zm0 2A2.65 2.65 0 1 0 12 14.65 2.65 2.65 0 0 0 12 9.35Z" />
      </svg>
    ),
  },
]

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
              Matched betting en español. Guías, calculadora y bonos paso a paso.
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
                <Link href="/beneficios-recurrentes" className="text-gray-500 transition-colors hover:text-violet-100">
                  Beneficios recurrentes
                </Link>
              </div>
            </div>
            <div>
              <p className="mb-3 text-[11px] font-semibold uppercase tracking-wider text-violet-200/75">
                Proyecto
              </p>
              <div className="flex flex-col gap-2">
                <Link href="/sobre-este-proyecto" className="text-gray-500 transition-colors hover:text-violet-100">
                  Acerca de IAPredictHub
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
                  href={telegramHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 transition-colors hover:text-violet-100"
                >
                  Telegram
                </a>
                <a
                  href={instagramHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 transition-colors hover:text-violet-100"
                >
                  Instagram
                </a>
                <div className="mt-2 flex items-center gap-2">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-violet-200/15 bg-slate-950/45 text-violet-100 shadow-[0_0_18px_rgba(124,58,237,0.16)] ring-1 ring-white/[0.04] transition duration-200 hover:border-violet-200/30 hover:bg-violet-400/10 hover:text-white hover:shadow-[0_0_22px_rgba(124,58,237,0.24)]"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <div>
              <p className="mb-3 text-[11px] font-semibold uppercase tracking-wider text-violet-200/75">
                Confianza
              </p>
              <div className="flex flex-col gap-2 text-gray-500">
                <span>Solo mayores de 18</span>
                <span>Juego responsable</span>
                <span>Revisa condiciones oficiales</span>
                <span>Uso educativo</span>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-white/8 pt-6">
          <p className="mb-2 text-center text-xs font-medium leading-relaxed text-white/75">
            © 2026 IAPredictHub. Todos los derechos reservados.
          </p>
          <p className="mx-auto max-w-2xl text-center text-[11px] leading-relaxed text-gray-600">
            Algunos enlaces pueden ser de afiliado. Esto no cambia el precio para el usuario. Solo para uso educativo.
            Apuesta con responsabilidad.
          </p>
        </div>
      </div>
    </footer>
  )
}
