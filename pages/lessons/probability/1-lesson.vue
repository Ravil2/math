<template>
    <BaseLesson title="Основы теории вероятностей">
  
      <!-- Введение -->
      <section>
        <h2 class="text-2xl font-semibold text-indigo-700 mb-4">Что такое вероятность?</h2>
        <p class="mb-4">
          <strong>Вероятность</strong> — это числовая мера шанса наступления события. Измеряется от 0 до 1:
        </p>
        <ul class="list-disc list-inside space-y-1">
          <li>0 — событие невозможно</li>
          <li>1 — событие произойдёт обязательно</li>
          <li>0.5 — равновероятный шанс (монета)</li>
        </ul>
      </section>
  
      <!-- Формула классической вероятности -->
      <section class="mt-10">
        <h2 class="text-2xl font-semibold text-indigo-700 mb-2">Классическая формула</h2>
        <p class="mb-2">Если все исходы равновероятны:</p>
        <pre class="bg-white border rounded p-3 font-mono text-sm shadow-sm">
  P(A) = m / n
  
  где:
  m — число благоприятных исходов  
  n — общее число всех возможных исходов
        </pre>
        <p class="mt-2">Пример: вероятность выбросить 3 на кубике = 1 / 6</p>
      </section>
  
      <!-- Простейшие свойства -->
      <section class="mt-10">
        <h2 class="text-2xl font-semibold text-indigo-700 mb-2">Свойства вероятностей</h2>
        <ul class="list-disc list-inside space-y-1">
          <li>P(A) ≥ 0</li>
          <li>P(∅) = 0, P(Ω) = 1</li>
          <li>P(¬A) = 1 − P(A)</li>
          <li>Если A и B несовместны: P(A ∪ B) = P(A) + P(B)</li>
        </ul>
      </section>
  
      <!-- Пример -->
      <section class="bg-gray-50 border-l-4 border-green-400 p-4 rounded-md shadow-sm mt-10">
        <h3 class="text-lg font-semibold text-green-700 mb-2">Пример:</h3>
        <p>В коробке 3 красных и 2 синих шара. Какова вероятность вытянуть красный?</p>
        <pre class="font-mono text-sm bg-white p-3 rounded border mt-2">
  P(красный) = 3 / (3 + 2) = 3 / 5 = 0.6
        </pre>
      </section>
  
      <!-- Калькулятор -->
      <Calculator title="Посчитай вероятность" class="mt-10" />
  
      <!-- Применение вероятности -->
      <section class="mt-12">
        <h2 class="text-2xl font-semibold text-indigo-700 mb-2">Где применяется теория вероятностей?</h2>
        <ul class="list-disc list-inside space-y-1">
          <li>Программирование (рандом, симуляции, машинное обучение)</li>
          <li>Финансы (риск, инвестиции, прогнозы)</li>
          <li>Игровая индустрия (шанс выпадения предметов)</li>
          <li>Статистика и анализ данных</li>
          <li>Медицина, психология, биология (анализ поведения и вероятностей событий)</li>
        </ul>
      </section>
  
      <!-- Вывод -->
      <section class="mt-12">
        <h2 class="text-2xl font-semibold text-indigo-700 mb-2">Вывод</h2>
        <p>
          Теория вероятностей помогает принимать решения в условиях неопределённости. Это фундамент для статистики,
          ИИ и любой науки, где есть случайность.
        </p>
      </section>
  
      <!-- Навигация -->
      <section class="mt-16 flex justify-between items-center">
        <NuxtLink
          to="/lessons/discrete/4-lesson"
          class="text-indigo-600 hover:underline font-medium flex items-center gap-2"
        >
          ← Комбинаторика и перестановки
        </NuxtLink>
  
        <NuxtLink
          to="/lessons/probability/2-lesson"
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
  