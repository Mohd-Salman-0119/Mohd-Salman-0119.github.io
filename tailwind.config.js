/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient': 'radial-gradient(circle at 3% 25%, rgba(0, 40, 83, 1) 0%, rgba(4, 12, 24, 1) 100%)',
        'instagram': 'radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%)',
        'email-color':""
      },
      backgroundColor: {
        'glass': 'rgba(76, 35, 166, 0.86)',
      },
      borderRadius: {
        'glass': '16px',
      },
      boxShadow: {
        'glass': '0 4px 30px rgba(0, 0, 0, 0.1)',
      },
      backdropFilter: {
        'glass': 'blur(4.1px)',
        'webkit-glass': '-webkit-blur(4.1px)',
      },
      borderWidth: {
        'glass': '1px',
      },
      borderColor: {
        'glass': 'rgba(160, 156, 216, 1)',
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
      },
      animation: {
        'scale-up-center': 'scale-up-center 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both',
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
