import React from 'react';

const CHIP_SKILLS = [
  'Digital Logic Design',
  'VLSI Concepts',
  'Semiconductor Physics',
  'Circuit Analysis',
  'Materials Engineering',
  'Verilog / HDL',
];

const OTHER = [
  {
    name: 'Frontend',
    sym: '◈',
    color: 'text-purple-400',
    tagClass: 'bg-purple-500/10 border-purple-500/20 text-purple-300 hover:border-purple-400/60 hover:bg-purple-500/20',
    skills: ['React', 'JavaScript ES6+', 'HTML5', 'CSS3', 'Tailwind CSS'],
  },
  {
    name: 'Tools & Workflow',
    sym: '⚙',
    color: 'text-cyan-400',
    tagClass: 'bg-cyan-500/10 border-cyan-500/20 text-cyan-300 hover:border-cyan-400/60 hover:bg-cyan-500/20',
    skills: ['Git', 'GitHub', 'VS Code', 'WebStorm', 'npm / yarn'],
  },
  {
    name: 'Beyond the Code',
    sym: '◉',
    color: 'text-emerald-400',
    tagClass: 'bg-emerald-500/10 border-emerald-500/20 text-emerald-300 hover:border-emerald-400/60 hover:bg-emerald-500/20',
    skills: ['Open-Source', 'Tech Teaching', 'Hackathon Org', 'Community Building', 'Technical Writing'],
  },
];

const PIN_COUNT = 3;

function IcPackage() {
  const pins = Array.from({ length: PIN_COUNT });
  return (
    <div className="ic-package chip-card-glow mb-6" style={{ padding: '36px 48px 28px' }}>
      {/* Top notch */}
      <div className="ic-notch" />

      {/* Left pins */}
      <div style={{ position: 'absolute', left: -21, top: '50%', transform: 'translateY(-50%)', display: 'flex', flexDirection: 'column', gap: 18 }}>
        {pins.map((_, i) => (
          <div key={i} className="ic-pin ic-pin-left" style={{ animationDelay: `${i * 0.4}s` }} />
        ))}
      </div>

      {/* Right pins */}
      <div style={{ position: 'absolute', right: -21, top: '50%', transform: 'translateY(-50%)', display: 'flex', flexDirection: 'column', gap: 18 }}>
        {pins.map((_, i) => (
          <div key={i} className="ic-pin" style={{ animationDelay: `${i * 0.4 + 0.2}s` }} />
        ))}
      </div>

      {/* Header */}
      <div className="flex items-center gap-4 mb-5">
        <span style={{ fontSize: 28 }}>⬡</span>
        <div>
          <div className="text-xs text-amber-500/70 tracking-widest uppercase font-semibold mb-0.5">Core Passion</div>
          <h3 className="text-white font-black text-xl" style={{ letterSpacing: '-0.02em' }}>
            Chip Development <span style={{ color: '#fbbf24' }}>Engineering</span>
          </h3>
        </div>
        {/* Animated signal SVG */}
        <svg width="80" height="32" viewBox="0 0 80 32" fill="none" style={{ marginLeft: 'auto', opacity: 0.8 }}>
          <path d="M0 16 H20 V6 H40 V26 H60 V16 H80" stroke="rgba(251,191,36,0.3)" strokeWidth="1.5" fill="none" />
          <path d="M0 16 H20 V6 H40 V26 H60 V16 H80" stroke="#fbbf24" strokeWidth="1.5" fill="none" className="signal-path" />
          <circle cx="20" cy="6"  r="3" fill="#fbbf24" opacity="0.6" />
          <circle cx="40" cy="26" r="3" fill="#fbbf24" opacity="0.6" />
          <circle cx="60" cy="16" r="3" fill="#fbbf24" opacity="0.6" />
        </svg>
      </div>

      {/* Skills grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2.5">
        {CHIP_SKILLS.map((skill, i) => (
          <div
            key={skill}
            className="flex items-center gap-2 px-3 py-2 rounded-lg"
            style={{
              background: 'rgba(251,191,36,0.07)',
              border: '1px solid rgba(251,191,36,0.2)',
              animation: `fadeSlide 0.4s ease ${i * 80}ms both`,
            }}
          >
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#fbbf24', flexShrink: 0, boxShadow: '0 0 6px #fbbf24' }} />
            <span className="text-amber-200 text-xs font-medium">{skill}</span>
          </div>
        ))}
      </div>

      {/* Bottom label */}
      <p className="text-amber-600/60 text-xs mt-4 text-center tracking-widest uppercase">
        ⬡ &nbsp;Silicon · Logic · Innovation &nbsp;⬡
      </p>
    </div>
  );
}

export default function Skills() {
  return (
    <div
      id="skills"
      className="chip-bg"
      style={{ width: '100%', height: '100vh', display: 'flex', alignItems: 'center', paddingTop: 64, background: 'rgba(13,13,36,0.4)' }}
    >
      <div className="max-w-5xl mx-auto px-6 w-full">
        <p className="text-amber-400 text-xs tracking-widest uppercase mb-2 font-semibold">
          ⬡ &nbsp;Skills & Expertise
        </p>
        <h2 className="font-black mb-6 leading-tight" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3rem)' }}>
          Built for <span className="gradient-text">Silicon</span> & Software
        </h2>

        <IcPackage />

        <div className="grid md:grid-cols-3 gap-4">
          {OTHER.map((cat, i) => (
            <div
              key={cat.name}
              className="glass-card hover-glow rounded-2xl p-5"
              style={{ transition: `box-shadow 0.3s ease ${i * 80}ms` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className={`text-xl ${cat.color}`}>{cat.sym}</span>
                <h3 className="text-sm font-bold text-white">{cat.name}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map(skill => (
                  <span
                    key={skill}
                    className={`skill-tag px-3 py-1.5 rounded-full text-xs border ${cat.tagClass}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
