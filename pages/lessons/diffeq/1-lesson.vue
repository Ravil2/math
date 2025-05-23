<template>
    <BaseLesson title="Обыкновенные дифференциальные уравнения">
  
      <!-- Введение -->
      <section>
        <h2 class="text-2xl font-semibold text-indigo-700 mb-4">Что такое обыкновенное дифференциальное уравнение (ОДУ)?</h2>
        <p class="mb-4">
          <strong>ОДУ</strong> — это уравнение, в котором фигурируют производные функции одной переменной. Оно описывает, 
          как функция изменяется во времени или по другой переменной.
        </p>
        <pre class="bg-white border p-3 font-mono text-sm rounded shadow-sm">
  Пример:  dy/dx = 3x²
        </pre>
        <p class="mt-2">Это уравнение говорит, что скорость изменения y равна 3x².</p>
      </section>
  
      <!-- Классификация -->
      <section class="mt-10">
        <h2 class="text-2xl font-semibold text-indigo-700 mb-2">Типы ОДУ</h2>
        <ul class="list-disc list-inside space-y-1">
          <li><strong>Первого порядка:</strong> dy/dx = f(x, y)</li>
          <li><strong>Второго порядка:</strong> d²y/dx² + a(x)dy/dx + b(x)y = g(x)</li>
          <li><strong>Линейные и нелинейные</strong></li>
          <li><strong>С разделяющимися переменными</strong></li>
          <li><strong>С начальным условием:</strong> y(x₀) = y₀</li>
        </ul>
      </section>
  
      <!-- Решение -->
      <section class="mt-10">
        <h2 class="text-2xl font-semibold text-indigo-700 mb-2">Как решают ОДУ?</h2>
        <ul class="list-disc list-inside space-y-1">
          <li>Интегрирование (если можно явно выразить)</li>
          <li>Замена переменных</li>
          <li>Методы Эйлера, Рунге-Кутты — численные</li>
          <li>Общее решение + начальные условия → частное решение</li>
        </ul>
      </section>
  
      <!-- Пример -->
      <section class="bg-gray-50 border-l-4 border-green-400 p-4 rounded-md shadow-sm mt-10">
        <h3 class="text-lg font-semibold text-green-700 mb-2">Пример:</h3>
        <p>ОДУ: <code>dy/dx = 3x²</code></p>
        <p class="mt-2">Интегрируем обе части:</p>
        <pre class="font-mono bg-white p-3 rounded border text-sm">
  ∫ dy = ∫ 3x² dx  
  → y = x³ + C
        </pre>
        <p class="mt-2">Это — общее решение.</p>
      </section>
  
      <!-- Практика -->
      <Calculator title="Попробуй решить своё ОДУ" class="mt-10" />
  
      <!-- Где применяются -->
      <section class="mt-12">
        <h2 class="text-2xl font-semibold text-indigo-700 mb-2">Где применяются ОДУ?</h2>
        <ul class="list-disc list-inside space-y-1">
          <li>Физика: движение тел, законы Ньютона</li>
          <li>Биология: рост популяции</li>
          <li>Экономика: динамика спроса/предложения</li>
          <li>Инженерия: ток в цепях, теплопроводность</li>
          <li>Машинное обучение: оптимизация, градиенты</li>
        </ul>
      </section>
  
      <!-- Вывод -->
      <section class="mt-12">
        <h2 class="text-2xl font-semibold text-indigo-700 mb-2">Вывод</h2>
        <p>
          Обыкновенные дифференциальные уравнения — мощный инструмент для описания всего, что меняется.
          Поняв базовые типы и методы решения, ты сможешь моделировать реальные процессы и предсказывать поведение систем.
        </p>
      </section>
  
      <!-- Навигация -->
      <section class="mt-16 flex justify-between items-center">
        <NuxtLink
          to="/lessons/probability/4-lesson"
          class="text-indigo-600 hover:underline font-medium flex items-center gap-2"
        >
          ← Основы математической статистики
        </NuxtLink>
  
        <NuxtLink
          to="/lessons/diffeq/2-lesson"
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
  