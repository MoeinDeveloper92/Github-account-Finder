module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  options: {
    safelist: [
      /data-theme$/,
    ]
  },
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
}