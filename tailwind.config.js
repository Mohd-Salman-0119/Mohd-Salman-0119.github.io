/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0f172a',
        secondary: '#1e293b',
        accent: '#00d9ff',
        accent2: '#a78bfa',
        accent3: '#ec4899',
      },
      fontFamily: {
        'sans': ['Space Grotesk', 'sans-serif'],
        'display': ['Outfit', 'sans-serif'],
        'mono': ['JetBrains Mono', 'monospace'],
      },
      backgroundImage: {
        'gradient': 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)',
        'gradient-hero': 'linear-gradient(135deg, #0f172a 0%, #1a1f3a 100%)',
        'gradient-accent': 'linear-gradient(135deg, #00d9ff 0%, #a78bfa 50%, #ec4899 100%)',
        'instagram': 'radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%)',
      },
      backgroundColor: {
        'glass': 'rgba(15, 23, 42, 0.7)',
        'glass-light': 'rgba(30, 41, 59, 0.5)',
      },
      borderRadius: {
        'glass': '16px',
        'xl': '20px',
      },
      boxShadow: {
        'glass': '0 8px 32px rgba(0, 217, 255, 0.1)',
        'glow': '0 0 30px rgba(0, 217, 255, 0.2)',
        'glow-pink': '0 0 30px rgba(236, 72, 153, 0.2)',
      },
      backdropFilter: {
        'glass': 'blur(10px) saturate(180%)',
        'webkit-glass': '-webkit-blur(10px)',
      },
      borderWidth: {
        'glass': '1px',
      },
      borderColor: {
        'glass': 'rgba(0, 217, 255, 0.2)',
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
        'glow-pulse': {
          '0%, 100%': {
            boxShadow: '0 0 20px rgba(0, 217, 255, 0.3)',
          },
          '50%': {
            boxShadow: '0 0 40px rgba(0, 217, 255, 0.6)',
          },
        },
        'float': {
          '0%, 100%': {
            transform: 'translateY(0px)',
          },
          '50%': {
            transform: 'translateY(-20px)',
          },
        },
        'shimmer': {
          '0%': {
            backgroundPosition: '200% center',
          },
          '100%': {
            backgroundPosition: '-200% center',
          },
        },
      },
      animation: {
        'scale-up-center': 'scale-up-center 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both',
        'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
        'shimmer': 'shimmer 8s linear infinite',
      },
    },
  },
  plugins: [
    function ({ addBase, addUtilities, variants, theme }) {
      addBase({
        '@keyframes floating': {
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
      });

      addUtilities(
        {
          '.animate-floating': {
            animationName: 'floating',
            animationDuration: '3s',
            animationIterationCount: 'infinite',
            animationTimingFunction: 'ease-in-out',
          },
        },
        variants('animation')
      );
    },
    
   
  ],
}
