import React from 'react';

const EXPERIENCE = [
  {
    period: '2021',
    title: 'Web Dev Teacher',
    org: 'Community · Volunteer',
    desc: 'Taught HTML, CSS, JavaScript & React to enthusiasts — distilling complex ideas into approachable lessons and watching the "aha!" moments happen.',
    icon: '✐',
    color: '#a855f7',
    badge: 'Volunteer',
  },
  {
    period: '2022',
    title: 'Front-End Developer',
    org: 'GD Team',
    desc: 'Shipped production-grade React features on a cross-functional team — real deadlines, real users, real growth.',
    icon: '◈',
    color: '#22d3ee',
    badge: 'Full-Time',
  },
  {
    period: '2022',
    title: 'Hackathon Organizer',
    org: 'Winter Web Hackathon',
    desc: 'Led end-to-end organization of the Winter Web Hackathon — from logistics to judging — uniting developers to build, compete, and learn.',
    icon: '🏆',
    color: '#fbbf24',
    badge: 'Achievement',
  },
  {
    period: '2023 → Now',
    title: 'Open-Source Developer',
    org: 'Independent',
    desc: 'Actively contributing to open-source projects — building tools, writing docs, and engaging with developer communities worldwide.',
    icon: '⌥',
    color: '#22d3ee',
    badge: 'Ongoing',
  },
];

export default function Experience() {
  return (
    <div
      id="experience"
      style={{ width: '100%', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingTop: 64, paddingBottom: 16 }}
    >
      <div className="max-w-7xl mx-auto px-6 w-full">
        <p className="text-purple-400 text-xs tracking-widest uppercase mb-2 font-semibold">
          ✦ &nbsp;Work & Achievements
        </p>
        <h2 className="font-black mb-8 leading-tight" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3rem)' }}>
          My <span className="gradient-text">Experience</span>
        </h2>

        <div style={{ position: 'relative' }}>
          {/* Horizontal connector line */}
          <div
            className="hidden md:block"
            style={{
              position: 'absolute',
              top: 24,
              left: 24,
              right: 24,
              height: 2,
              background: 'linear-gradient(90deg, rgba(168,85,247,0.5), rgba(34,211,238,0.5), rgba(251,191,36,0.5), rgba(34,211,238,0.5))',
              zIndex: 0,
            }}
          />

          <div
            className="grid gap-4"
            style={{ gridTemplateColumns: 'repeat(4, minmax(0, 1fr))' }}
          >
            {EXPERIENCE.map((e, i) => (
              <div key={i} style={{ position: 'relative', zIndex: 1 }}>
                {/* Dot on the connector */}
                <div
                  className="hidden md:flex w-12 h-12 rounded-full items-center justify-center text-xl mb-3 mx-auto"
                  style={{
                    background: `radial-gradient(circle, ${e.color}30, #060614)`,
                    border: `2px solid ${e.color}60`,
                    boxShadow: `0 0 12px ${e.color}30`,
                    backgroundColor: '#060614',
                    zIndex: 2,
                  }}
                >
                  {e.icon}
                </div>

                {/* Card */}
                <div
                  className="glass-card hover-glow rounded-2xl p-4 flex flex-col gap-2"
                  style={{ height: '100%' }}
                >
                  <div className="flex items-center justify-between gap-1 flex-wrap">
                    <span className="text-slate-500 text-xs">{e.period}</span>
                    <span
                      className="text-xs border px-1.5 py-0.5 rounded-full"
                      style={{ color: e.color, borderColor: `${e.color}40`, background: `${e.color}10` }}
                    >
                      {e.badge}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-sm mb-0.5">{e.title}</h3>
                    <p style={{ color: e.color, fontSize: 11, fontWeight: 500 }}>{e.org}</p>
                  </div>
                  <p className="text-slate-400 text-xs leading-relaxed">{e.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
