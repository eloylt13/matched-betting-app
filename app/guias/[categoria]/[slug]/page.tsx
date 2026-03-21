import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { MDXRemote } from 'next-mdx-remote/rsc'

interface PageProps {
  params: Promise<{
    categoria: string
    slug: string
  }>
}

interface FrontmatterData {
  title: string
  descripcion?: string
  emoji?: string
  [key: string]: any
}

const guiasDir = path.join(process.cwd(), 'content/guias')

function getAvailablePaths() {
  const paths: Array<{ categoria: string; slug: string }> = []
  const categories = fs.readdirSync(guiasDir)
  categories.forEach((category) => {
    const categoryPath = path.join(guiasDir, category)
    if (fs.statSync(categoryPath).isDirectory()) {
      fs.readdirSync(categoryPath).forEach((file) => {
        if (file.endsWith('.mdx') || file.endsWith('.md')) {
          paths.push({ categoria: category, slug: file.replace(/\.(mdx|md)$/, '') })
        }
      })
    }
  })
  return paths
}

export async function generateStaticParams() {
  return getAvailablePaths()
}

function getGuiaContent(categoria: string, slug: string): { content: string; frontmatter: FrontmatterData } | null {
  const filePath = path.join(guiasDir, categoria, `${slug}.mdx`)
  if (!fs.existsSync(filePath)) return null
  const { data, content } = matter(fs.readFileSync(filePath, 'utf-8'))
  return { content, frontmatter: data as FrontmatterData }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { categoria, slug } = await params
  const guia = getGuiaContent(categoria, slug)

  if (!guia) return {}

  return {
    title: `${guia.frontmatter.title} | IAPredictHub`,
    description: guia.frontmatter.descripcion ?? '',
  }
}

const CATEGORIA_LABEL: Record<string, string> = {
  'primeros-pasos': 'Primeros pasos',
  'modulos': 'Modulos',
  'estrategia': 'Estrategia',
  'casas': 'Guias por casa',
}

export default async function GuiaPage({ params }: PageProps) {
  const { categoria, slug } = await params
  const guia = getGuiaContent(categoria, slug)
  if (!guia) notFound()

  const { content, frontmatter } = guia

  return (
    <div className="min-h-screen bg-[#F5F3EE]">
      <div style={{ position: 'relative', zIndex: 1 }}>
        <div className="max-w-3xl mx-auto px-4 py-10">

          {/* Breadcrumb */}
          <div className="mb-6">
            <a href="/guias" className="text-sm text-stone-400 hover:text-stone-600 transition-colors">
              Guias
            </a>
            <span className="text-sm text-stone-300 mx-2">/</span>
            <span className="text-sm text-stone-500">
              {CATEGORIA_LABEL[categoria] ?? categoria}
            </span>
          </div>

          {/* Card */}
          <div className="bg-white rounded-2xl shadow-sm border border-stone-200 overflow-hidden">

            {/* Header */}
            <div
              className="px-8 py-10"
              style={{ background: 'linear-gradient(135deg, #12112A 0%, #2A1F3D 100%)' }}
            >
              <div className="flex items-start gap-5">
                {frontmatter.emoji && (
                  <span style={{ fontSize: '3rem', lineHeight: 1, flexShrink: 0, marginTop: '4px' }}>
                    {frontmatter.emoji}
                  </span>
                )}
                <div>
                  <h1
                    className="font-bold text-white leading-tight mb-3"
                    style={{ fontSize: '1.75rem' }}
                  >
                    {frontmatter.title}
                  </h1>
                  {frontmatter.descripcion && (
                    <p className="text-stone-300 leading-relaxed" style={{ fontSize: '1rem' }}>
                      {frontmatter.descripcion}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Contenido MDX con marca de agua dentro */}
            <div
              className="px-8 py-10"
              style={{ position: 'relative' }}
            >
              {/* Marca de agua dentro del contenido */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  pointerEvents: 'none',
                  userSelect: 'none',
                  zIndex: 0,
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    opacity: 0.06,
                    transform: 'rotate(-25deg)',
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/logo.png"
                    alt=""
                    style={{ width: '220px', height: '220px', objectFit: 'contain' }}
                  />
                  <div
                    style={{
                      fontSize: '2rem',
                      fontWeight: 800,
                      color: '#1a1a2e',
                      marginTop: '0.5rem',
                      fontFamily: 'Georgia, serif',
                      letterSpacing: '-0.01em',
                    }}
                  >
                    IAPredictHub
                  </div>
                </div>
              </div>

              {/* Texto del contenido */}
              <div style={{ position: 'relative', zIndex: 1 }}>
                <style>{`
                  .guia-content h2 {
                    font-size: 1.2rem;
                    font-weight: 700;
                    color: #1c1917;
                    margin-top: 2.5rem;
                    margin-bottom: 0.75rem;
                    padding-bottom: 0.5rem;
                    border-bottom: 2px solid #f0ede8;
                  }
                  .guia-content h3 {
                    font-size: 1rem;
                    font-weight: 600;
                    color: #292524;
                    margin-top: 1.75rem;
                    margin-bottom: 0.5rem;
                  }
                  .guia-content p {
                    font-size: 0.95rem;
                    line-height: 1.8;
                    color: #57534e;
                    margin-bottom: 1rem;
                  }
                  .guia-content ul, .guia-content ol {
                    padding-left: 1.5rem;
                    margin-bottom: 1.25rem;
                  }
                  .guia-content li {
                    font-size: 0.95rem;
                    line-height: 1.8;
                    color: #57534e;
                    margin-bottom: 0.4rem;
                  }
                  .guia-content strong {
                    color: #1c1917;
                    font-weight: 600;
                  }
                  .guia-content a {
                    color: #059669;
                    text-decoration: none;
                  }
                  .guia-content a:hover {
                    text-decoration: underline;
                  }
                  .guia-content blockquote {
                    border-left: 3px solid #10b981;
                    padding-left: 1rem;
                    margin: 1.5rem 0;
                    color: #78716c;
                    font-style: italic;
                  }
                `}</style>
                <div className="guia-content">
                  <MDXRemote source={content} />
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="px-8 py-5 border-t border-stone-100 bg-stone-50 flex items-center justify-between">
              <a
                href="/guias"
                className="text-sm font-medium text-stone-500 hover:text-stone-800 transition-colors"
              >
                Volver a guias
              </a>
              <span className="text-xs text-stone-300 font-medium">
                IAPredictHub · Solo uso educativo
              </span>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
