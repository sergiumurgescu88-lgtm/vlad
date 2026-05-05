import React, { useState } from 'react'
export default function FAQ() {
  const [open, setOpen] = useState(null)
  const faqs = [
    { q: 'Cum funcționează trial-ul de 7 zile?', a: 'Primești acces complet la wizard, generare fișiere și download. După 7 zile, pentru a continua, alegi un plan plătit. Fără card la înscriere.' },
    { q: 'Pot folosi agentul pe mai multe business-uri?', a: 'Da! Planul Professional ($29/lună) include toate business-urile tale. Fiecare are propriul set de 9 fișiere MD.' },
    { q: 'Ce se întâmplă dacă nu sunt tehnic?', a: 'Alege planul Setup Done-For-You ($299 one-time). Noi instalăm totul pe VPS-ul tău sau pe telefonul tău Android. Primești training 1-on-1.' },
    { q: 'Cum se integrează cu OpenClaw?', a: 'După generare, poți descărca ZIP-ul și îl imporți în OpenClaw cu un singur click. Sau folosești sync-ul automat dacă rulezi pe VPS-ul nostru.' }
  ]
  return (
    <section id="faq" className="section bg-darker/50">
      <div className="container-custom max-w-3xl">
        <h2 className="text-center mb-12">❓ Întrebări Frecvente</h2>
        <div className="space-y-4">
          {faqs.map((f, i) => (
            <div key={i} className="card">
              <button className="w-full text-left flex justify-between items-center" onClick={() => setOpen(open === i ? null : i)}>
                <span className="font-medium text-white">{f.q}</span>
                <span className="text-blue-400">{open === i ? '−' : '+'}</span>
              </button>
              {open === i && <p className="mt-3 text-slate-400 text-sm">{f.a}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
