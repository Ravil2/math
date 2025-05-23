<template>
    <BaseLesson title="Пределы и непрерывность">
  
      <!-- Введение -->
      <section>
        <h2 class="text-2xl font-semibold text-indigo-700 mb-4">Что такое предел?</h2>
        <p class="mb-4">
          <strong>Предел</strong> функции описывает её поведение около какой-либо точки, даже если сама функция в этой точке не определена.
        </p>
        <p>
          Обозначается так:
        </p>
        <pre class="bg-white border rounded p-3 font-mono text-sm mt-2 shadow-sm">
  lim f(x) = L, при x → a
        </pre>
        <p class="mt-2">
          Это означает, что значения f(x) стремятся к числу L, когда x приближается к a.
        </p>
      </section>
  
      <!-- Пример -->
      <section class="bg-gray-50 border-l-4 border-indigo-400 p-4 rounded-md shadow-sm mt-8">
        <h3 class="text-lg font-semibold text-indigo-800 mb-2">Пример:</h3>
        <p>Функция:</p>
        <pre class="font-mono text-sm">
  f(x) = (x² − 1)/(x − 1)
        </pre>
        <p class="mt-2">
          В точке x = 1 — неопределённость (0/0), но предел существует:
        </p>
        <pre class="font-mono text-sm bg-white border p-3 rounded mt-2">
  lim f(x) = 2 при x → 1
        </pre>
      </section>
  
      <!-- Непрерывность -->
      <section class="mt-12">
        <h2 class="text-2xl font-semibold text-indigo-700 mb-2">Что такое непрерывность?</h2>
        <p class="mb-4">
          Функция <strong>непрерывна</strong> в точке x = a, если:
        </p>
        <ul class="list-disc list-inside mb-4 space-y-1">
          <li>Существует предел при x → a</li>
          <li>f(a) определена</li>
          <li>lim f(x) = f(a)</li>
        </ul>
        <p>
          Если хотя бы одно из условий не выполняется — функция <strong>разрывна</strong> в этой точке.
        </p>
      </section>
  
      <!-- Типы разрывов -->
      <section class="mt-10">
        <h2 class="text-2xl font-semibold text-indigo-700 mb-2">Типы разрывов</h2>
        <ul class="list-disc list-inside space-y-1">
          <li><strong>Устранимый</strong> — можно "дополнить" точку, чтобы сделать функцию непрерывной</li>
          <li><strong>Скачкообразный</strong> — слева и справа разные пределы</li>
          <li><strong>Бесконечный</strong> — функция уходит в бесконечность</li>
        </ul>
      </section>
  
      <!-- Калькулятор -->
      <Calculator title="Попробуйте найти предел" class="mt-10" />
  
      <!-- Применения -->
      <section class="mt-12">
        <h2 class="text-2xl font-semibold text-indigo-700 mb-2">Зачем нужен предел?</h2>
        <ul class="list-disc list-inside space-y-1">
          <li>Основы для производных и интегралов</li>
          <li>Формальное определение непрерывности</li>
          <li>Решение сложных предельных выражений в физике</li>
          <li>Моделирование реального поведения функций (ускорения, скорости, колебания)</li>
        </ul>
      </section>
  
      <!-- Итог -->
      <section class="mt-12">
        <h2 class="text-2xl font-semibold text-indigo-700 mb-2">Вывод</h2>
        <p>
          Предел — это фундамент понятия «плавного» изменения. С этого начинается математический анализ, 
          производные и непрерывные модели реального мира.
        </p>
      </section>
  
    </BaseLesson>
  </template>
  
  <script setup>
  import BaseLesson from '~/components/base-lesson/BaseLesson.vue'

  </script>
  