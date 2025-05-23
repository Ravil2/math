<template>
    <BaseLesson title="Метод Гаусса">
  
      <!-- Введение -->
      <section>
        <h2 class="text-2xl font-semibold text-indigo-700 mb-4">Что такое метод Гаусса?</h2>
        <p class="mb-4">
          <strong>Метод Гаусса</strong> — это способ решения систем линейных уравнений путём приведения 
          матрицы системы к <strong>треугольному виду</strong>, а затем нахождения значений переменных методом обратного хода.
        </p>
        <p>
          Метод основан на <strong>элементарных преобразованиях строк</strong>, которые не меняют решение системы:
        </p>
        <ul class="list-disc list-inside mt-2 space-y-1">
          <li>Перестановка строк</li>
          <li>Умножение строки на число (≠ 0)</li>
          <li>Прибавление одной строки к другой</li>
        </ul>
      </section>
  
      <!-- Пример -->
      <section class="mt-10 bg-gray-50 border-l-4 border-indigo-400 p-4 rounded-md shadow-sm">
        <h3 class="text-lg font-semibold mb-2 text-indigo-800">Пример:</h3>
        <p class="mb-2 font-mono">
          ⎧ x + y + z = 6<br />
          ⎨ 2x + 3y + z = 14<br />
          ⎩ −x + y + 2z = 2
        </p>
        <p class="mt-4">1️⃣ Приводим к матрице коэффициентов:</p>
        <pre class="bg-white p-4 rounded-md text-sm font-mono border mt-2">
  [  1   1   1 |  6 ]
  [  2   3   1 | 14 ]
  [ -1   1   2 |  2 ]
        </pre>
        <p class="mt-4">2️⃣ Прямой ход: обнуляем элементы под главной диагональю</p>
        <p class="mt-2">3️⃣ Обратный ход: подставляем известные значения снизу вверх</p>
        <p class="mt-4">🔚 В результате получим: <strong>x = 3, y = 1, z = 2</strong></p>
      </section>
  
      <!-- Калькулятор -->
      <Calculator title="Попробуй решить свою систему методом Гаусса" class="mt-10" />
  
      <!-- Преимущества -->
      <section class="mt-12">
        <h2 class="text-2xl font-semibold text-indigo-700 mb-2">Почему метод Гаусса удобен?</h2>
        <ul class="list-disc list-inside space-y-1">
          <li>Можно использовать в программировании (алгоритмически просто)</li>
          <li>Работает для любой системы с числовыми коэффициентами</li>
          <li>Позволяет быстро понять, существует ли решение</li>
        </ul>
      </section>
  
      <!-- Практика -->
      <section class="mt-12">
        <h2 class="text-2xl font-semibold text-indigo-700 mb-2">Где применяется метод Гаусса</h2>
        <ul class="list-disc list-inside space-y-1">
          <li>Решение систем уравнений в физике, экономике, инженерии</li>
          <li>При написании нейросетей (решение Ax = b при градиентном спуске)</li>
          <li>В численном анализе и методах машинного обучения</li>
        </ul>
      </section>
  
    </BaseLesson>
  </template>
  
  <script setup>
  import BaseLesson from '~/components/base-lesson/BaseLesson.vue'
import Calculator from '~/components/calculator.vue';

  </script>
  