/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,ts,js,svelte,md,svx}'],
  theme: {
    extend: {
      colors: {
        "ink-dark":"#17171A",
        "ink-light":"#212225",
        "info":"#CBF3FF",
        "warning":"#FDEC97",
        "success":"#CBFFD0",
        "error":"#FFBFBF",
        "cloud-normal":"#F5F8FF",
      }
    },
  },
  plugins: [],
}

