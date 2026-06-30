import { Component } from 'react'
import type { ErrorInfo, ReactNode } from 'react'

// ─── Types ────────────────────────────────────────────────────────────────────
interface Props {
  children: ReactNode
  fallback?: ReactNode
}

interface State {
  hasError: boolean
  error: Error | null
  errorInfo: ErrorInfo | null
}

// ─── Error Boundary ───────────────────────────────────────────────────────────
/**
 * Catches React rendering errors anywhere in the subtree.
 * Displays a professional fallback UI with recovery options.
 * Must be a class component – React's error boundary API only works with class components.
 */
class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false, error: null, errorInfo: null }
  }

  static getDerivedStateFromError(error: Error): Partial<State> {
    return { hasError: true, error }
  }

  override componentDidCatch(error: Error, info: ErrorInfo) {
    this.setState({ errorInfo: info })
    // In production you'd send this to an error reporting service
    console.error('[ErrorBoundary] Uncaught error:', error, info)
  }

  private handleReload = () => window.location.reload()

  private handleGoHome = () => {
    this.setState({ hasError: false, error: null, errorInfo: null })
    window.location.href = '/'
  }

  override render() {
    if (this.state.hasError) {
      if (this.props.fallback) return this.props.fallback

      return (
        <div
          role="alert"
          aria-live="assertive"
          style={{
            minHeight: '100dvh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            padding: '2rem',
            textAlign: 'center',
            fontFamily: 'var(--font-sans, system-ui)',
            background: 'var(--color-surface, #0d0f14)',
            color: 'var(--color-text, #e8eaf0)',
            gap: '1.5rem',
          }}
        >
          {/* Icon */}
          <div style={{ fontSize: '4rem', lineHeight: 1 }} aria-hidden="true">
            💥
          </div>

          {/* Heading */}
          <div>
            <h1
              style={{
                fontSize: '1.875rem',
                fontWeight: 700,
                marginBottom: '0.5rem',
                color: 'var(--color-text, #e8eaf0)',
              }}
            >
              Something went wrong
            </h1>
            <p
              style={{
                fontSize: '1rem',
                color: 'var(--color-text-muted, #9198a9)',
                maxWidth: '40ch',
                margin: '0 auto',
              }}
            >
              An unexpected error occurred. You can try reloading the page or going back to the home
              page.
            </p>
          </div>

          {/* Error details (dev only) */}
          {import.meta.env.DEV && this.state.error && (
            <details
              style={{
                maxWidth: '60ch',
                background: '#1a1d27',
                border: '1px solid #252834',
                borderRadius: '8px',
                padding: '1rem',
                textAlign: 'left',
                fontSize: '0.875rem',
                color: '#f87171',
                cursor: 'pointer',
              }}
            >
              <summary style={{ fontWeight: 600, marginBottom: '0.5rem', cursor: 'pointer' }}>
                Error details (dev only)
              </summary>
              <pre style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word', margin: 0 }}>
                {this.state.error.toString()}
                {this.state.errorInfo?.componentStack}
              </pre>
            </details>
          )}

          {/* Actions */}
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <button
              onClick={this.handleGoHome}
              style={{
                padding: '0.625rem 1.5rem',
                background: 'var(--color-brand-500, #5b78f2)',
                color: '#fff',
                border: 'none',
                borderRadius: '6px',
                fontWeight: 600,
                fontSize: '0.9rem',
                cursor: 'pointer',
                transition: 'opacity 0.2s',
              }}
              onMouseOver={(e) => ((e.currentTarget as HTMLButtonElement).style.opacity = '0.85')}
              onMouseOut={(e) => ((e.currentTarget as HTMLButtonElement).style.opacity = '1')}
            >
              Go Home
            </button>

            <button
              onClick={this.handleReload}
              style={{
                padding: '0.625rem 1.5rem',
                background: 'transparent',
                color: 'var(--color-text-muted, #9198a9)',
                border: '1px solid var(--color-border, #252834)',
                borderRadius: '6px',
                fontWeight: 600,
                fontSize: '0.9rem',
                cursor: 'pointer',
                transition: 'border-color 0.2s, color 0.2s',
              }}
              onMouseOver={(e) => {
                const btn = e.currentTarget as HTMLButtonElement
                btn.style.borderColor = 'var(--color-brand-500)'
                btn.style.color = 'var(--color-brand-500)'
              }}
              onMouseOut={(e) => {
                const btn = e.currentTarget as HTMLButtonElement
                btn.style.borderColor = 'var(--color-border, #252834)'
                btn.style.color = 'var(--color-text-muted, #9198a9)'
              }}
            >
              Reload Page
            </button>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
