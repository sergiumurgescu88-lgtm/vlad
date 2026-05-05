import { Suspense, lazy } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import RootLayout from './layout/RootLayout'

const Dashboard = lazy(() => import('./pages/Dashboard'))
const Wizard = lazy(() => import('./pages/Wizard'))
const Settings = lazy(() => import('./pages/Settings'))

function LoadingFallback() {
  return <div className="flex items-center justify-center h-64 text-muted-foreground">Se încarcă...</div>
}

export default function App() {
  return (
    <RootLayout>
      <Suspense fallback={<LoadingFallback />}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/wizard" element={<Wizard />} />
          <Route path="/wizard/:businessId" element={<Wizard />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </RootLayout>
  )
}
