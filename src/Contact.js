import React from 'react';

const CONTACTS = [
  { label: 'Email',    value: 'vohidjonovnamaftuna@gmail.com',         href: 'mailto:vohidjonovnamaftuna@gmail.com',                              sym: '✉', desc: 'Best for professional inquiries' },
  { label: 'LinkedIn', value: 'maftuna-vohidjonovna',        href: 'https://www.linkedin.com/in/maftuna-vohidjonovna/',        sym: '◈', desc: 'Professional network'            },
  { label: 'GitHub',   value: '@Domirando',                  href: 'https://github.com/Domirando',                            sym: '⌥', desc: 'Open-source projects'           },
  { label: 'Telegram', value: '@maftuneng',                  href: 'https://t.me/maftuneng',                                 sym: '◎', desc: 'Quick chat'                     },
];

export default function Contact() {
  return (
    <div
      id="contact"
      style={{ width: '100%', height: '100vh', display: 'flex', alignItems: 'center', paddingTop: 64, background: 'rgba(13,13,36,0.4)' }}
    >
      <div className="max-w-4xl mx-auto px-6 w-full text-center">
        <p className="text-purple-400 text-xs tracking-widest uppercase mb-3 font-semibold">
          ✦ &nbsp;Get In Touch
        </p>
        <h2 className="font-black mb-4 leading-tight" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
          Let's <span className="gradient-text">Connect</span>
        </h2>
        <p className="text-slate-400 text-sm mb-10 max-w-md mx-auto leading-relaxed">
          Have a project idea, want to collaborate on open source, or just want to say hi?
          My inbox is always open.
        </p>

        {/* Contact grid */}
        <div className="grid sm:grid-cols-2 gap-3 mb-10 text-left">
          {CONTACTS.map(c => (
            <a
              key={c.label}
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card hover-glow rounded-2xl p-4 flex items-center gap-4 group"
              style={{ textDecoration: 'none' }}
            >
              <div
                className="rounded-xl flex items-center justify-center text-purple-400 text-lg flex-shrink-0 group-hover:scale-110 transition-all duration-300"
                style={{ width: 44, height: 44, background: 'rgba(168,85,247,0.1)', border: '1px solid rgba(168,85,247,0.2)' }}
              >
                {c.sym}
              </div>
              <div>
                <div className="text-xs text-slate-500 mb-0.5">{c.desc}</div>
                <div className="font-bold text-white text-sm">{c.label}</div>
                <div className="text-slate-400 text-xs">{c.value}</div>
              </div>
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href="mailto:vohidjonovnamaftuna@gmail.com"
          className="inline-block px-10 py-3.5 animated-gradient text-white font-bold rounded-full text-sm hover:scale-105 transition-transform"
          style={{ boxShadow: '0 8px 30px rgba(168,85,247,0.3)', textDecoration: 'none' }}
        >
          Say Hello ✉
        </a>
      </div>
    </div>
  );
}
