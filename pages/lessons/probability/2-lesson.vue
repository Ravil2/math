<template>
    <BaseLesson title="Случайные величины и распределения">
  
      <!-- Введение -->
      <section>
        <h2 class="text-2xl font-semibold text-indigo-700 mb-4">Что такое случайная величина?</h2>
        <p class="mb-4">
          <strong>Случайная величина</strong> — это числовой результат случайного эксперимента. Например:
        </p>
        <ul class="list-disc list-inside space-y-1">
          <li>При броске кубика: X = выпавшее число</li>
          <li>При игре в рулетку: X = выигрыш</li>
        </ul>
        <p class="mt-2">Обозначается обычно как <strong>X</strong>, <strong>Y</strong> и т.п.</p>
      </section>
  
      <!-- Виды случайных величин -->
      <section class="mt-10">
        <h2 class="text-2xl font-semibold text-indigo-700 mb-2">Типы случайных величин</h2>
        <ul class="list-disc list-inside space-y-1">
          <li><strong>Дискретная</strong> — принимает конечное/счётное число значений (например, 0, 1, 2)</li>
          <li><strong>Непрерывная</strong> — принимает любые значения из промежутка (например, рост, температура)</li>
        </ul>
      </section>
  
      <!-- Закон распределения -->
      <section class="mt-10">
        <h2 class="text-2xl font-semibold text-indigo-700 mb-2">Закон распределения</h2>
        <p>
          <strong>Закон распределения</strong> описывает, с какими вероятностями случайная величина принимает те или иные значения.
        </p>
        <p class="mt-2">Пример (дискретная):</p>
        <pre class="bg-white border rounded p-3 font-mono text-sm shadow-sm">
  X:     1    2    3  
  P(X):  0.2  0.5  0.3
        </pre>
      </section>
  
      <!-- Функции -->
      <section class="mt-10">
        <h2 class="text-2xl font-semibold text-indigo-700 mb-2">Функция распределения</h2>
        <p>
          Функция распределения F(x) = P(X ≤ x) показывает, насколько вероятно, что случайная величина не превысит x.
          Для непрерывных — это интеграл плотности вероятности.
        </p>
      </section>
  
      <!-- Матожидание и дисперсия -->
      <section class="mt-12">
        <h2 class="text-2xl font-semibold text-indigo-700 mb-2">Характеристики</h2>
        <ul class="list-disc list-inside space-y-2">
          <li><strong>Математическое ожидание (среднее):</strong>  
            <pre class="bg-gray-50 p-2 rounded font-mono text-sm">E[X] = ∑ xᵢ·P(xᵢ)</pre>
          </li>
          <li><strong>Дисперсия (разброс):</strong>  
            <pre class="bg-gray-50 p-2 rounded font-mono text-sm">D[X] = E[X²] − (E[X])²</pre>
          </li>
          <li><strong>Стандартное отклонение:</strong> √D[X]</li>
        </ul>
      </section>
  
      <!-- Пример -->
      <section class="bg-gray-50 border-l-4 border-green-400 p-4 rounded-md shadow-sm mt-10">
        <h3 class="text-lg font-semibold text-green-700 mb-2">Пример:</h3>
        <p>Монета: X = 1 (орёл), 0 (решка)</p>
        <pre class="font-mono bg-white p-3 rounded border mt-2">
  P(1) = 0.5, P(0) = 0.5  
  E[X] = 1·0.5 + 0·0.5 = 0.5  
  D[X] = E[X²] − (E[X])² = 0.25
        </pre>
      </section>
  
      <!-- Калькулятор -->
      <Calculator title="Посчитай матожидание или дисперсию" class="mt-10" />
  
      <!-- Применение -->
      <section class="mt-12">
        <h2 class="text-2xl font-semibold text-indigo-700 mb-2">Где это используется?</h2>
        <ul class="list-disc list-inside space-y-1">
          <li>Анализ рисков (банки, страхование)</li>
          <li>Игра и теория решений</li>
          <li>Машинное обучение (распределения ошибок, потери)</li>
          <li>Физика, биология, экономика</li>
        </ul>
      </section>
  
      <!-- Вывод -->
      <section class="mt-12">
        <h2 class="text-2xl font-semibold text-indigo-700 mb-2">Вывод</h2>
        <p>
          Случайные величины и их распределения позволяют численно описывать случайные процессы. 
          Это основа вероятностного анализа и моделирования в любой науке и технике.
        </p>
      </section>
  
      <!-- Навигация -->
      <section class="mt-16 flex justify-between items-center">
        <NuxtLink
          to="/lessons/probability/1-lesson"
          class="text-indigo-600 hover:underline font-medium flex items-center gap-2"
        >
          ← Основы теории вероятностей
        </NuxtLink>
  
        <NuxtLink
          to="/lessons/probability/3-lesson"
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
  