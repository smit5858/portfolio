import { lazy, Suspense } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { RootLayout } from '@/layouts/RootLayout'
import { PageLoading } from '@/components/ui/Loading'
import ErrorBoundary from '@/components/common/ErrorBoundary'

// ─── Lazy-loaded pages ────────────────────────────────────────────────────────
// Each page is a separate chunk — only downloaded when first navigated to.
const HomePage     = lazy(() => import('@/pages/HomePage'))
const NotFoundPage = lazy(() => import('@/pages/NotFoundPage'))

// ─── Suspense wrapper ─────────────────────────────────────────────────────────
function PageSuspense({ children }: { children: React.ReactNode }) {
  return <Suspense fallback={<PageLoading />}>{children}</Suspense>
}

// ─── Router ───────────────────────────────────────────────────────────────────
const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: (
      <ErrorBoundary>
        <RootLayout />
      </ErrorBoundary>
    ),
    children: [
      {
        index: true,
        element: (
          <PageSuspense>
            <HomePage />
          </PageSuspense>
        ),
      },
      {
        path: '*',
        element: (
          <PageSuspense>
            <NotFoundPage />
          </PageSuspense>
        ),
      },
    ],
  },
])

// ─── App Router ───────────────────────────────────────────────────────────────
export function AppRouter() {
  return <RouterProvider router={router} />
}
