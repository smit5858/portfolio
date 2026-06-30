import { cn } from '@/utils'

interface LoadingProps {
  className?: string
  size?: 'sm' | 'md' | 'lg'
  label?: string
}

const sizeMap = {
  sm: 'h-5 w-5 border-2',
  md: 'h-8 w-8 border-2',
  lg: 'h-12 w-12 border-[3px]',
}

export function Loading({ className, size = 'md', label = 'Loading…' }: LoadingProps) {
  return (
    <div
      role="status"
      aria-label={label}
      className={cn('flex flex-col items-center justify-center gap-3 py-16', className)}
    >
      <span
        className={cn(
          'inline-block animate-spin rounded-full border-solid',
          'border-t-transparent',
          sizeMap[size]
        )}
        style={{
          borderColor: 'var(--color-border)',
          borderTopColor: 'var(--color-brand-500)',
        }}
        aria-hidden="true"
      />
      <span
        className="text-sm"
        style={{ color: 'var(--color-text-muted)' }}
      >
        {label}
      </span>
    </div>
  )
}

/** Full-page loading screen used in Suspense fallback */
export function PageLoading() {
  return (
    <div
      role="status"
      aria-label="Page loading…"
      className="fixed inset-0 flex items-center justify-center"
      style={{ background: 'var(--color-surface)' }}
    >
      <Loading size="lg" label="Page loading…" />
    </div>
  )
}
