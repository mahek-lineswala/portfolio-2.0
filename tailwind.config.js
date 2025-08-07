/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // Adjust path based on your project structure
  ],
  theme: {
    extend: {
      keyframes: {
        twinkle: {
          '0%, 100%': { opacity: '0.3' },
          '50%': { opacity: '0.8' },
        },
      },
      animation: {
        twinkle: 'twinkle 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
