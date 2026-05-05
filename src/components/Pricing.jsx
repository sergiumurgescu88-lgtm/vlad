import React, { useState, useEffect } from 'react'
export default function Pricing() {
  const [plans, setPlans] = useState(null)
  const [modal, setModal] = useState(null)
  
  useEffect(() => {
    fetch('/api/kb/pricing').then(r => r.json()).then(setPlans).catch(console.error)
  }, [])
  
  const handleCheckout = async (planKey) => {
    const email = prompt('📧 Email pentru factură:', '')
    if (!email || !email.includes('@')) { alert('Email invalid'); return }
    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ user_email: email, plan: planKey })
      })
      const data = await res.json()
      if (data.success && data.url) window.location.href = data.url
      else alert('Eroare: ' + (data.error || 'Failed'))
    } catch (e) { alert('Eroare conexiune: ' + e.message) }
  }
  
  if (!plans) return <div className="section text-center text-slate-400">Se încarcă prețurile...</div>
  
  const createCard = (key, plan, price, period, c1, c2, badge, features, highlight) => (
    <div key={key} className={`card relative ${highlight ? 'ring-2 ring-amber-500/50' : ''}`} style={{background: `linear-gradient(135deg, ${c1}, ${c2})`}} onClick={() => setModal({key, plan, price, period, features})}>
      {badge && <span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-amber-400 text-slate-900 text-xs font-bold">{badge}</span>}
      <h3 className="text-white text-xl font-bold mb-2">{plan.name}</h3>
      <div className="mb-3"><span className="text-4xl font-black text-white">${price}</span><span className="text-slate-300 ml-2">{period}</span></div>
      <p className="text-slate-300 text-sm mb-4">{plan.short_desc}</p>
      <ul className="space-y-2 mb-6">{features.slice(0,4).map((f,i) => <li key={i} className="text-sm text-slate-200"><span className="text-emerald-400 mr-2">✓</span>{f}</li>)}</ul>
      <button className="w-full btn-secondary" onClick={(e) => { e.stopPropagation(); handleCheckout(key) }}>Cumpără ${price}</button>
      {plan.footer_text && <p className="text-xs text-slate-500 mt-4 text-center">{plan.footer_text}</p>}
    </div>
  )
  
  return (
    <section id="pricing" className="section">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="mb-4">💳 Alege Planul Potrivit</h2>
          <p className="text-slate-400">Toate planurile includ cele 9 fișiere MD + AI fallback + Buddy chat</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.base_plan && createCard('base_plan', plans.base_plan, plans.base_plan.price_monthly_usd || 29, '/lună', '#10b981', '#3b82f6', null, plans.base_plan.features || [], false)}
          {plans.subagent_plan && createCard('subagent_plan', plans.subagent_plan, plans.subagent_plan.price_per_agent_monthly_usd || 99, '/lună/agent', '#3b82f6', '#6366f1', 'MOST POPULAR', plans.subagent_plan.features || [], true)}
          {plans.setup_plan && createCard('setup_plan', plans.setup_plan, plans.setup_plan.price_one_time_usd || 299, 'one-time', '#f59e0b', '#fbbf24', '✨ DONE-FOR-YOU', plans.setup_plan.features || [], false)}
        </div>
        
        {modal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90" onClick={() => setModal(null)}>
            <div className="card max-w-lg w-full max-h-[90vh] overflow-y-auto relative" onClick={e => e.stopPropagation()}>
              <button className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-700 hover:bg-slate-600 flex items-center justify-center" onClick={() => setModal(null)}>✕</button>
              <h3 className="text-2xl font-bold text-white mb-2">{modal.plan.name}</h3>
              <div className="mb-4"><span className="text-5xl font-black text-blue-400">${modal.price}</span><span className="text-slate-400 ml-2">{modal.period}</span></div>
              <p className="text-slate-300 mb-6">{modal.plan.short_desc}</p>
              <h4 className="text-white font-semibold mb-3">✅ Ce Primești:</h4>
              <ul className="space-y-3 mb-6">{modal.features.map((f,i) => <li key={i} className="text-slate-200"><span className="text-emerald-400 mr-2">✓</span>{f}</li>)}</ul>
              <button className="w-full btn-primary btn-glow" onClick={() => { setModal(null); handleCheckout(modal.key) }}>🚀 Cumpără ${modal.price}</button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
