import React, { useState, useEffect, lazy, Suspense } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

// Lazy load componente grele
const Wizard = lazy(() => import('./components/Wizard'))
const Dashboard = lazy(() => import('./components/Dashboard'))
const Pricing = lazy(() => import('./components/Pricing'))

export default function App() {
  const [page, setPage] = useState('landing')
  const [wizardStep, setWizardStep] = useState(0)
  const [intakeData, setIntakeData] = useState({})

  useEffect(() => {
    const saved = localStorage.getItem('agentulmeu_intake')
    if (saved) setIntakeData(JSON.parse(saved))
  }, [])

  const saveIntake = (data) => {
    const updated = {...intakeData, ...data}
    setIntakeData(updated)
    localStorage.setItem('agentulmeu_intake', JSON.stringify(updated))
  }

  // Loading fallback pentru lazy components
  const Loading = () => <div className="loading text-center py-20">⏳ Se încarcă...</div>

  if (page === 'wizard') return (
    <Suspense fallback={<Loading />}>
      <Wizard step={wizardStep} setStep={setWizardStep} data={intakeData} saveData={saveIntake} onComplete={() => setPage('dashboard')} onBack={() => setPage('landing')} />
    </Suspense>
  )
  
  if (page === 'dashboard') return (
    <Suspense fallback={<Loading />}>
      <Dashboard data={intakeData} onBack={() => setPage('landing')} />
    </Suspense>
  )

  return (
    <div className="min-h-screen">
      <Navbar setPage={setPage} />
      <Hero onStart={() => {setWizardStep(0); setPage('wizard')}} />
      <Features />
      <Suspense fallback={null}>
        <Pricing />
      </Suspense>
      <FAQ />
      <Footer />
    </div>
  )
}
