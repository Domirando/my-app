import React from 'react';

const STATS = [
  { value: '4+', label: 'Years Coding',    icon: '⌨' },
  { value: '10+', label: 'Projects Built', icon: '🛠' },
  { value: '1',   label: 'Hackathon Led',  icon: '🏆' },
  { value: '∞',   label: 'Curiosity',      icon: '🔭' },
];

export default function About() {
  return (
    <div
      id="about"
      style={{ width: '100%', height: '100vh', display: 'flex', alignItems: 'center', paddingTop: 64 }}
    >
      <div className="max-w-6xl mx-auto px-6 w-full">
        <p className="text-purple-400 text-xs tracking-widest uppercase mb-3 font-semibold">
          ✦ &nbsp;About Me
        </p>
        <h2 className="font-black mb-10 leading-tight" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
          Where <span className="gradient-text">Silicon</span> Meets Code
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Bio */}
          <div>
            <p className="text-slate-300 text-base leading-relaxed mb-4">
              I'm <strong className="text-white">Maftuna Vohidjonovna</strong> — a Chemical and
              Materials Engineering student with a deep passion for{' '}
              <strong className="text-amber-400">chip development engineering</strong>.
              I believe the next great leap in technology starts at the silicon level.
            </p>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              From designing digital logic and exploring VLSI concepts to writing production React —
              I live at the intersection where hardware thinking sharpens software craft.
              My journey started at the{' '}
              <span className="text-white font-medium">Mukhammad al-Khawrezmi IT School</span>
              {' '}and led me to ship real features at GD Team and organise the{' '}
              <span className="text-white font-medium">Winter Web Hackathon</span>.
            </p>
            <p className="text-slate-400 text-sm leading-relaxed mb-5">
              Off-screen I'm a music lover. 🎵 Rhythm keeps my creativity alive between algorithms,
              molecular bonds, and transistor gates.
            </p>

            {/* Chip highlight badge */}
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-5"
              style={{
                background: 'linear-gradient(135deg, rgba(251,191,36,0.12), rgba(251,191,36,0.06))',
                border: '1px solid rgba(251,191,36,0.35)',
                color: '#fbbf24',
              }}
            >
              <span style={{ fontSize: 16 }}>⬡</span>
              Passionate about Chip Development Engineering
            </div>

            {/* Download CV */}
            <div>
              <a
                href="/cv.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300"
                style={{
                  background: 'rgba(168,85,247,0.12)',
                  border: '1px solid rgba(168,85,247,0.35)',
                  color: '#c084fc',
                  textDecoration: 'none',
                }}
                onMouseEnter={e => (e.currentTarget.style.background = 'rgba(168,85,247,0.25)')}
                onMouseLeave={e => (e.currentTarget.style.background = 'rgba(168,85,247,0.12)')}
              >
                ↓ Download CV
              </a>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4">
            {STATS.map((s, i) => (
              <div
                key={s.label}
                className="glass-card hover-glow rounded-2xl p-5 text-center group cursor-default"
                style={{ transition: `transform 0.3s ease ${i * 60}ms` }}
              >
                <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">{s.icon}</div>
                <div className="font-black gradient-text mb-0.5" style={{ fontSize: '2rem' }}>{s.value}</div>
                <div className="text-slate-400 text-xs">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
