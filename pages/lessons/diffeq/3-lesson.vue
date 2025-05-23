<template>
    <BaseLesson title="Частные производные">
  
      <!-- Введение -->
      <section>
        <h2 class="text-2xl font-semibold text-indigo-700 mb-4">Что такое частные производные?</h2>
        <p class="mb-4">
          <strong>Частные производные</strong> — это производные функций нескольких переменных по одной из переменных,
          когда остальные считаются константами.
        </p>
        <p>Например:</p>
        <pre class="bg-white border p-3 font-mono text-sm rounded shadow-sm">
  f(x, y) = x²y + y³  
  ∂f/∂x = 2xy  
  ∂f/∂y = x² + 3y²
        </pre>
      </section>
  
      <!-- Обозначения -->
      <section class="mt-10">
        <h2 class="text-2xl font-semibold text-indigo-700 mb-2">Обозначения</h2>
        <ul class="list-disc list-inside space-y-1">
          <li>∂f/∂x — частная производная по x</li>
          <li>∂f/∂y — частная производная по y</li>
          <li>∂²f/∂x² — вторая частная производная</li>
          <li>∂²f/∂x∂y — смешанная производная</li>
        </ul>
      </section>
  
      <!-- Геометрический смысл -->
      <section class="mt-10">
        <h2 class="text-2xl font-semibold text-indigo-700 mb-2">Геометрическая интерпретация</h2>
        <p>
          Частная производная показывает, как быстро меняется функция вдоль одного направления, если другие переменные "заморожены".
          Это как срез поверхности вдоль оси x или y.
        </p>
      </section>
  
      <!-- Градиент -->
      <section class="mt-10">
        <h2 class="text-2xl font-semibold text-indigo-700 mb-2">Градиент</h2>
        <p>
          <strong>Градиент</strong> — это вектор из всех частных производных:
        </p>
        <pre class="bg-white p-3 font-mono text-sm rounded border">
  ∇f(x, y) = [∂f/∂x, ∂f/∂y]
        </pre>
        <p class="mt-2">Он указывает направление наибольшего роста функции.</p>
      </section>
  
      <!-- Пример -->
      <section class="bg-gray-50 border-l-4 border-green-400 p-4 rounded-md shadow-sm mt-8">
        <h3 class="text-lg font-semibold text-green-700 mb-2">Пример:</h3>
        <p>f(x, y) = x²y + y³</p>
        <pre class="bg-white p-3 rounded font-mono text-sm border mt-2">
  ∂f/∂x = 2xy  
  ∂f/∂y = x² + 3y²  
  Градиент: ∇f = [2xy, x² + 3y²]
        </pre>
      </section>
  
      <!-- Практика -->
      <Calculator title="Найди градиент или частную производную" class="mt-10" />
  
      <!-- Где используется -->
      <section class="mt-12">
        <h2 class="text-2xl font-semibold text-indigo-700 mb-2">Где применяются частные производные?</h2>
        <ul class="list-disc list-inside space-y-1">
          <li>Физика: уравнения теплопроводности, волновые уравнения</li>
          <li>Оптимизация: градиентный спуск</li>
          <li>Машинное обучение: backpropagation</li>
          <li>3D-графика и анимация</li>
          <li>Экономика и модели с несколькими переменными</li>
        </ul>
      </section>
  
      <!-- Вывод -->
      <section class="mt-12">
        <h2 class="text-2xl font-semibold text-indigo-700 mb-2">Вывод</h2>
        <p>
          Частные производные — это фундамент анализа функций многих переменных. Они позволяют изучать сложные процессы,
          которые зависят от нескольких параметров, и широко применяются в науке, технике и программировании.
        </p>
      </section>
  
      <!-- Навигация -->
      <section class="mt-16 flex justify-between items-center">
        <NuxtLink
          to="/lessons/diffeq/2-lesson"
          class="text-indigo-600 hover:underline font-medium flex items-center gap-2"
        >
          ← Системы дифференциальных уравнений
        </NuxtLink>
  
        <NuxtLink
          to="/lessons/logic/1-lesson"
          class="ml-auto bg-gray-300 text-gray-600 font-semibold px-6 py-2 rounded-xl shadow transition cursor-not-allowed"
          disabled
        >
          Это был последний урок
        </NuxtLink>
      </section>
  
    </BaseLesson>
  </template>
  
  <script setup>
  import BaseLesson from '~/components/base-lesson/BaseLesson.vue'
  </script>
  