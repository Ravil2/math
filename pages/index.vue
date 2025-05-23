<template>
  <div class="relative min-h-screen bg-white">
    <!-- Фоновое изображение с затемнением -->
    <div class="absolute inset-0">
      <img
        src="@/assets/background-math.png"
        alt="Математический фон"
        class="w-full h-130 object-cover opacity-80"
      />

    </div>

    <!-- Хедер -->
      <header class="py-28 px-8 relative z-10">
      <div class="max-w-7xl mx-auto">
        <h1 class="text-6xl fm lg:text-7xl font-black text-gray-900 drop-shadow-xl max-w-4xl leading-tight">
          FastMath
        </h1>
        <p class="text-xl fm mt-6 text-gray-800 max-w-2xl leading-relaxed">
          Учись по темам, решай задачи, используй мощный калькулятор и становись сильнее в математике каждый день.
        </p>
        <NuxtLink
          to="/calculator-page"
          class="inline-block mt-8 bg-indigo-600 hover:bg-indigo-700 text-white text-lg font-semibold px-6 py-3 rounded-xl shadow-lg transition"
        >
          Открыть калькулятор
        </NuxtLink>
      </div>
    </header>

    <!-- Темы -->
    <section class="max-w-7xl mx-auto px-6 py-24 relative z-10 space-y-24">
  <div
    v-for="category in categoriesLinks"
    :key="category.title"
    class="flex flex-col lg:flex-row items-start lg:items-center gap-10"
  >
    <!-- Заголовок категории -->
    <div class="flex-1">
      <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
        {{ category.title }}
      </h2>
      <p class="text-gray-600 text-base max-w-md">
        Изучи темы по "{{ category.title }}", переходи к урокам, решай задачи и прокачивайся.
      </p>
    </div>

    <!-- Сетка уроков -->
    <div class="flex-[2] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 w-full">
      <NuxtLink
        v-for="link in category.links"
        :key="link.url"
        :to="link.url"
        class="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition border border-gray-200 bg-gradient-to-tr from-white to-gray-50 hover:from-indigo-50"
      >
        <img
          :src="link.image"
          alt=""
          class="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div class="p-4 flex flex-col justify-between h-full">
          <h3 class="text-gray-900 font-semibold text-base group-hover:text-indigo-600 transition mb-2">
            {{ link.name }}
          </h3>
          <div class="mt-auto">
            <span
              class="inline-block text-sm text-indigo-600 font-medium group-hover:underline transition"
            >
              Открыть →
            </span>
          </div>
        </div>
      </NuxtLink>
    </div>
  </div>
</section>


    <!-- Отзывы -->
    <section class="bg-gradient-to-br from-gray-50 to-white py-20 relative z-10">
      <h2 class="text-4xl font-bold text-center text-gray-800 mb-16">Отзывы студентов</h2>
      <div class="max-w-6xl mx-auto grid gap-10 sm:grid-cols-2 lg:grid-cols-3 px-6">
        <div
          v-for="(review, i) in reviews"
          :key="i"
          class="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition"
        >
          <div class="flex items-center mb-4">
            <div class="flex text-yellow-400 mr-2">
              <span v-for="n in 5" :key="n">
                <svg
                  v-if="n <= review.rating"
                  class="w-5 h-5 fill-current"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09L5.82 11.18.946 7.91l6.09-.89L10 2l2.964 5.02 6.09.89-4.874 3.27 1.698 6.91z" />
                </svg>
                <svg
                  v-else
                  class="w-5 h-5 text-gray-300"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09L5.82 11.18.946 7.91l6.09-.89L10 2l2.964 5.02 6.09.89-4.874 3.27 1.698 6.91z" />
                </svg>
              </span>
            </div>
            <span class="text-sm text-gray-600">{{ review.name }}</span>
          </div>
          <p class="text-gray-700 leading-relaxed">
            {{ review.text }}
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { categoriesLinks } from '~/links'

const reviews = [
  { name: 'Алина Т.', rating: 5, text: 'Очень крутая платформа! Всё понятно, темы структурированы. Калькулятор — топ.' },
  { name: 'Игорь П.', rating: 5, text: 'Наконец-то понял матанализ! Объяснение лучше, чем у преподов в универе.' },
  { name: 'Марат С.', rating: 5, text: 'Юзер-интерфейс — кайф! Удобно, понятно, мотивация есть.' },
  { name: 'София Р.', rating: 4, text: 'Темы супер, но иногда не хватает примеров с решениями.' },
  { name: 'Жанибек Н.', rating: 5, text: 'FastMath прокачал мои знания для подготовки к олимпиаде.' },
  { name: 'Рустам Д.', rating: 5, text: 'Лучше, чем скучные учебники. Жду приложение!' },
  { name: 'Екатерина М.', rating: 3, text: 'В целом норм, но хотелось бы больше видеоформата.' },
  { name: 'Нурсултан Ж.', rating: 5, text: 'Прошел линейную алгебру и наконец разобрался. Спасибо команде!' },
  { name: 'Диана В.', rating: 5, text: 'Поддержка работает отлично. Помогли быстро разобраться с доступом.' },
  { name: 'Петя Л.', rating: 2, text: 'Платформа лагает на телефоне. Надо оптимизировать.' },
  { name: 'Петя Л.', rating: 2, text: 'Платформа лагает на телефоне. Надо оптимизировать.' },
  { name: 'Петя Л.', rating: 2, text: 'Платформа лагает на телефоне. Надо оптимизировать.' },
  { name: 'Петя Л.', rating: 2, text: 'Платформа лагает на телефоне. Надо оптимизировать.' },
  { name: 'Петя Л.', rating: 2, text: 'Платформа лагает на телефоне. Надо оптимизировать.' },
  { name: 'Петя Л.', rating: 2, text: 'Платформа лагает на телефоне. Надо оптимизировать.' },
]
</script>

<style>
.fm {
  color: white;
  transition: 0.3s;
}

.fm:hover {
  color: rgb(0, 145, 255);
}
</style>