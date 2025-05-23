<template>
    <BaseLesson title="Математическое ожидание и дисперсия">
  
      <!-- Введение -->
      <section>
        <h2 class="text-2xl font-semibold text-indigo-700 mb-4">Что такое математическое ожидание?</h2>
        <p class="mb-4">
          <strong>Математическое ожидание (МО)</strong> — это среднее значение, которое примет случайная величина при большом числе испытаний.
          Обозначается: <code>E[X]</code> или <code>𝔼(X)</code>.
        </p>
        <p class="mt-2">Это как средний результат эксперимента, если повторять его бесконечно долго.</p>
      </section>
  
      <!-- Формула МО -->
      <section class="mt-10">
        <h2 class="text-2xl font-semibold text-indigo-700 mb-2">Формула для дискретной случайной величины</h2>
        <pre class="bg-white border rounded p-3 font-mono text-sm shadow-sm">
  E[X] = ∑ (xᵢ · P(xᵢ))
        </pre>
        <p class="mt-2">Где xᵢ — значение случайной величины, P(xᵢ) — вероятность этого значения.</p>
      </section>
  
      <!-- Пример МО -->
      <section class="bg-gray-50 border-l-4 border-green-400 p-4 rounded-md shadow-sm mt-8">
        <h3 class="text-lg font-semibold text-green-700 mb-2">Пример:</h3>
        <p class="mb-2">Игральный кубик. Возможные значения: 1–6, все с вероятностью 1/6.</p>
        <pre class="bg-white p-3 rounded font-mono text-sm border">
  E[X] = (1+2+3+4+5+6) / 6 = 3.5
        </pre>
      </section>
  
      <!-- Дисперсия -->
      <section class="mt-12">
        <h2 class="text-2xl font-semibold text-indigo-700 mb-2">Что такое дисперсия?</h2>
        <p class="mb-4">
          <strong>Дисперсия</strong> показывает, насколько сильно значения случайной величины отклоняются от математического ожидания.
          Обозначается: <code>D[X]</code> или <code>Var(X)</code>.
        </p>
      </section>
  
      <!-- Формула дисперсии -->
      <section class="mt-6">
        <h3 class="text-lg font-semibold text-indigo-700 mb-2">Формула</h3>
        <pre class="bg-white border rounded p-3 font-mono text-sm shadow-sm">
  D[X] = E[X²] − (E[X])²
        </pre>
        <p class="mt-2">
          Или:
          <br />
          D[X] = ∑ (xᵢ − E[X])² · P(xᵢ)
        </p>
      </section>
  
      <!-- Пример дисперсии -->
      <section class="bg-gray-50 border-l-4 border-yellow-400 p-4 rounded-md shadow-sm mt-8">
        <h3 class="text-lg font-semibold text-yellow-800 mb-2">Пример:</h3>
        <p class="mb-2">Монета: X = 1 (орёл), 0 (решка), P = 0.5 для каждого</p>
        <pre class="bg-white p-3 rounded font-mono text-sm border">
  E[X] = 1·0.5 + 0·0.5 = 0.5  
  E[X²] = 1²·0.5 + 0²·0.5 = 0.5  
  D[X] = 0.5 − (0.5)² = 0.25
        </pre>
      </section>
  
      <!-- Стандартное отклонение -->
      <section class="mt-10">
        <h2 class="text-2xl font-semibold text-indigo-700 mb-2">Стандартное отклонение</h2>
        <p>
          Это корень из дисперсии: <code>σ = √D[X]</code>  
          Оно показывает среднее отклонение от среднего значения.
        </p>
      </section>
  
      <!-- Калькулятор -->
      <Calculator title="Вычислите E[X], D[X] и σ" class="mt-10" />
  
      <!-- Где применяются -->
      <section class="mt-12">
        <h2 class="text-2xl font-semibold text-indigo-700 mb-2">Где это используется?</h2>
        <ul class="list-disc list-inside space-y-1">
          <li>Финансы: риск актива = его дисперсия</li>
          <li>ИИ и машинное обучение: функции потерь, отклонения</li>
          <li>Производство: отклонения в размерах, качестве</li>
          <li>Эксперименты: разброс результатов, погрешности</li>
        </ul>
      </section>
  
      <!-- Вывод -->
      <section class="mt-12">
        <h2 class="text-2xl font-semibold text-indigo-700 mb-2">Вывод</h2>
        <p>
          Математическое ожидание — это "среднее поведение" случайного процесса, 
          а дисперсия показывает, насколько возможны отклонения. Эти два параметра — 
          основа всей вероятностной статистики и анализа.
        </p>
      </section>
  
      <!-- Навигация -->
      <section class="mt-16 flex justify-between items-center">
        <NuxtLink
          to="/lessons/probability/2-lesson"
          class="text-indigo-600 hover:underline font-medium flex items-center gap-2"
        >
          ← Случайные величины и распределения
        </NuxtLink>
  
        <NuxtLink
          to="/lessons/probability/4-lesson"
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
  