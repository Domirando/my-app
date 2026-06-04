import React from 'react';

const WRITINGS = [
  {
    title: 'Open Blinds',
    type: 'Personal Essay',
    sym: '✍',
    description:
      'A personal narrative about pain, resilience, and the drive to keep going — written at 2:30 AM when sleep felt too far away.',
    tags: ['Essay', 'Personal', 'Resilience'],
    file: '/open-blinds.pdf',
  },
  {
    title: 'Quantum Computers: Evaluating the Impact on Humanity and Our Readiness',
    type: 'Research Article',
    sym: '⚛',
    description:
      'Published in the Thematic Journal of Applied Sciences (TJAS, ISSN 2277-3037). Explores qubits, superposition, entanglement, quantum cryptography, and humanity\'s readiness for the next generation of computing.',
    tags: ['Research', 'Quantum Computing', 'Published'],
    file: '/quantum-computers.pdf',
  },
];

export default function Writing() {
  return (
    <div
      style={{ width: '100%', minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: 80, paddingBottom: 32, background: 'rgba(10,10,28,0.5)' }}
    >
      <div className="max-w-4xl mx-auto px-6 w-full">
        <p className="text-purple-400 text-xs tracking-widest uppercase mb-3 font-semibold text-center">
          ✦ &nbsp;My Work
        </p>
        <h2 className="font-black mb-4 leading-tight text-center" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
          Papers &amp; <span className="gradient-text">Publications</span>
        </h2>
        <p className="text-slate-400 text-sm mb-10 max-w-md mx-auto leading-relaxed text-center">
          Published research and personal writing — ideas that shape how I see technology and the world.
        </p>

        <div className="grid gap-4">
          {WRITINGS.map(w => (
            <div
              key={w.title}
              className="glass-card hover-glow rounded-2xl p-6 flex flex-col sm:flex-row gap-5"
            >
              <div
                className="rounded-xl flex items-center justify-center text-purple-400 text-2xl flex-shrink-0"
                style={{ width: 56, height: 56, background: 'rgba(168,85,247,0.1)', border: '1px solid rgba(168,85,247,0.2)' }}
              >
                {w.sym}
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <span className="text-xs text-purple-400 font-semibold tracking-wide uppercase">{w.type}</span>
                </div>
                <h3 className="font-bold text-white text-base mb-2 leading-snug">{w.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-3">{w.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {w.tags.map(tag => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-0.5 rounded-full"
                      style={{ background: 'rgba(168,85,247,0.12)', color: '#c084fc', border: '1px solid rgba(168,85,247,0.2)' }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={w.file}
                  download
                  className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300"
                  style={{
                    background: 'rgba(168,85,247,0.12)',
                    border: '1px solid rgba(168,85,247,0.35)',
                    color: '#c084fc',
                    textDecoration: 'none',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.background = 'rgba(168,85,247,0.25)')}
                  onMouseLeave={e => (e.currentTarget.style.background = 'rgba(168,85,247,0.12)')}
                >
                  ↓ Download PDF
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
