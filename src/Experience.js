import React from 'react';

const EXPERIENCE = [
  {
    period: 'Sep 2021 – May 2022',
    title: 'Front-End Mentor',
    org: 'Global Digits',
    desc: 'Led web development curriculum for students at Muhammad al-Khwarizmi IT School — held after regular lessons as an extra class.',
    icon: '✐',
    color: '#a855f7',
    badge: 'Mentorship',
  },
  {
    period: 'Dec 2021 – Apr 2022',
    title: 'Front-End Intern',
    org: 'Digital Panda',
    desc: 'Built CRUD systems and cloned widely-used web apps under team mentorship.',
    icon: '🐼',
    color: '#e879f9',
    badge: 'Internship',
  },
  {
    period: 'Jul – Aug 2022',
    title: 'Frontend Developer',
    org: 'USOFT',
    desc: 'Shipped features on Xonsaroy & Garant projects in ReactJS and VueJS.',
    icon: '💻',
    color: '#38bdf8',
    badge: 'Full-Time',
  },
  {
    period: 'Jan 2022 – Jun 2025',
    title: 'University Applicant',
    org: 'Worldwide Applications',
    desc: 'Applied to universities worldwide and received offers from CUHK, NYU Shanghai, University of Cincinnati, Beijing Institute of Technology, New Uzbekistan University, and more.',
    icon: '🎓',
    color: '#818cf8',
    badge: 'Achievement',
  },
  {
    period: 'Jan 2022 – Jun 2025',
    title: 'Hackathon Participant & Winner',
    org: 'Digital Generation Ladies & others',
    desc: 'Participated in multiple hackathons over 3 years. Won Digital Generation Ladies with BirQadam — an EdTech platform to boost & motivate school students and help them stand out to worldwide universities. Served as Front-End Developer. Prize: educational trip to UAE. 🇦🇪',
    icon: '🥇',
    color: '#fbbf24',
    badge: 'Achievement',
  },
  {
    period: 'Dec 2022',
    title: 'Hackathon Organizer',
    org: 'Winter Web Hackathon',
    desc: 'Led end-to-end organization of the Winter Web Hackathon — from logistics to judging — uniting developers to build, compete, and learn.',
    icon: '🏆',
    color: '#fbbf24',
    badge: 'Achievement',
  },
  {
    period: 'Jun 2025 – Jul 2025',
    title: 'AI Summer School',
    org: 'Shenyang Normal University, China',
    desc: 'Had the privilege of attending an AI Summer School in Shenyang, China — exploring cutting-edge AI topics in an international academic setting. 🇨🇳',
    icon: '🤖',
    color: '#a78bfa',
    badge: 'Achievement',
  },
  {
    period: 'Jun 2025 – Dec 2025',
    title: 'Open-Source Developer',
    org: 'Uzinfocom OSS',
    desc: 'Building open source software for Linux systems using Rust — low-level, performant, and built for the community.',
    icon: '🦀',
    color: '#f97316',
    badge: 'Full-time',
  },
  {
    period: 'Dec 2025 → Now',
    title: 'Open-Source Developer',
    org: 'Independent',
    desc: 'Actively contributing to open-source projects — building tools, writing docs, and engaging with developer communities worldwide.',
    icon: '⌥',
    color: '#22d3ee',
    badge: 'Ongoing',
  },
  {
    period: 'Apr 2026 – Present',
    title: 'Student Researcher',
    org: 'New Uzbekistan University',
    desc: 'Studying effect of simultaneous Ba & Sb addition on microstructural and phase reaction characteristics of Al-20Mg2Si alloy.',
    icon: '🔬',
    color: '#34d399',
    badge: 'Research',
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
            style={{
              position: 'absolute',
              top: 24,
              left: 0,
              right: 0,
              height: 2,
              background: 'linear-gradient(90deg, rgba(168,85,247,0.5), rgba(34,211,238,0.5), rgba(251,191,36,0.5), rgba(34,211,238,0.5), rgba(249,115,22,0.5))',
              zIndex: 0,
            }}
          />

          <div
            style={{
              display: 'flex',
              gap: 16,
              overflowX: 'auto',
              paddingBottom: 8,
              scrollbarWidth: 'none',
            }}
          >
            {EXPERIENCE.map((e, i) => (
              <div key={i} style={{ position: 'relative', zIndex: 1, flexShrink: 0, width: 280, display: 'flex', flexDirection: 'column' }}>
                {/* Dot on the connector */}
                <div
                  className="flex w-12 h-12 rounded-full items-center justify-center text-xl mb-3 mx-auto"
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
                  className="glass-card hover-glow exp-card rounded-2xl p-4 flex flex-col gap-2"
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
                  <p className="exp-desc text-slate-400 text-xs leading-relaxed">{e.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
