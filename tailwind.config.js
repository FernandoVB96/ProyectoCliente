/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,astro,jsx,tsx}'
  ],
  theme: {
    extend: {
      animation: {
        typing: 'typing 4s steps(30) 1s 1 normal both',
        blink: 'blink 0.75s step-end infinite',
      },
      keyframes: {
        typing: {
          '0%': { width: '0' },
          '100%': { width: '100%' },
        },
        blink: {
          '50%': { opacity: '0' },
        },
      },
    },
  },
}

