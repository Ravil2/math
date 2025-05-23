<template>
    <BaseLesson title="Комбинаторика и перестановки">
  
      <!-- Введение -->
      <section>
        <h2 class="text-2xl font-semibold text-indigo-700 mb-4">Что такое комбинаторика?</h2>
        <p class="mb-4">
          <strong>Комбинаторика</strong> — это раздел математики, который изучает способы выбора и расположения объектов.
          Задачи: "Сколько существует вариантов...?", "Сколькими способами можно...?"
        </p>
        <p>Комбинаторика лежит в основе подсчёта, вероятности и анализа сложностей алгоритмов.</p>
      </section>
  
      <!-- Базовые принципы -->
      <section class="mt-10">
        <h2 class="text-2xl font-semibold text-indigo-700 mb-2">Основные принципы</h2>
        <ul class="list-disc list-inside space-y-2">
          <li><strong>Правило умножения:</strong> если первое действие — n вариантов, второе — m, всего n×m</li>
          <li><strong>Правило сложения:</strong> если или n или m, то n + m</li>
        </ul>
      </section>
  
      <!-- Перестановки -->
      <section class="mt-10">
        <h2 class="text-2xl font-semibold text-indigo-700 mb-2">Перестановки</h2>
        <p>Сколькими способами можно упорядочить n разных объектов?</p>
        <pre class="bg-white border rounded p-3 font-mono text-sm shadow-sm mt-2">P(n) = n!</pre>
        <p class="mt-2">Пример: 3 элемента → 3! = 6 перестановок</p>
      </section>
  
      <!-- Размещения -->
      <section class="mt-10">
        <h2 class="text-2xl font-semibold text-indigo-700 mb-2">Размещения</h2>
        <p>Сколькими способами можно выбрать и упорядочить k элементов из n?</p>
        <pre class="bg-white border rounded p-3 font-mono text-sm shadow-sm mt-2">
  A(n, k) = n! / (n − k)!
        </pre>
        <p class="mt-2">Пример: из 5 по 2: A(5, 2) = 5×4 = 20</p>
      </section>
  
      <!-- Сочетания -->
      <section class="mt-10">
        <h2 class="text-2xl font-semibold text-indigo-700 mb-2">Сочетания</h2>
        <p>Сколькими способами можно выбрать k объектов из n без учёта порядка?</p>
        <pre class="bg-white border rounded p-3 font-mono text-sm shadow-sm mt-2">
  C(n, k) = n! / (k! × (n − k)!)
        </pre>
        <p class="mt-2">Пример: C(5, 2) = 10</p>
      </section>
  
      <!-- Применения -->
      <section class="mt-10">
        <h2 class="text-2xl font-semibold text-indigo-700 mb-2">Где используется комбинаторика?</h2>
        <ul class="list-disc list-inside space-y-1">
          <li>Генерация паролей и кодов</li>
          <li>Решение олимпиадных задач</li>
          <li>Игровые вероятности (карты, кости, лотереи)</li>
          <li>Анализ алгоритмов (подмножества, переборы)</li>
          <li>Шифрование и защита данных</li>
        </ul>
      </section>
  
      <!-- Калькулятор -->
      <Calculator title="Рассчитай количество вариантов" class="mt-10" />
  
      <!-- Заключение -->
      <section class="mt-12">
        <h2 class="text-2xl font-semibold text-indigo-700 mb-2">Вывод</h2>
        <p>
          Комбинаторика — это математика выбора. Она помогает решать задачи перебора, генерации, вероятности и оптимизации.
          Один раз понял — и можешь решать десятки типов задач.
        </p>
      </section>
  
      <!-- Навигация -->
      <section class="mt-16 flex justify-between items-center">
        <NuxtLink
          to="/lessons/discrete/3-lesson"
          class="text-indigo-600 hover:underline font-medium flex items-center gap-2"
        >
          ← Графы
        </NuxtLink>
      </section>
  
    </BaseLesson>
  </template>
  
  <script setup>
  import BaseLesson from '~/components/base-lesson/BaseLesson.vue'

  </script>
  