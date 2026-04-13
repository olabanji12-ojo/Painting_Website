/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-primary': '#1E40AF',
        'brand-accent': '#2563EB',
        'brand-text': '#111827',
        'brand-muted': '#6B7280',
        'brand-bg': '#FFFFFF',
        'brand-light': '#F8FAFF',
      },
    },
  },
  plugins: [],
}
