/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        card: 'var(--card)',
        'card-foreground': 'var(--card-foreground)',
        primary: 'var(--primary)',
        'primary-dark': 'var(--primary-dark)',
        'primary-light': 'var(--primary-light)',
        secondary: 'var(--secondary)',
        'secondary-dark': 'var(--secondary-dark)',
        accent: 'var(--accent)',
        'accent-dark': 'var(--accent-dark)',
        muted: 'var(--muted)',
        'muted-foreground': 'var(--muted-foreground)',
        border: 'var(--border)',
        ring: 'var(--ring)',
      },
      borderRadius: {
        lg: 'var(--radius)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Space Mono', 'monospace'],
      },
      backgroundImage: {
        'gradient': 'linear-gradient(135deg, #0f0f1e 0%, #1a1a2e 100%)',
        'instagram': 'radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%)',
      },
      screens: {
        'sml': '350px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
      },
      gridTemplateColumns: {
        '40%': '40%',
        '60%': '60%',
      },
      keyframes: {
        'scale-up-center': {
          '0%': {
            transform: 'scale(.5)',
            opacity: '0',
          },
          '100%': {
            transform: 'scale(1)',
            opacity: '1',
          },
        },
        floating: {
          '0%': {
            transform: 'translate(0, 0px)',
          },
          '50%': {
            transform: 'translate(0, 10px)',
          },
          '100%': {
            transform: 'translate(0, -0px)',
          },
        },
      },
      animation: {
        'scale-up-center': 'scale-up-center 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both',
        floating: 'floating 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
