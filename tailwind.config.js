// tailwind.config.js
export default {
  content: ["./UBR-FRONTEND/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: '#2563eb',
        secondary: '#10b981',
        accent: '#f59e0b',
        divine: '#7c3aed'
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif']
      },
      animation: {
        bounce: 'bounce 1s infinite',
        spin: 'spin 1s linear infinite'   // Ajout ici
      },
      keyframes: {
        bounce: {
          '0%, 100%': {
            transform: 'translateY(-25%)',
            animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)'
          },
          '50%': {
            transform: 'translateY(0)',
            animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)'
          },
        },
        spin: {   // Ajout ici
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' }
        }
      },
      transitionDelay: {
        '0': '0ms',
        '150': '150ms',
        '300': '300ms',
      }
    }
  },
  plugins: []
}
