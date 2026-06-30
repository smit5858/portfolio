import { ThemeProvider } from '@/context/ThemeContext'
import { AppRouter } from '@/routes'
import ErrorBoundary from '@/components/common/ErrorBoundary'

/**
 * Application root.
 * Wraps the entire app in:
 *   1. ErrorBoundary  — catches and displays rendering errors
 *   2. ThemeProvider  — supplies theme context to all components
 *   3. AppRouter      — handles client-side routing
 */
export default function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider>
        <AppRouter />
      </ThemeProvider>
    </ErrorBoundary>
  )
}
