
import tailwindcss from '@tailwindcss/vite'
import vue from '@vitejs/plugin-vue'

export default defineNuxtConfig({
  css: ['@/assets/main.css'],
  modules: ['@pinia/nuxt'],
  app: {
    head: {
      title: 'FastMath — Школа Математики',
      meta: [
        { name: 'description', content: 'Обучение математике онлайн с калькулятором и уроками' },
      ],
    },
  },
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
})