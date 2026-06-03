import React from 'react';

const EDUCATION = [
  {
    period: '2017 – 2022',
    title: 'IT School',
    org: 'Al-Khawrezmi IT School',
    desc: 'Built a rigorous foundation in CS and web development at one of Uzbekistan\'s leading IT schools — named after the 9th-century mathematician who gave us the word "algorithm". In the final two years, majored in mobile development — building Android apps with Android Studio and learning Java and Kotlin.',
    icon: '◉',
    color: '#22d3ee',
    badge: 'Diploma',
  },
  {
    period: '2022 – Present',
    title: 'Chemical & Materials Engineering',
    org: 'University',
    desc: 'Pursuing a degree in Chemical and Materials Engineering — where science meets code. Science by day, open-source by night.',
    icon: '⚗',
    color: '#a855f7',
    badge: 'In Progress',
  },
];

export default function Education() {
  return (
    <div
      id="education"
      style={{ width: '100%', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingTop: 80, paddingBottom: 32, background: 'rgba(13,13,36,0.4)' }}
    >
      <div className="max-w-4xl mx-auto px-6 w-full">
        <p className="text-purple-400 text-xs tracking-widest uppercase mb-2 font-semibold">
          ✦ &nbsp;Academic Path
        </p>
        <h2 className="font-black mb-10 leading-tight" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3rem)' }}>
          My <span className="gradient-text">Education</span>
        </h2>

        {/* Vertical timeline */}
        <div className="edu-grid">
          {EDUCATION.map((e, i) => {
            const isLeft = i % 2 === 0;
            const card = (
              <div className="glass-card hover-glow edu-card rounded-2xl p-5">
                <div className="flex items-center gap-2 mb-2 flex-wrap">
                  <span
                    className="text-xs border px-2 py-0.5 rounded-full"
                    style={{ color: e.color, borderColor: `${e.color}40`, background: `${e.color}10` }}
                  >
                    {e.badge}
                  </span>
                  <span className="text-slate-500 text-xs">{e.period}</span>
                </div>
                <h3 className="text-white font-bold text-sm mb-0.5">{e.title}</h3>
                <p style={{ color: e.color, fontSize: 11, fontWeight: 500, marginBottom: 8 }}>{e.org}</p>
                <p className="text-slate-400 text-xs leading-relaxed">{e.desc}</p>
              </div>
            );
            const dot = (
              <div style={{ display: 'flex', justifyContent: 'center', zIndex: 1 }}>
                <div style={{
                  width: 48, height: 48, borderRadius: '50%',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20,
                  background: `radial-gradient(circle, ${e.color}30, #060614)`,
                  border: `2px solid ${e.color}70`,
                  boxShadow: `0 0 16px ${e.color}40`,
                }}>
                  {e.icon}
                </div>
              </div>
            );
            return (
              <div key={i} className="edu-entry">
                {/* Mobile: dot then card. Desktop: alternating left/right */}
                <div className="hidden md:flex justify-end pr-6" style={{ flex: 1 }}>
                  {isLeft ? card : null}
                </div>
                {dot}
                <div className="hidden md:flex justify-start pl-6" style={{ flex: 1 }}>
                  {!isLeft ? card : null}
                </div>
                {/* Mobile only */}
                <div className="md:hidden w-full">{card}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
