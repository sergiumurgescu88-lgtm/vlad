import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Pricing from './components/Pricing'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import Wizard from './components/Wizard'
import Dashboard from './components/Dashboard'

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
  
  if (page === 'wizard') return <Wizard step={wizardStep} setStep={setWizardStep} data={intakeData} saveData={saveIntake} onComplete={() => setPage('dashboard')} onBack={() => setPage('landing')} />
  if (page === 'dashboard') return <Dashboard data={intakeData} onBack={() => setPage('landing')} />
  
  return (
    <div className="min-h-screen">
      <Navbar setPage={setPage} />
      <Hero onStart={() => {setWizardStep(0); setPage('wizard')}} />
      <Features />
      <Pricing />
      <FAQ />
      <Footer />
    </div>
  )
}
