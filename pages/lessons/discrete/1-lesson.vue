<template>
    <BaseLesson title="Логика и высказывания">
  
      <!-- Введение -->
      <section>
        <h2 class="text-2xl font-semibold text-indigo-700 mb-4">Что такое логика?</h2>
        <p class="mb-4">
          <strong>Логика</strong> — это раздел математики, изучающий формальные законы рассуждений и операций с высказываниями.
          Она лежит в основе программирования, математики, электроники и философии.
        </p>
      </section>
  
      <!-- Высказывания -->
      <section class="mt-8">
        <h2 class="text-2xl font-semibold text-indigo-700 mb-2">Что такое высказывание?</h2>
        <p class="mb-4">
          <strong>Высказывание</strong> — это предложение, которое может быть либо <strong>истинным</strong> (true), либо <strong>ложным</strong> (false).
          Примеры:
        </p>
        <ul class="list-disc list-inside space-y-1">
          <li>«2 + 2 = 4» — истинное</li>
          <li>«Все кошки умеют летать» — ложное</li>
        </ul>
      </section>
  
      <!-- Основные логические операции -->
      <section class="mt-10">
        <h2 class="text-2xl font-semibold text-indigo-700 mb-2">Логические операции</h2>
        <ul class="list-disc list-inside space-y-1">
          <li><strong>НЕ (¬A)</strong> — отрицание</li>
          <li><strong>И (A ∧ B)</strong> — конъюнкция</li>
          <li><strong>ИЛИ (A ∨ B)</strong> — дизъюнкция</li>
          <li><strong>Импликация (A → B)</strong> — если A, то B</li>
          <li><strong>Эквиваленция (A ↔ B)</strong> — A тогда и только тогда, когда B</li>
        </ul>
      </section>
  
      <!-- Таблица истинности -->
      <section class="bg-gray-50 border-l-4 border-indigo-400 p-4 rounded-md shadow-sm mt-10">
        <h3 class="text-lg font-semibold text-indigo-800 mb-2">Пример: таблица истинности для A ∧ B</h3>
        <table class="table-auto text-sm font-mono w-full border-collapse">
          <thead>
            <tr>
              <th class="border p-2">A</th>
              <th class="border p-2">B</th>
              <th class="border p-2">A ∧ B</th>
            </tr>
          </thead>
          <tbody>
            <tr><td class="border p-2 text-center">0</td><td class="border p-2 text-center">0</td><td class="border p-2 text-center">0</td></tr>
            <tr><td class="border p-2 text-center">0</td><td class="border p-2 text-center">1</td><td class="border p-2 text-center">0</td></tr>
            <tr><td class="border p-2 text-center">1</td><td class="border p-2 text-center">0</td><td class="border p-2 text-center">0</td></tr>
            <tr><td class="border p-2 text-center">1</td><td class="border p-2 text-center">1</td><td class="border p-2 text-center">1</td></tr>
          </tbody>
        </table>
      </section>
  
      <!-- Применение -->
      <section class="mt-12">
        <h2 class="text-2xl font-semibold text-indigo-700 mb-2">Где применяется логика?</h2>
        <ul class="list-disc list-inside space-y-1">
          <li>Программирование: условные конструкции if, while, switch</li>
          <li>Электроника: схемы из логических элементов (AND, OR, NOT)</li>
          <li>Математика: доказательства, формальные рассуждения</li>
          <li>Философия: формальная логика и структура аргументов</li>
        </ul>
      </section>
  
      <!-- Калькулятор -->
      <Calculator title="Проверь логическое выражение" class="mt-10" />
  
      <!-- Вывод -->
      <section class="mt-12">
        <h2 class="text-2xl font-semibold text-indigo-700 mb-2">Вывод</h2>
        <p>
          Логика — это основа точного мышления. Понимание логических операций критически важно 
          для программистов, математиков и всех, кто хочет чётко и последовательно мыслить.
        </p>
      </section>
  
      <!-- Навигация -->
      <section class="mt-16 flex justify-between items-center">
        <NuxtLink
          to="/lessons/analysis/4-lesson"
          class="text-indigo-600 hover:underline font-medium flex items-center gap-2"
        >
          ← Ряды и пределы последовательностей
        </NuxtLink>
  
        <NuxtLink
          to="/lessons/discrete/2-lesson"
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
  