import React, { useState, useRef, useCallback, useEffect } from 'react';

// A minor pentatonic melody — slow, peaceful, violin-like ambience
const MELODY = [
  { freq: 440.00, dur: 3.2 },   // A4
  { freq: 523.25, dur: 2.4 },   // C5
  { freq: 587.33, dur: 3.6 },   // D5
  { freq: 659.25, dur: 4.0 },   // E5
  { freq: 783.99, dur: 2.8 },   // G5
  { freq: 659.25, dur: 3.2 },   // E5
  { freq: 587.33, dur: 2.4 },   // D5
  { freq: 523.25, dur: 3.6 },   // C5
  { freq: 440.00, dur: 4.8 },   // A4 (hold)
  { freq: 493.88, dur: 2.4 },   // B4
  { freq: 587.33, dur: 3.2 },   // D5
  { freq: 659.25, dur: 2.8 },   // E5
  { freq: 523.25, dur: 4.0 },   // C5
  { freq: 440.00, dur: 5.6 },   // A4 (long hold)
];

function buildReverb(ctx) {
  const convolver = ctx.createConvolver();
  const rate = ctx.sampleRate;
  const len = Math.floor(rate * 3.0);
  const buf = ctx.createBuffer(2, len, rate);
  for (let ch = 0; ch < 2; ch++) {
    const d = buf.getChannelData(ch);
    for (let i = 0; i < len; i++) {
      d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / len, 2.5);
    }
  }
  convolver.buffer = buf;
  return convolver;
}

function scheduleNote(ctx, dryBus, wetBus, freq, startTime, duration) {
  // Three slightly detuned sawtooth oscillators for a rich ensemble sound
  [0, 6, -4].forEach((detuneCents, idx) => {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    const filter = ctx.createBiquadFilter();

    // Vibrato
    const vibOsc = ctx.createOscillator();
    const vibGain = ctx.createGain();
    vibOsc.frequency.value = 5.2;
    vibGain.gain.value = 3.5 + idx * 0.5;
    vibOsc.connect(vibGain);
    vibGain.connect(osc.frequency);

    osc.type = 'sawtooth';
    osc.frequency.value = freq;
    osc.detune.value = detuneCents;

    filter.type = 'lowpass';
    filter.frequency.value = 1600;
    filter.Q.value = 0.7;

    // Bow-like envelope: slow attack, gentle sustain, smooth release
    const vel = 0.06 / (idx + 1);
    gain.gain.setValueAtTime(0, startTime);
    gain.gain.linearRampToValueAtTime(vel, startTime + 0.55);
    gain.gain.setValueAtTime(vel * 0.85, startTime + duration - 0.7);
    gain.gain.linearRampToValueAtTime(0, startTime + duration);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(dryBus);
    gain.connect(wetBus);

    vibOsc.start(startTime);
    osc.start(startTime);
    vibOsc.stop(startTime + duration);
    osc.stop(startTime + duration);
  });
}

export default function BackgroundMusic() {
  const [playing, setPlaying] = useState(false);
  const ctxRef = useRef(null);
  const timerRef = useRef(null);

  const stopMusic = useCallback(() => {
    clearTimeout(timerRef.current);
    if (ctxRef.current) {
      ctxRef.current.close();
      ctxRef.current = null;
    }
  }, []);

  const startMusic = useCallback(() => {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    ctxRef.current = ctx;

    const masterGain = ctx.createGain();
    masterGain.gain.value = 0.55;
    masterGain.connect(ctx.destination);

    const reverb = buildReverb(ctx);
    const reverbGain = ctx.createGain();
    reverbGain.gain.value = 0.45;
    reverb.connect(reverbGain);
    reverbGain.connect(masterGain);

    const dryGain = ctx.createGain();
    dryGain.gain.value = 0.6;
    dryGain.connect(masterGain);

    const scheduleMelody = (offsetTime = 0) => {
      let t = ctx.currentTime + offsetTime;
      MELODY.forEach(note => {
        scheduleNote(ctx, dryGain, reverb, note.freq, t, note.dur + 0.5);
        t += note.dur * 0.78; // overlap notes slightly for legato feel
      });
      const totalMs = MELODY.reduce((acc, n) => acc + n.dur * 0.78, 0) * 1000;
      timerRef.current = setTimeout(() => {
        if (ctxRef.current) scheduleMelody();
      }, totalMs - 800);
    };

    scheduleMelody(0.1);
  }, []);

  const toggle = () => {
    if (playing) {
      stopMusic();
      setPlaying(false);
    } else {
      startMusic();
      setPlaying(true);
    }
  };

  useEffect(() => () => stopMusic(), [stopMusic]);

  return (
    <button
      onClick={toggle}
      className="fixed bottom-6 left-6 z-50 flex items-center gap-2.5 px-4 py-3 rounded-2xl"
      style={{
        background: playing
          ? 'linear-gradient(135deg, rgba(16,185,129,0.2), rgba(6,182,212,0.15))'
          : 'rgba(255,255,255,0.06)',
        border: `1px solid ${playing ? 'rgba(16,185,129,0.4)' : 'rgba(255,255,255,0.12)'}`,
        backdropFilter: 'blur(14px)',
        boxShadow: playing ? '0 4px 25px rgba(16,185,129,0.2)' : 'none',
        transition: 'all 0.4s ease',
      }}
      title={playing ? 'Mute ambient violin' : 'Play ambient violin'}
    >
      {/* Animated equaliser bars (CSS-driven) */}
      <div className="flex items-end gap-0.5 h-5">
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            style={{
              width: 3,
              height: 4,
              background: playing
                ? 'linear-gradient(to top, #10b981, #22d3ee)'
                : 'rgba(255,255,255,0.25)',
              borderRadius: 2,
              animation: playing ? `musicBar 0.8s ease-in-out ${i * 80}ms infinite alternate` : 'none',
            }}
          />
        ))}
      </div>

      <span
        className="text-xs font-medium select-none"
        style={{ color: playing ? '#34d399' : '#94a3b8' }}
      >
        {playing ? 'Violin' : '♩ Music'}
      </span>
    </button>
  );
}
