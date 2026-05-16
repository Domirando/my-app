import React, { useState, useRef, useEffect, useCallback } from 'react';

const kb = [
  {
    id: 'greeting',
    triggers: ['hello', 'hi', 'hey', 'sup', "what's up", 'greetings', 'howdy', 'hola', 'good morning', 'good evening'],
    response: "Hey there! 👋 I'm Maftuna's digital assistant. Ask me anything about her background, skills, experience, or how to get in touch!",
  },
  {
    id: 'identity',
    triggers: ['who are you', 'who is she', 'who is maftuna', 'who is domirando', 'tell me about yourself', 'tell me about her', 'introduce yourself', 'about you', 'about her'],
    response: "I'm **Maftuna Vohidjonovna** — known online as **Domirando**! 🌟 I'm a Chemical and Materials Engineering student passionate about **chip development engineering**, open-source developer, and music enthusiast. I live at the intersection of silicon, science, and software!",
  },
  {
    id: 'chip',
    triggers: ['chip', 'chips', 'semiconductor', 'vlsi', 'hardware', 'silicon', 'circuit', 'fpga', 'verilog', 'hdl', 'digital logic', 'integrated circuit', 'ic design', 'chip design', 'chip development', 'microchip', 'processor'],
    response: "Chip development is my biggest passion! ⬡ I'm deeply interested in **VLSI design**, **digital logic**, **semiconductor physics**, and **circuit analysis** — all of which connect directly to my Chemical & Materials Engineering studies. The idea of designing the actual hardware that software runs on is incredibly exciting to me. I believe the future of tech is built at the transistor level! 🔬",
  },
  {
    id: 'name',
    triggers: ['your name', 'what is your name', "what's your name", 'what are you called', 'username', 'domirando mean'],
    response: "My name is **Maftuna Vohidjonovna** — but in the digital world, I go by **Domirando**. The username is as unique as I am! 😄",
  },
  {
    id: 'education',
    triggers: ['study', 'studying', 'student', 'university', 'school', 'degree', 'education', 'major', 'college', 'graduated'],
    response: "I'm majoring in **Chemical and Materials Engineering**! 🧪 Before that, I attended the **Mukhammad al-Khawrezmi IT School** in Uzbekistan — named after the mathematician who gave us the word 'algorithm'. That's where I built my dev foundation.",
  },
  {
    id: 'skills',
    triggers: ['skill', 'know', 'tech stack', 'technology', 'programming', 'coding language', 'what can you do', 'expertise', 'proficient', 'tools', 'stack'],
    response: "Here's my tech toolkit:\n\n⬡ **Chip Dev:** Digital Logic, VLSI, Semiconductor Physics, Circuit Analysis, Verilog\n🔹 **Frontend:** React, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS\n🔹 **Tools:** Git, GitHub, VS Code, WebStorm\n🔹 **Extras:** Teaching, Community Building, Hackathon Organizing\n\nAlways learning something new! 🚀",
  },
  {
    id: 'frontend',
    triggers: ['react', 'javascript', 'frontend', 'front-end', 'html', 'css', 'tailwind', 'web development', 'web dev'],
    response: "Frontend is my home! ⚡ I work with **React** and modern **JavaScript**, style with **Tailwind CSS** and **CSS3**. As a Front-End Developer at GD Team I shipped real production features — not just toy projects!",
  },
  {
    id: 'experience',
    triggers: ['experience', 'work experience', 'job', 'worked', 'employment', 'career', 'position', 'role', 'professional'],
    response: "My experience so far:\n\n💼 **Front-End Developer** @ GD Team\n🎓 **Web Dev Teacher** for enthusiasts\n🏆 **Organizer** of the Winter Web Hackathon\n🌐 **Open-Source Developer** (currently active)\n\nEach role has shaped who I am today!",
  },
  {
    id: 'hackathon',
    triggers: ['hackathon', 'winter web', 'organize', 'organizing', 'event', 'competition', 'hack'],
    response: "I organized the **Winter Web Hackathon** — bringing together web development enthusiasts for a day of building, learning, and competing! 🏆 It was one of the most rewarding leadership experiences of my career so far.",
  },
  {
    id: 'teaching',
    triggers: ['teach', 'teacher', 'mentor', 'mentoring', 'tutor', 'tutoring', 'share knowledge', 'instructor'],
    response: "I've taught web development to enthusiasts and I absolutely love it! 📚 Watching someone have their 'aha!' moment when a concept clicks — that's incredibly fulfilling. Sharing knowledge is a core part of who I am.",
  },
  {
    id: 'projects',
    triggers: ['project', 'portfolio', 'built', 'created', 'made', 'showcase', 'work samples', 'show me', 'what did you build'],
    response: "All my projects live on **GitHub** at github.com/Domirando! 🛠️ I also write about what I build on my personal blog and Medium. Check them out — there's always something new in the works!",
  },
  {
    id: 'opensource',
    triggers: ['open source', 'opensource', 'github', 'contribution', 'contribute', 'pull request', 'repo'],
    response: "Open source is close to my heart! 💻 I believe in building in public and giving back to the community. You can find my work at **github.com/Domirando** — issues and pull requests are always welcome. 😄",
  },
  {
    id: 'music',
    triggers: ['music', 'hobby', 'hobbies', 'interest', 'fun', 'free time', 'passion', 'besides coding', 'outside work', 'when not coding'],
    response: "Music is my escape and inspiration! 🎵 I'm a self-described Music Lover — it helps me balance the analytical rigor of engineering and development. When the code won't compile... music always helps me reset.",
  },
  {
    id: 'engineering',
    triggers: ['chemical', 'materials', 'engineering', 'science', 'chemistry', 'stem', 'engineer'],
    response: "Yes — **Chemical and Materials Engineering**! ⚗️ It might seem like an unusual pairing with web dev, but both involve systematic problem-solving and building things from scratch. I love existing at this intersection. Two disciplines, one brain! 🧠💻",
  },
  {
    id: 'blog',
    triggers: ['blog', 'write', 'article', 'post', 'writing', 'medium', 'content', 'publication'],
    response: "I write on two platforms:\n\n✍️ **Personal Blog:** domirandos-blog.vercel.app\n📖 **Medium:** medium.com/@Domirando\n\nI share thoughts on tech, development tips, and life reflections. Check them out!",
  },
  {
    id: 'contact',
    triggers: ['contact', 'reach', 'email', 'get in touch', 'connect', 'talk', 'message', 'dm', 'reach out'],
    response: "Let's connect! 🤝\n\n📧 **Email:** maisiedev@gmail.com\n💼 **LinkedIn:** linkedin.com/in/maftuna-vohidjonovna\n💬 **Telegram:** @domirandos\n\nDon't be shy — I love meeting new people!",
  },
  {
    id: 'location',
    triggers: ['where', 'location', 'country', 'live', 'from', 'based', 'city', 'uzbekistan', 'timezone'],
    response: "I'm based in **Uzbekistan** 🇺🇿 — a country with a rich history and a rapidly growing tech scene. Fun fact: the school I attended is named after **al-Khwarizmi**, the 9th-century mathematician from this region who essentially gave us the concept of 'algorithm'!",
  },
  {
    id: 'hire',
    triggers: ['hire', 'hiring', 'freelance', 'available', 'opportunity', 'collaborate', 'open to work', 'job offer', 'contract'],
    response: "I'm open to exciting opportunities! 🎯 Whether it's freelance frontend work, open-source collaboration, or full-time roles — let's talk!\n\nBest to reach out via **maisiedev@gmail.com** or LinkedIn. Looking forward to it! ✨",
  },
  {
    id: 'linkedin',
    triggers: ['linkedin', 'professional profile'],
    response: "You can find my LinkedIn profile at **linkedin.com/in/maftuna-vohidjonovna** — feel free to connect! I'm always happy to expand my professional network. 💼",
  },
  {
    id: 'thanks',
    triggers: ['thank', 'thanks', 'thank you', 'great', 'awesome', 'cool', 'nice', 'perfect', 'wonderful', 'amazing', 'helpful', 'impressive'],
    response: "You're very welcome! 😊 Is there anything else you'd like to know about Maftuna? I'm here to help!",
  },
  {
    id: 'bye',
    triggers: ['bye', 'goodbye', 'see you', 'later', 'ciao', 'farewell', 'take care', 'good night', 'ttyl'],
    response: "Goodbye! 👋 It was great chatting with you. Feel free to come back anytime you have questions. Have a wonderful day!",
  },
  {
    id: 'default',
    triggers: [],
    response: "Hmm, I'm not sure about that one! 🤔 Try asking me about:\n\n• **Skills** or tech stack\n• **Education** or experience\n• **Projects** or open source\n• How to **contact** Maftuna\n• Her **interests** and hobbies",
  },
];

function findResponse(input) {
  const lower = input.toLowerCase().trim();
  for (const item of kb) {
    if (item.id === 'default') continue;
    if (item.triggers.some(t => lower.includes(t))) return item.response;
  }
  return kb.find(i => i.id === 'default').response;
}

function AiText({ text }) {
  const formatted = text
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\n/g, '<br />');
  return <span dangerouslySetInnerHTML={{ __html: formatted }} />;
}

const INITIAL = {
  from: 'ai',
  text: "Hi! 👋 I'm Maftuna's Digital Assistant. Ask me anything about her — background, skills, experience, or how to reach her!",
  id: 0,
};

const QUICK = ['Who is she?', 'Skills', 'Experience', 'Contact'];

export default function DigitalHuman() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([INITIAL]);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);
  const [pulse, setPulse] = useState(false);
  const endRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, typing]);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  useEffect(() => {
    if (open) return;
    const t = setInterval(() => setPulse(p => !p), 3500);
    return () => clearInterval(t);
  }, [open]);

  const respond = useCallback((text) => {
    const userMsg = { from: 'user', text, id: Date.now() };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setTyping(true);
    const delay = 420 + Math.random() * 480;
    setTimeout(() => {
      const answer = findResponse(text);
      setTyping(false);
      setMessages(prev => [...prev, { from: 'ai', text: answer, id: Date.now() + 1 }]);
    }, delay);
  }, []);

  const handleSend = () => {
    const text = input.trim();
    if (text) respond(text);
  };

  const handleKey = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setOpen(o => !o)}
        className="dh-button fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full flex items-center justify-center"
        title="Chat with Maftuna's AI"
      >
        {open ? (
          <span className="text-white text-xl font-light">✕</span>
        ) : (
          <div className="relative">
            <span className="text-2xl select-none">🤖</span>
            {pulse && (
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-cyan-400 rounded-full animate-ping" />
            )}
          </div>
        )}
      </button>

      {/* Chat panel */}
      {open && (
        <div
          className="fixed bottom-28 right-6 z-50 flex flex-col w-80 sm:w-96"
          style={{ height: '500px' }}
        >
          <div className="flex flex-col h-full rounded-3xl overflow-hidden border border-purple-500/25 shadow-2xl shadow-purple-900/40 glass-card">

            {/* Header */}
            <div
              className="p-4 flex items-center gap-3 flex-shrink-0"
              style={{ background: 'linear-gradient(-45deg, #7c3aed, #06b6d4, #6d28d9)', backgroundSize: '300% 300%', animation: 'gradientShift 6s ease infinite' }}
            >
              <div className="relative w-12 h-12 flex-shrink-0">
                <div className="w-full h-full rounded-full bg-white/15 border-2 border-white/25 flex items-center justify-center text-2xl select-none">
                  🤖
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-400 rounded-full border-2 border-white" />
              </div>
              <div>
                <div className="text-white font-bold text-sm">Domirando AI</div>
                <div className="text-white/65 text-xs">Ask me anything about Maftuna</div>
              </div>
            </div>

            {/* Messages */}
            <div
              className="flex-1 overflow-y-auto p-4 flex flex-col gap-3"
              style={{ background: '#060614' }}
            >
              {messages.map(msg => (
                <div key={msg.id} className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div
                    className={`max-w-[88%] px-4 py-3 text-sm leading-relaxed ${
                      msg.from === 'user' ? 'chat-bubble-user text-white' : 'chat-bubble-ai text-slate-200'
                    }`}
                  >
                    {msg.from === 'ai' ? <AiText text={msg.text} /> : msg.text}
                  </div>
                </div>
              ))}

              {/* Typing indicator */}
              {typing && (
                <div className="flex justify-start">
                  <div className="chat-bubble-ai px-4 py-3 flex gap-1.5 items-center">
                    <span className="loading-dot w-2 h-2 bg-slate-400 rounded-full" />
                    <span className="loading-dot w-2 h-2 bg-slate-400 rounded-full" />
                    <span className="loading-dot w-2 h-2 bg-slate-400 rounded-full" />
                  </div>
                </div>
              )}

              <div ref={endRef} />
            </div>

            {/* Input area */}
            <div
              className="p-3 border-t border-white/5 flex-shrink-0"
              style={{ background: '#0d0d24' }}
            >
              {/* Quick question chips */}
              <div className="flex gap-1.5 mb-2.5 flex-wrap">
                {QUICK.map(q => (
                  <button
                    key={q}
                    onClick={() => respond(q)}
                    disabled={typing}
                    className="px-2.5 py-1 text-xs text-purple-400 border border-purple-500/25 rounded-full hover:bg-purple-500/10 hover:border-purple-400/50 transition-all duration-200 disabled:opacity-40"
                  >
                    {q}
                  </button>
                ))}
              </div>

              <div className="flex gap-2">
                <input
                  ref={inputRef}
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  onKeyDown={handleKey}
                  placeholder="Ask about Maftuna..."
                  className="flex-1 bg-white/5 border border-white/10 rounded-2xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-purple-500/50 transition-colors"
                />
                <button
                  onClick={handleSend}
                  disabled={!input.trim() || typing}
                  className="w-10 h-10 rounded-full flex items-center justify-center bg-purple-600 hover:bg-purple-500 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200 flex-shrink-0"
                >
                  <span className="text-white text-base leading-none">↑</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
