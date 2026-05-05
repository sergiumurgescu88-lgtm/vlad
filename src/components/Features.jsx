import React from 'react'
export default function Features() {
  const features = [
    { id: 'SOUL', title: 'SOUL.md', desc: 'Misiune, valori, reguli absolute, autonomie', icon: '💫' },
    { id: 'IDENTITY', title: 'IDENTITY.md', desc: 'Profil agent, ton, limbă, program de lucru', icon: '👤' },
    { id: 'USER', title: 'USER.md', desc: 'Profilul tău, preferințe, priorități 90 zile', icon: '🎯' },
    { id: 'MEMORY', title: 'MEMORY.md', desc: 'Context business, produse, prețuri, USP', icon: '🧠' },
    { id: 'TOOLS', title: 'TOOLS.md', desc: 'Canale, CRM, API-uri AI, buget, comenzi', icon: '🛠️' },
    { id: 'AGENTS', title: 'AGENTS.md', desc: 'Echipa de sub-agenți, workflow-uri, pipeline', icon: '🤖' },
    { id: 'HEARTBEAT', title: 'HEARTBEAT.md', desc: 'Task-uri proactive, rutine, trigger-e, alerte', icon: '💓' },
    { id: 'BOOTSTRAP', title: 'BOOTSTRAP.md', desc: 'Checklist lansare, pași critici, fallback plan', icon: '🚀' },
    { id: 'AGENT_RD', title: 'AGENT_RD.md', desc: 'Research framework, validare idei, surse', icon: '🔬' }
  ]
  return (
    <section id="features" className="section bg-darker/50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="mb-4">Cele 9 Fișiere MD — Structură Completă</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">Fiecare fișier este generat cu AI assist, validat pentru consistență și gata de import în OpenClaw</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div key={f.id} className="card glow">
              <div className="text-3xl mb-4">{f.icon}</div>
              <h3 className="text-white mb-2">{f.title}</h3>
              <p className="text-slate-400 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
