<template>
    <BaseLesson title="Ряды и пределы последовательностей">
  
      <!-- Введение -->
      <section>
        <h2 class="text-2xl font-semibold text-indigo-700 mb-4">Что такое последовательность?</h2>
        <p class="mb-4">
          <strong>Последовательность</strong> — это упорядоченный набор чисел, идущих по определённому закону. Примеры:
        </p>
        <pre class="bg-gray-50 p-3 rounded font-mono text-sm border">
  1, 2, 3, 4, 5, ...
  1, 1/2, 1/3, 1/4, ...
  (−1)<sup>n</sup>
        </pre>
  
        <p class="mt-4">
          Мы изучаем, <strong>куда стремится</strong> такая последовательность при n → ∞.
          Это называется <strong>предел последовательности</strong>.
        </p>
      </section>
  
      <!-- Предел -->
      <section class="mt-10">
        <h2 class="text-2xl font-semibold text-indigo-700 mb-2">Предел последовательности</h2>
        <p class="mb-2">
          Последовательность {aₙ} стремится к числу A, если:
        </p>
        <pre class="bg-white p-3 font-mono text-sm rounded border shadow-sm">
  lim (n→∞) aₙ = A
        </pre>
        <p class="mt-2">
          Это значит, что члены последовательности всё ближе приближаются к A.
        </p>
  
        <div class="mt-4 text-sm">
          <strong>Пример:</strong> aₙ = 1/n → 0, потому что<br />
          1, 1/2, 1/3, 1/4, ..., → 0
        </div>
      </section>
  
      <!-- Ряды -->
      <section class="mt-10">
        <h2 class="text-2xl font-semibold text-indigo-700 mb-2">Что такое ряд?</h2>
        <p class="mb-4">
          <strong>Ряд</strong> — это сумма бесконечного количества членов последовательности:
        </p>
        <pre class="bg-gray-50 p-3 font-mono text-sm rounded border">
  S = a₁ + a₂ + a₃ + ... + aₙ + ...
        </pre>
        <p>
          Если такая сумма стремится к конечному числу — ряд <strong>сходится</strong>, иначе — <strong>расходится</strong>.
        </p>
      </section>
  
      <!-- Геометрический ряд -->
      <section class="bg-white border-l-4 border-green-400 p-4 rounded-md shadow-sm mt-10">
        <h3 class="text-lg font-semibold text-green-700 mb-2">Пример: геометрический ряд</h3>
        <pre class="font-mono text-sm bg-gray-50 p-3 rounded border">
  S = 1 + 1/2 + 1/4 + 1/8 + ...
        </pre>
        <p class="mt-2">
          Такой ряд сходится, и его сумма равна 2:
          <strong>S = 1 / (1 − 1/2) = 2</strong>
        </p>
      </section>
  
      <!-- Признаки сходимости -->
      <section class="mt-12">
        <h2 class="text-2xl font-semibold text-indigo-700 mb-2">Признаки сходимости рядов</h2>
        <ul class="list-disc list-inside space-y-1">
          <li><strong>Признак сравнения</strong></li>
          <li><strong>Интегральный признак</strong></li>
          <li><strong>D'Alembert (Даламбера)</strong></li>
          <li><strong>Cauchy (Коши)</strong></li>
        </ul>
      </section>
  
      <!-- Калькулятор -->
      <Calculator title="Проверь сходимость ряда или предела" class="mt-10" />
  
      <!-- Применение -->
      <section class="mt-12">
        <h2 class="text-2xl font-semibold text-indigo-700 mb-2">Где используются ряды?</h2>
        <ul class="list-disc list-inside space-y-1">
          <li>Анализ сигналов, аудио и изображений</li>
          <li>Машинное обучение — разложения функций</li>
          <li>Приближённые вычисления (например, через ряды Тейлора)</li>
          <li>Физика и механика — колебания, волны</li>
        </ul>
      </section>
  
      <!-- Вывод -->
      <section class="mt-12">
        <h2 class="text-2xl font-semibold text-indigo-700 mb-2">Вывод</h2>
        <p>
          Пределы последовательностей и ряды — это основа для анализа, приближённых вычислений, теории функций и многого другого.
          Без этого невозможен ни один продвинутый курс по анализу или прикладной математике.
        </p>
      </section>
  
      <!-- Навигация -->
      <section class="mt-16 flex justify-between items-center">
        <NuxtLink
          to="/lessons/analysis/3-lesson"
          class="text-indigo-600 hover:underline font-medium flex items-center gap-2"
        >
          ← Интегралы
        </NuxtLink>
  
        <NuxtLink
          to="/lessons/discrete/1-lesson"
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
  