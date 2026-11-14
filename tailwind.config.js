/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        obsidian: '#090710',
        plumSlate: '#120F1D',
        obsidianBorder: '#261E3F',
        electricViolet: '#8B5CF6',
        electricVioletHover: '#7C3AED',
        royalPurple: '#6D28D9',
        lavenderSlate: '#CBD5E1',
        pureWhite: '#FAFAFA',
        violetSubtle: 'rgba(139, 92, 246, 0.15)',
        violetText: '#C4B5FD',
        page: '#090710',
        surface: '#120F1D',
        surfaceSubtle: '#171324',
        surfaceHover: '#1D182E',
        borderSubtle: '#261E3F',
        borderMedium: '#3E3166',
        heading: '#FAFAFA',
        bodyText: '#CBD5E1',
        textMuted: '#94A3B8',
        accentViolet: '#8B5CF6',
        accentVioletHover: '#7C3AED',
        liveEmerald: '#10B981',
        card: '#120F1D',
        cardBorder: '#261E3F',
        accent: {
          DEFAULT: '#8B5CF6',
          hover: '#7C3AED',
          subtle: 'rgba(139, 92, 246, 0.15)',
          glow: 'rgba(139, 92, 246, 0.16)',
          border: '#261E3F',
        }
      },
      boxShadow: {
        'violet-soft': '0 8px 24px rgba(139, 92, 246, 0.08)',
        'violet-hover': '0 10px 30px rgba(139, 92, 246, 0.16)',
        'violet-glow': '0 0 24px rgba(139, 92, 246, 0.25)',
      },
      fontFamily: {
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
        heading: ['Outfit', '"DM Sans"', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
        tamilHeading: ['Catamaran', 'Outfit', 'sans-serif'],
        tamilBody: ['"Hind Madurai"', '"DM Sans"', 'sans-serif'],
      },
      animation: {
        'marquee-left': 'marquee-left 35s linear infinite',
        'pulse-glow': 'pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float-slow 4s ease-in-out infinite',
      },
      keyframes: {
        'marquee-left': {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: 1, transform: 'scale(1)' },
          '50%': { opacity: 0.5, transform: 'scale(0.95)' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      }
    },
  },
  plugins: [],
};

