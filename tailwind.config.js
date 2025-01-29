/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          primary: '#0a0a0a',
          secondary: '#121212',
        },
        cyber: {
          primary: '#00fff5',
          secondary: '#ff00ff',
          purple: '#b829ff',
          pink: '#ff1b6b',
          blue: '#0066ff',
          green: '#00ff66',
          accent: '#ffcc00',
        },
        'dark-primary': '#0a0a0a',
        'dark-secondary': '#1a1a1a',
        'cyber-primary': 'var(--cyber-primary)',
        'cyber-secondary': 'var(--cyber-secondary)',
        'space-dark': 'var(--space-dark)',
        'space-light': 'var(--space-light)',
        'bg-primary': 'var(--bg-primary)',
        'bg-secondary': 'var(--bg-secondary)',
        'text-primary': 'var(--text-primary)',
        'text-secondary': 'var(--text-secondary)',
        'accent-primary': 'var(--accent-primary)',
        'accent-secondary': 'var(--accent-secondary)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'cyber-glow': 'cyber-glow 2s ease-in-out infinite',
        'text-shimmer': 'text-shimmer 3s ease-in-out infinite',
        'glitch': 'glitch 0.3s ease-in-out infinite',
        'matrix-fall': 'matrix-fall 10s linear infinite',
        'matrix-fade': 'matrix-fade 1s linear infinite',
        'cyber-pulse': 'cyber-pulse 2s ease-in-out infinite',
        'holo-gradient': 'holo-gradient 8s ease infinite',
        'spin-slow': 'spin 20s linear infinite',
        'rocket': 'rocket 0.6s ease-in-out',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'pulse-glow-new': 'pulseGlow 6s ease-in-out infinite',
        'holo-gradient-new': 'holoGradient 8s ease infinite',
        'twinkle': 'twinkle 4s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
        'border-flow': 'borderFlow 3s ease infinite',
        'text-shimmer-alt': 'textShimmer 2.5s ease-in-out infinite alternate',
        'sparkle': 'sparkle 1.5s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.5', transform: 'scale(1.05)' },
        },
        'cyber-glow': {
          '0%, 100%': { textShadow: '0 0 10px #00fff5, 0 0 20px #00fff5, 0 0 30px #00fff5' },
          '50%': { textShadow: '0 0 20px #00fff5, 0 0 30px #00fff5, 0 0 40px #00fff5' },
        },
        'text-shimmer': {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '200% 50%' },
        },
        glitch: {
          '0%, 100%': { transform: 'translate(0)' },
          '33%': { transform: 'translate(-5px, 3px)' },
          '66%': { transform: 'translate(5px, -3px)' },
        },
        'matrix-fall': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        'matrix-fade': {
          '0%, 100%': { opacity: '0' },
          '50%': { opacity: '1' },
        },
        'cyber-pulse': {
          '0%, 100%': { transform: 'scale(1)', filter: 'brightness(100%)' },
          '50%': { transform: 'scale(1.05)', filter: 'brightness(120%)' },
        },
        'holo-gradient': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'cyber-pulse': {
          '0%, 100%': { transform: 'scale(1)', filter: 'brightness(100%)' },
          '50%': { transform: 'scale(1.05)', filter: 'brightness(120%)' },
        },
        'holo-gradient': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'rocket': {
          '0%': { transform: 'translateY(0) rotate(0)' },
          '50%': { transform: 'translateY(-5px) rotate(-10deg)' },
          '100%': { transform: 'translateY(0) rotate(0)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.1', transform: 'scale(1)' },
          '50%': { opacity: '0.2', transform: 'scale(1.1)' },
        },
        holoGradient: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '50%': { transform: 'rotate(180deg)' },
        },
        twinkle: {
          '0%, 100%': { opacity: '0.2' },
          '50%': { opacity: '0.8' },
        },
        glow: {
          '0%': { 'box-shadow': '0 0 20px var(--cyber-primary)' },
          '100%': { 'box-shadow': '0 0 30px var(--cyber-secondary)' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' }
        },
        glowPulse: {
          '0%, 100%': { 'box-shadow': '0 0 20px var(--cyber-primary)' },
          '50%': { 'box-shadow': '0 0 30px var(--cyber-secondary)' }
        },
        borderFlow: {
          '0%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
          '100%': { 'background-position': '0% 50%' }
        },
        textShimmer: {
          '0%': { 'background-position': '0% 50%' },
          '100%': { 'background-position': '100% 50%' }
        },
        sparkle: {
          '0%, 100%': { 'opacity': 0.4, 'transform': 'scale(1)' },
          '50%': { 'opacity': 1, 'transform': 'scale(1.2)' }
        }
      },
      backgroundImage: {
        'cyber-grid': "url('/images/cyber-grid.svg')",
        'circuit-pattern': "url('/images/circuit-pattern.svg')",
        'cyber-gradient': 'linear-gradient(45deg, var(--tw-gradient-from) 0%, var(--tw-gradient-to) 100%)',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
}
