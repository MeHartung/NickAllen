import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          black: '#000000',       // Текст
          white: '#ffffff',       // Фон
          gray: '#6b7280',        // Второстепенный текст (темно-серый)
          accent: '#ff0055',      // Акцент (оставим если нужен)
        },
      },
    },
  },
  plugins: [],
}

export default config