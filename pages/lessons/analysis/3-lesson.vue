<template>
    <BaseLesson title="Интегралы">
      <!-- Введение -->
      <section>
        <h2 class="text-2xl font-semibold text-indigo-700 mb-4">Что такое интеграл?</h2>
        <p class="mb-4">
          <strong>Интеграл</strong> — это операция, обратная производной. Геометрически он представляет собой 
          <strong>площадь под графиком функции</strong>.
        </p>
        <p>Интегралы делятся на два типа:</p>
        <ul class="list-disc list-inside mt-2 space-y-1">
          <li><strong>Неопределённый интеграл</strong> — находят первообразную</li>
          <li><strong>Определённый интеграл</strong> — численно вычисляет площадь на отрезке</li>
        </ul>
      </section>
  
      <!-- Обозначения -->
      <section class="mt-10">
        <h2 class="text-2xl font-semibold text-indigo-700 mb-2">Обозначения</h2>
        <pre class="bg-white border p-3 font-mono text-sm rounded shadow-sm">
  ∫ f(x) dx      — неопределённый интеграл  
  ∫<sub>a</sub><sup>b</sup> f(x) dx  — определённый интеграл от a до b
        </pre>
      </section>
  
      <!-- Пример -->
      <section class="bg-gray-50 border-l-4 border-green-400 p-4 rounded-md shadow-sm mt-8">
        <h3 class="text-lg font-semibold text-green-700 mb-2">Пример:</h3>
        <p class="mb-2">Вычислим интеграл:</p>
        <pre class="font-mono text-sm bg-white p-3 rounded border">∫ (2x + 3) dx</pre>
        <p class="mt-2">Решение:</p>
        <pre class="font-mono text-sm bg-white p-3 rounded border">x² + 3x + C</pre>
        <p class="mt-2 text-sm text-gray-600"><em>C — произвольная постоянная</em></p>
      </section>
  
      <!-- Геометрический смысл -->
      <section class="mt-12">
        <h2 class="text-2xl font-semibold text-indigo-700 mb-2">Что означает интеграл визуально?</h2>
        <p class="mb-4">
          Определённый интеграл — это площадь под кривой между точками a и b. Если часть графика уходит ниже оси X, 
          то она считается с минусом.
        </p>
      </section>
  
      <!-- Калькулятор -->
      <Calculator title="Вычислите свой интеграл" class="mt-10" />
  
      <!-- Применения -->
      <section class="mt-12">
        <h2 class="text-2xl font-semibold text-indigo-700 mb-2">Где применяются интегралы?</h2>
        <ul class="list-disc list-inside space-y-1">
          <li>Нахождение площадей, объёмов, длин кривых</li>
          <li>Физика — работа, энергия, масса, ток</li>
          <li>Компьютерная графика — сглаживание, тени, антиалиасинг</li>
          <li>Анализ данных — сглаживание графиков, аппроксимация</li>
          <li>Машинное обучение — оптимизация и оценки</li>
        </ul>
      </section>
  
      <!-- Вывод -->
      <section class="mt-12">
        <h2 class="text-2xl font-semibold text-indigo-700 mb-2">Итог</h2>
        <p>
          Интеграл — это инструмент для нахождения "накопленного результата". Если производная показывает мгновенную скорость, 
          то интеграл — путь, который ты прошёл. Это ключ к решению задач в физике, математике, технике и программировании.
        </p>
      </section>
  
      <!-- Навигация -->
      <section class="mt-16 flex justify-between items-center">
        <NuxtLink
          to="/lessons/analysis/2-lesson"
          class="text-indigo-600 hover:underline font-medium flex items-center gap-2"
        >
          ← Производные и дифференциалы
        </NuxtLink>
  
        <NuxtLink
          to="/lessons/analysis/4-lesson"
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
  