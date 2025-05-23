<template>
    <BaseLesson title="Производные и дифференциалы">
  
      <!-- Введение -->
      <section>
        <h2 class="text-2xl font-semibold text-indigo-700 mb-4">Что такое производная?</h2>
        <p class="mb-4">
          Производная показывает, как быстро меняется значение функции при изменении аргумента.
          Грубо говоря — это <strong>скорость изменения</strong>.
        </p>
        <p>
          Обозначения:
        </p>
        <ul class="list-disc list-inside mb-4 mt-2 space-y-1">
          <li><code>f '(x)</code></li>
          <li><code>dy/dx</code> — дифференциальная форма</li>
        </ul>
      </section>
  
      <!-- Геометрия -->
      <section class="mt-10">
        <h2 class="text-2xl font-semibold text-indigo-700 mb-2">Геометрический смысл</h2>
        <p class="mb-4">
          Производная в точке — это наклон касательной к графику функции. Если функция — это кривая, 
          то производная — это «склон» в этой точке.
        </p>
        <pre class="bg-white p-3 rounded-md font-mono text-sm border">
  f '(x) = lim (Δx → 0) [f(x + Δx) − f(x)] / Δx
        </pre>
      </section>
  
      <!-- Пример -->
      <section class="bg-gray-50 border-l-4 border-green-400 p-4 rounded-md shadow-sm mt-10">
        <h3 class="text-lg font-semibold text-green-700 mb-2">Пример:</h3>
        <p>Найти производную функции:</p>
        <pre class="font-mono mt-2">f(x) = x² + 2x + 1</pre>
        <p class="mt-2">Решение:</p>
        <pre class="font-mono bg-white p-3 rounded border text-sm">
  f '(x) = 2x + 2
        </pre>
      </section>
  
      <!-- Дифференциалы -->
      <section class="mt-12">
        <h2 class="text-2xl font-semibold text-indigo-700 mb-2">Что такое дифференциал?</h2>
        <p class="mb-4">
          Дифференциал — это приближённое изменение функции. Обозначается <code>dy = f '(x) · dx</code>.
          Он позволяет оценить, как меняется функция при малом приращении аргумента.
        </p>
        <p>Применяется в приближённых вычислениях, физике, инженерии.</p>
      </section>
  
      <!-- Калькулятор -->
      <Calculator title="Попробуйте найти производную" class="mt-10" />
  
      <!-- Применение -->
      <section class="mt-12">
        <h2 class="text-2xl font-semibold text-indigo-700 mb-2">Где применяются производные?</h2>
        <ul class="list-disc list-inside space-y-1">
          <li>Физика — скорость, ускорение</li>
          <li>Экономика — максимизация прибыли, предельный анализ</li>
          <li>Программирование — градиентный спуск</li>
          <li>Медицина — анализ биосигналов</li>
          <li>Аналитика — нахождение экстремумов графиков</li>
        </ul>
      </section>
  
      <!-- Вывод -->
      <section class="mt-12">
        <h2 class="text-2xl font-semibold text-indigo-700 mb-2">Вывод</h2>
        <p>
          Производная — это ключ к анализу любой функции. Она позволяет понимать рост, падение,
          экстремумы и поведение функции при малейших изменениях.
        </p>
      </section>
  
      <!-- Навигация -->
      <section class="mt-16 flex justify-between items-center">
        <NuxtLink
          to="/lessons/analysis/1-lesson"
          class="text-indigo-600 hover:underline font-medium flex items-center gap-2"
        >
          ← Пределы и непрерывность
        </NuxtLink>
  
        <NuxtLink
          to="/lessons/analysis/3-lesson"
          class="ml-auto bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-2 rounded-xl shadow transition"
        >
          Следующий урок →
        </NuxtLink>
      </section>
  
    </BaseLesson>
  </template>
  
  <script setup>
  import BaseLesson from '~/components/base-lesson/BaseLesson.vue'
  </script>
  