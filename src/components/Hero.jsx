import React from 'react'
export default function Hero({ onStart }) {
  return (
    <section className="section pt-32">
      <div className="container-custom text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-blue-500/30 text-blue-300 text-sm mb-8 animate-float">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          322K+ utilizatori OpenClaw
        </div>
        <h1 className="mb-6">
          <span className="bg-gradient-to-r from-blue-400 via-emerald-400 to-amber-400 bg-clip-text text-transparent">Telefonul tău</span>
          <br />
          <span className="text-white">devine cel mai bun angajat</span>
        </h1>
        <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-10">
          Generează 9 fișiere MD perfect configurate pentru agentul tău AI. 
          Setup automat pe Android sau VPS. Fără cod. Fără complicații.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <button className="btn-primary btn-glow px-8 py-4 text-lg" onClick={onStart}>
            🚀 Începe Gratuit — Trial 7 zile
          </button>
          <button className="btn-secondary px-8 py-4 text-lg" onClick={() => document.getElementById('pricing')?.scrollIntoView({behavior:'smooth'})}>
            Vezi Prețuri
          </button>
        </div>
        <div className="flex items-center justify-center gap-8 text-sm text-slate-500">
          <div className="flex items-center gap-2">✓ Fără card</div>
          <div className="flex items-center gap-2">✓ Setup în 5 minute</div>
          <div className="flex items-center gap-2">✓ Anulezi oricând</div>
        </div>
      </div>
    </section>
  )
}
