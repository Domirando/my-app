import React, { useState, useEffect, useRef } from 'react';
import myImage from './my_image.jpg';

const ROLES = ['Chip Development Engineer', 'Frontend Engineer', 'Open-Source Developer', 'Engineering Student', 'Music Lover', 'Community Builder', 'Gender Equality Advocate'];

const SOCIALS = [
  { href: 'https://github.com/Domirando',                          label: 'GitHub',   sym: '⌥' },
  { href: 'https://www.linkedin.com/in/maftuna-vohidjonovna/',     label: 'LinkedIn', sym: '◈' },
  { href: 'https://www.youtube.com/@domirando',                   label: 'YouTube',  sym: '▶' },
  { href: 'https://domirandos-blog.vercel.app/',                   label: 'Blog',     sym: '✐' },
  { href: 'https://medium.com/@Domirando',                         label: 'Medium',   sym: '◉' },
];

function CircuitSvg() {
  return (
    <div style={{
      position: 'absolute',
      left: 0,
      top: 0,
      bottom: 0,
      width: '28%',
      pointerEvents: 'none',
      zIndex: 0,
      /* fade out toward the center so it never touches the text */
      maskImage: 'linear-gradient(to right, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.4) 60%, transparent 100%)',
      WebkitMaskImage: 'linear-gradient(to right, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.4) 60%, transparent 100%)',
    }}>
      <svg
        viewBox="0 0 200 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: '100%', height: '100%' }}
      >
        {/* Static traces — all within x 0-200 */}
        <path d="M0 120 H60 V60 H120 V180 H80 V280 H140 V380 H60 V440" stroke="rgba(251,191,36,0.22)" strokeWidth="1.2" />
        <path d="M0 300 H40 V200 H100 V320 H160 V420" stroke="rgba(251,191,36,0.15)" strokeWidth="1" />
        <path d="M0 60 V160 H80 V100" stroke="rgba(251,191,36,0.1)" strokeWidth="1" />

        {/* Animated signal pulses */}
        <path d="M0 120 H60 V60 H120 V180 H80 V280 H140 V380 H60 V440"
          stroke="#fbbf24" strokeWidth="1.5" strokeDasharray="10 6" strokeDashoffset="400"
          style={{ animation: 'signalFlow 3.2s ease-in-out infinite' }} />
        <path d="M0 300 H40 V200 H100 V320 H160 V420"
          stroke="#fbbf24" strokeWidth="1.2" strokeDasharray="8 5" strokeDashoffset="400"
          style={{ animation: 'signalFlow 4s ease-in-out infinite 1.4s' }} />

        {/* Junction nodes */}
        {[
          [60, 120], [60, 60], [120, 60], [120, 180], [80, 180],
          [80, 280], [140, 280], [140, 380], [60, 380],
          [40, 300], [100, 200], [100, 320], [160, 320],
        ].map(([cx, cy], i) => (
          <circle key={i} cx={cx} cy={cy} r="3" fill="#fbbf24" opacity="0.6"
            style={{ animation: `nodePulse ${1.8 + (i % 3) * 0.35}s ease-in-out infinite ${i * 0.25}s` }} />
        ))}
      </svg>
    </div>
  );
}

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [changing, setChanging] = useState(false);
  const [visible, setVisible] = useState(false);
  const [speaking, setSpeaking] = useState(false);
  const audioRef = useRef(null);

  const toggleAudio = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) {
      audio.currentTime = 0;
      audio.play();
      setSpeaking(true);
    } else {
      audio.pause();
      setSpeaking(false);
    }
  };

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const t = setTimeout(() => {
      const audio = audioRef.current;
      if (!audio) return;
      audio.play().then(() => setSpeaking(true)).catch(() => {});
    }, 800);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      setChanging(true);
      setTimeout(() => { setRoleIdx(i => (i + 1) % ROLES.length); setChanging(false); }, 380);
    }, 2800);
    return () => clearInterval(id);
  }, []);

  return (
    <div
      className="hero-bg"
      style={{ width: '100%', minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: 80, paddingBottom: 32, position: 'relative', overflow: 'hidden' }}
    >
      <CircuitSvg />

      <div className="max-w-6xl mx-auto px-6 w-full" style={{ position: 'relative', zIndex: 1 }}>
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">

          {/* Photo */}
          <div
            style={{
              flexShrink: 0,
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateX(0)' : 'translateX(-30px)',
              transition: 'opacity 0.9s ease, transform 0.9s ease',
            }}
          >
            <audio
              ref={audioRef}
              src="/digital-human-audio.mp3"
              onEnded={() => setSpeaking(false)}
            />
            <div className="avatar-wrap">
              {/* Speaking glow rings */}
              {speaking && <>
                <div style={{
                  position: 'absolute', inset: -10, borderRadius: '50%',
                  border: '2px solid rgba(168,85,247,0.6)',
                  animation: 'speakPulse 0.8s ease-in-out infinite',
                  pointerEvents: 'none', zIndex: 2,
                }} />
                <div style={{
                  position: 'absolute', inset: -20, borderRadius: '50%',
                  border: '1.5px solid rgba(6,182,212,0.35)',
                  animation: 'speakPulse 0.8s ease-in-out infinite 0.2s',
                  pointerEvents: 'none', zIndex: 2,
                }} />
                <div style={{
                  position: 'absolute', inset: -32, borderRadius: '50%',
                  border: '1px solid rgba(168,85,247,0.2)',
                  animation: 'speakPulse 0.8s ease-in-out infinite 0.4s',
                  pointerEvents: 'none', zIndex: 2,
                }} />
              </>}

              {/* Circuit ring */}
              <svg width="300" height="300" viewBox="0 0 300 300"
                style={{ position: 'absolute', top: -30, left: -30, opacity: 0.5, pointerEvents: 'none' }}>
                <circle cx="150" cy="150" r="130" stroke="rgba(251,191,36,0.25)" strokeWidth="1" strokeDasharray="6 8" fill="none"
                  style={{ animation: 'spin 20s linear infinite' }} />
                <circle cx="150" cy="150" r="110" stroke="rgba(168,85,247,0.2)" strokeWidth="1" strokeDasharray="4 12" fill="none"
                  style={{ animation: 'spin 14s linear infinite reverse' }} />
                {[0, 60, 120, 180, 240, 300].map((deg, i) => {
                  const r = 130;
                  const x = 150 + r * Math.cos((deg * Math.PI) / 180);
                  const y = 150 + r * Math.sin((deg * Math.PI) / 180);
                  return <circle key={i} cx={x} cy={y} r="4" fill="#fbbf24" opacity="0.7"
                    style={{ animation: `nodePulse 2s ease-in-out infinite ${i * 0.33}s` }} />;
                })}
              </svg>

              <div className="absolute inset-0 rounded-full avatar-glow scale-110 pointer-events-none" />
              <img
                src={myImage}
                alt="Maftuna Vohidjonovna"
                className="avatar-img rounded-full object-cover border-4 relative"
                style={{
                  zIndex: 1,
                  borderColor: speaking ? 'rgba(168,85,247,0.7)' : 'rgba(168,85,247,0.3)',
                  transition: 'border-color 0.3s ease',
                  cursor: 'pointer',
                }}
                onClick={toggleAudio}
                title={speaking ? 'Click to stop' : 'Click to hear me speak'}
              />

              {/* Play / speaking badge */}
              <button
                onClick={toggleAudio}
                style={{
                  position: 'absolute', bottom: 10, right: -10, zIndex: 3,
                  display: 'flex', alignItems: 'center', gap: 6,
                  borderRadius: 999, padding: '4px 10px',
                  background: '#060614',
                  border: `1px solid ${speaking ? 'rgba(168,85,247,0.5)' : 'rgba(52,211,153,0.3)'}`,
                  cursor: 'pointer', transition: 'border-color 0.3s',
                }}
              >
                {speaking ? (
                  <>
                    <span style={{ display: 'flex', gap: 2, alignItems: 'flex-end', height: 14 }}>
                      {[0, 0.15, 0.3].map((d, i) => (
                        <span key={i} style={{
                          width: 3, borderRadius: 2, background: '#a855f7',
                          animation: `soundBar 0.6s ease-in-out infinite ${d}s`,
                        }} />
                      ))}
                    </span>
                    <span style={{ color: '#a855f7', fontSize: 11, fontWeight: 500 }}>Speaking…</span>
                  </>
                ) : (
                  <>
                    <span className="w-2 h-2 bg-emerald-400 rounded-full animate-ping-slow" />
                    <span style={{ color: '#34d399', fontSize: 11, fontWeight: 500 }}>Domirando</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Text */}
          <div
            style={{
              flex: 1,
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateX(0)' : 'translateX(30px)',
              transition: 'opacity 0.9s ease 0.2s, transform 0.9s ease 0.2s',
            }}
          >
            {/* Chip passion badge — prominent */}
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold mb-4"
              style={{
                background: 'linear-gradient(135deg, rgba(251,191,36,0.15), rgba(251,191,36,0.05))',
                border: '1px solid rgba(251,191,36,0.45)',
                color: '#fbbf24',
                boxShadow: '0 0 20px rgba(251,191,36,0.15)',
                letterSpacing: '0.06em',
              }}
            >
              <span style={{ fontSize: 14 }}>⬡</span>
              CHIP DEVELOPMENT ENGINEER
              <span
                style={{
                  width: 7, height: 7, borderRadius: '50%',
                  background: '#fbbf24',
                  boxShadow: '0 0 8px #fbbf24',
                  animation: 'nodePulse 1.5s ease-in-out infinite',
                  display: 'inline-block',
                }}
              />
            </div>

            <h1 className="font-black leading-none tracking-tight mb-3" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}>
              Maftuna<br />
              <span className="gradient-text">Vohidjonovna</span>
            </h1>
            <p className="text-slate-500 text-sm mb-5">
              known online as&nbsp;
              <span className="text-white font-bold bg-purple-500/10 border border-purple-500/20 px-2 py-0.5 rounded-md">
                Domirando
              </span>
            </p>

            {/* Animated role */}
            <div className="flex items-center gap-3 mb-6" style={{ height: 28 }}>
              <span className="text-slate-600 text-lg">—</span>
              <span
                className={`text-base text-cyan-400 font-semibold role-text ${changing ? 'changing' : ''}`}
                style={{ minWidth: 0 }}
              >
                {ROLES[roleIdx]}
                <span className="cursor-blink text-purple-400 ml-1 font-normal">|</span>
              </span>
            </div>

            {/* Social chips */}
            <div className="flex flex-wrap gap-2 mb-7">
              {SOCIALS.map(s => (
                <a
                  key={s.href}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-1.5 glass-card rounded-full text-xs text-slate-300 hover:text-white hover-glow"
                >
                  <span className="text-purple-400">{s.sym}</span>
                  {s.label}
                </a>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => document.getElementById('scroll-root')?.scrollTo({ top: 6 * window.innerHeight, behavior: 'smooth' })}
                className="px-7 py-2.5 animated-gradient text-white font-semibold rounded-full hover:scale-105 transition-transform text-sm cursor-pointer border-0"
                style={{ boxShadow: '0 4px 20px rgba(168,85,247,0.3)' }}
              >
                Get In Touch
              </button>
              <button
                onClick={() => document.getElementById('scroll-root')?.scrollTo({ top: 4 * window.innerHeight, behavior: 'smooth' })}
                className="px-7 py-2.5 glass-card hover-glow text-slate-300 hover:text-white rounded-full text-sm font-medium cursor-pointer border-0"
              >
                My Journey ↓
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
