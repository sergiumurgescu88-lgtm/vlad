import React from 'react'
export default function Navbar({ setPage }) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/10">
      <div className="container-custom flex items-center justify-between py-4">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => setPage('landing')}>
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-emerald-500 flex items-center justify-center font-bold">🦞</div>
          <span className="font-bold text-lg">AgentulMeu</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm">
          <button className="hover:text-blue-400 transition" onClick={() => document.getElementById('features')?.scrollIntoView({behavior:'smooth'})}>Features</button>
          <button className="hover:text-blue-400 transition" onClick={() => document.getElementById('pricing')?.scrollIntoView({behavior:'smooth'})}>Pricing</button>
          <button className="hover:text-blue-400 transition" onClick={() => document.getElementById('faq')?.scrollIntoView({behavior:'smooth'})}>FAQ</button>
          <button className="btn-primary btn-glow" onClick={() => setPage('wizard')}>Începe Gratuit</button>
        </div>
      </div>
    </nav>
  )
}
