import { Link } from 'react-router-dom'
import { Home, ArrowLeft } from 'lucide-react'
import { usePageMeta } from '@/hooks/usePageMeta'

export default function NotFoundPage() {
  usePageMeta('404 — Page Not Found', 'The page you are looking for does not exist.')

  return (
    <section
      className="flex min-h-[calc(100dvh-4rem)] items-center justify-center"
      aria-labelledby="not-found-heading"
    >
      <div>
        <div className="flex flex-col items-center text-center gap-6 py-20">
          {/* 404 number */}
          <div
            className="text-[10rem] font-black leading-none select-none bg-clip-text text-transparent"
            style={{
              backgroundImage:
                'linear-gradient(135deg, var(--color-brand-500), var(--color-accent-500))',
            }}
            aria-hidden="true"
          >
            404
          </div>

          <div>
            <h1
              id="not-found-heading"
              className="text-3xl font-bold mb-3"
              style={{ color: 'var(--color-text)' }}
            >
              Page not found
            </h1>
            <p className="max-w-md text-base" style={{ color: 'var(--color-text-muted)' }}>
              Oops! The page you're looking for doesn't exist or has been moved. Let's get you back
              on track.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
              style={{
                background:
                  'linear-gradient(135deg, var(--color-brand-500), var(--color-accent-500))',
              }}
            >
              <Home size={16} aria-hidden="true" />
              Go Home
            </Link>
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5"
              style={{
                background: 'var(--color-surface-subtle)',
                border: '1px solid var(--color-border)',
                color: 'var(--color-text-muted)',
              }}
            >
              <ArrowLeft size={16} aria-hidden="true" />
              Go Back
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
