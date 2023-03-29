/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
        "primary": "#4c93ad",
                
        "secondary": "#ce5023",
                
        "accent": "#a0e575",
                
        "neutral": "#9333ea",
                
        "base-100": "#413E56",
                
        "info": "#1655E9",
                
        "success": "#79E7B9",
                
        "warning": "#F99939",
                
        "error": "#E92716",
        },
      },
    ],
  },
}
