import React, { useState } from 'react'
export default function Dashboard({ data, onBack }) {
  const [generating, setGenerating] = useState(null)
  const files = ['SOUL','IDENTITY','USER','MEMORY','TOOLS','AGENTS','HEARTBEAT','BOOTSTRAP','AGENT_RD']
  const [status, setStatus] = useState({})
  
  const generate = async (file) => {
    setGenerating(file)
    try {
      const res = await fetch('/api/generate-file', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ file_type: file, intake_data: data, user_id: 'demo' })
      })
      const result = await res.json()
      setStatus(prev => ({...prev, [file]: result.success ? 'done' : 'error'}))
    } catch (e) {
      setStatus(prev => ({...prev, [file]: 'error'}))
    }
    setGenerating(null)
  }
  
  const generateAll = async () => {
    for (const f of files) {
      if (status[f] !== 'done') await generate(f)
    }
  }
  
  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container-custom">
        <button className="mb-8 text-blue-400 hover:text-blue-300" onClick={onBack}>← Înapoi</button>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <h2 className="text-3xl font-bold">📁 Dashboard — Cele 9 Fișiere</h2>
          <div className="flex gap-3">
            <button className="btn-secondary" onClick={generateAll} disabled={generating}>🔄 Generează Toate (9)</button>
            <button className="btn-primary">📦 Descarcă ZIP</button>
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {files.map(file => (
            <div key={file} className="card">
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-semibold text-white">{file}.md</h3>
                <span className={`text-xs px-2 py-1 rounded ${status[file]==='done'?'bg-emerald-500/20 text-emerald-400':status[file]==='error'?'bg-red-500/20 text-red-400':'bg-slate-700 text-slate-300'}`}>
                  {status[file]||'Negenerat'}
                </span>
              </div>
              <p className="text-sm text-slate-400 mb-4">Fișier de configurare pentru agentul AI</p>
              <div className="flex gap-2">
                <button className="flex-1 btn-secondary text-sm py-2" onClick={() => generate(file)} disabled={generating===file || status[file]==='done'}>
                  {generating===file ? '⏳...' : status[file]==='done' ? '✓ Gata' : 'Generează'}
                </button>
                <button className="px-4 btn-secondary text-sm" disabled={status[file]!=='done'}>↓</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
