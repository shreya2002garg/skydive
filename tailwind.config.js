/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom-shadow1': '0 0 3px 0 rgba(0,0,0,0.25)',
      },
    },
  },
  plugins: [
    
  ],
}
