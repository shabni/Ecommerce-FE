/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts,scss}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#89a293',
        secondary: '#dcb5be',
        background: '#f5f4f3',
        contentBackground: '#eeedeb',
        textPrimary: '#333333',
        textSecondary: '#555555',
        buttonText: '#ffffff',
        linkColor: '#dcb5be',
      },
    },
  },
  plugins: [],
}
