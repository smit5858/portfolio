import { cn } from '@/utils'

interface PageTitleProps {
  title: string
  subtitle?: string
  className?: string
  align?: 'left' | 'center' | 'right'
}

/**
 * Reusable page / section heading with optional subtitle.
 * Uses a decorative gradient underline accent.
 */
export function PageTitle({ title, subtitle, className, align = 'center' }: PageTitleProps) {
  const alignClass = {
    left: 'text-left items-start',
    center: 'text-center items-center',
    right: 'text-right items-end',
  }[align]

  return (
    <div className={cn('flex flex-col gap-3 mb-12 md:mb-16', alignClass, className)}>
      <h2
        className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl"
        style={{ color: 'var(--color-text)' }}
      >
        {title}
      </h2>

      {/* Gradient accent bar */}
      <span
        className="h-1 w-16 rounded-full"
        style={{
          background: 'linear-gradient(90deg, var(--color-brand-500), var(--color-accent-500))',
        }}
        aria-hidden="true"
      />

      {subtitle && (
        <p
          className="max-w-2xl text-base md:text-lg leading-relaxed"
          style={{ color: 'var(--color-text-muted)' }}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
