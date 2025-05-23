<template>
    <BaseLesson title="Системы дифференциальных уравнений">
  
      <!-- Введение -->
      <section>
        <h2 class="text-2xl font-semibold text-indigo-700 mb-4">Что такое система дифференциальных уравнений?</h2>
        <p class="mb-4">
          <strong>Система дифференциальных уравнений</strong> — это набор уравнений, где задействовано несколько функций и их производные.
          Обычно такие системы описывают взаимодействующие процессы.
        </p>
        <pre class="bg-white border p-3 font-mono text-sm rounded shadow-sm">
  dx/dt = f₁(x, y, t)  
  dy/dt = f₂(x, y, t)
        </pre>
        <p class="mt-2">
          Здесь x и y — неизвестные функции времени t.
        </p>
      </section>
  
      <!-- Где встречается -->
      <section class="mt-10">
        <h2 class="text-2xl font-semibold text-indigo-700 mb-2">Примеры из жизни</h2>
        <ul class="list-disc list-inside space-y-1">
          <li>Физика: взаимодействие тел, электрические цепи</li>
          <li>Экология: модели хищник-жертва</li>
          <li>Экономика: модель спроса-предложения</li>
          <li>Нейросети: обучение модели вектором параметров</li>
        </ul>
      </section>
  
      <!-- Пример -->
      <section class="bg-gray-50 border-l-4 border-green-400 p-4 rounded-md shadow-sm mt-8">
        <h3 class="text-lg font-semibold text-green-700 mb-2">Пример: Модель Лотки-Вольтерры (хищник-жертва)</h3>
        <pre class="bg-white p-3 rounded font-mono text-sm border">
  dx/dt = αx − βxy  
  dy/dt = δxy − γy
        </pre>
        <p class="mt-2">
          x — количество жертв, y — количество хищников.  
          Модель описывает рост жертв и зависимость хищников от добычи.
        </p>
      </section>
  
      <!-- Методы решения -->
      <section class="mt-10">
        <h2 class="text-2xl font-semibold text-indigo-700 mb-2">Как решают такие системы?</h2>
        <ul class="list-disc list-inside space-y-1">
          <li>Метод исключения одной переменной</li>
          <li>Переход к матричной форме: <code>dx/dt = A·x</code></li>
          <li>Метод собственных значений и векторов</li>
          <li>Численно: метод Эйлера, Рунге-Кутты</li>
        </ul>
      </section>
  
      <!-- Матричный вид -->
      <section class="mt-10">
        <h2 class="text-2xl font-semibold text-indigo-700 mb-2">Матричная запись</h2>
        <pre class="bg-white border rounded p-3 font-mono text-sm shadow-sm">
  dX/dt = A·X
  
  Где:
  X = [x(t), y(t)]ᵗ  
  A — матрица коэффициентов
        </pre>
      </section>
  
      <!-- Практика -->
      <Calculator title="Попробуй решить простую систему" class="mt-10" />
  
      <!-- Вывод -->
      <section class="mt-12">
        <h2 class="text-2xl font-semibold text-indigo-700 mb-2">Вывод</h2>
        <p>
          Системы дифференциальных уравнений — ключ к описанию взаимодействующих процессов: от популяций до схем. 
          Они активно используются в физике, биологии, финансах и науке о данных.
        </p>
      </section>
  
      <!-- Навигация -->
      <section class="mt-16 flex justify-between items-center">
        <NuxtLink
          to="/lessons/diffeq/1-lesson"
          class="text-indigo-600 hover:underline font-medium flex items-center gap-2"
        >
          ← Обыкновенные дифференциальные уравнения
        </NuxtLink>
  
        <NuxtLink
          to="/lessons/diffeq/3-lesson"
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
  