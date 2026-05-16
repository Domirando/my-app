module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: {
          950: '#030308',
          900: '#060614',
          800: '#0d0d24',
          700: '#141432',
        },
        accent: {
          purple: '#a855f7',
          cyan: '#22d3ee',
          gold: '#fbbf24',
        },
      },
      animation: {
        'float': 'float 7s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite alternate',
        'spin-slow': 'spin 18s linear infinite',
        'ping-slow': 'ping 3s cubic-bezier(0, 0, 0.2, 1) infinite',
        'bounce-slow': 'bounce 3s ease-in-out infinite',
        'fade-up': 'fadeUp 0.8s ease forwards',
        'gradient-shift': 'gradientShift 8s ease infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-18px) rotate(3deg)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(168,85,247,0.3)' },
          '100%': { boxShadow: '0 0 60px rgba(168,85,247,0.8), 0 0 100px rgba(34,211,238,0.3)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(35px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
    },
  },
  plugins: [],
};
