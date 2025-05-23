<template>
    <BaseLesson title="Основы математической статистики">
  
      <!-- Введение -->
      <section>
        <h2 class="text-2xl font-semibold text-indigo-700 mb-4">Что такое математическая статистика?</h2>
        <p class="mb-4">
          <strong>Математическая статистика</strong> — это раздел математики, который изучает, как делать выводы о генеральной совокупности
          по данным из выборки. То есть она помогает понять общее по ограниченной информации.
        </p>
      </section>
  
      <!-- Выборка и совокупность -->
      <section class="mt-10">
        <h2 class="text-2xl font-semibold text-indigo-700 mb-2">Выборка и генеральная совокупность</h2>
        <ul class="list-disc list-inside space-y-2">
          <li><strong>Генеральная совокупность</strong> — всё множество данных (например, все жители страны)</li>
          <li><strong>Выборка</strong> — подмножество, по которому мы делаем выводы</li>
        </ul>
      </section>
  
      <!-- Основные характеристики выборки -->
      <section class="mt-10">
        <h2 class="text-2xl font-semibold text-indigo-700 mb-2">Основные характеристики</h2>
        <ul class="list-disc list-inside space-y-1">
          <li><strong>Среднее (выборочное):</strong> <code>𝑥̄ = (x₁ + x₂ + ... + xₙ) / n</code></li>
          <li><strong>Медиана</strong> — значение в середине упорядоченного ряда</li>
          <li><strong>Мода</strong> — наиболее частое значение</li>
          <li><strong>Выборочная дисперсия:</strong> <code>S² = ∑(xᵢ − 𝑥̄)² / (n−1)</code></li>
          <li><strong>Стандартное отклонение:</strong> <code>S = √S²</code></li>
        </ul>
      </section>
  
      <!-- Пример -->
      <section class="bg-gray-50 border-l-4 border-indigo-400 p-4 rounded-md shadow-sm mt-8">
        <h3 class="text-lg font-semibold text-indigo-800 mb-2">Пример:</h3>
        <p>Даны значения: 2, 4, 6, 8, 10</p>
        <pre class="bg-white p-3 rounded font-mono text-sm border mt-2">
  Среднее: (2+4+6+8+10)/5 = 6  
  Медиана = 6 (середина)  
  Мода = отсутствует  
  Выборочная дисперсия S² = 10  
  Отклонение = √10 ≈ 3.16
        </pre>
      </section>
  
      <!-- Оценки параметров -->
      <section class="mt-12">
        <h2 class="text-2xl font-semibold text-indigo-700 mb-2">Что такое оценка?</h2>
        <p>
          Мы не знаем параметры всей совокупности (например, реальное среднее по всем людям), 
          поэтому вычисляем <strong>оценки</strong> по выборке. Это приближения реальных параметров:
        </p>
        <ul class="list-disc list-inside mt-2 space-y-1">
          <li><strong>Точечные оценки</strong> — просто число (например, среднее)</li>
          <li><strong>Интервальные оценки</strong> — диапазон, где с высокой вероятностью лежит параметр</li>
        </ul>
      </section>
  
      <!-- Закон больших чисел -->
      <section class="mt-10">
        <h2 class="text-2xl font-semibold text-indigo-700 mb-2">Закон больших чисел</h2>
        <p>
          Чем больше объём выборки, тем ближе её характеристики к параметрам всей совокупности.
          Это главный принцип статистики: <strong>много данных → точнее вывод</strong>.
        </p>
      </section>
  
      <!-- Калькулятор -->
      <Calculator title="Рассчитай среднее, медиану, отклонение" class="mt-10" />
  
      <!-- Где применяется -->
      <section class="mt-12">
        <h2 class="text-2xl font-semibold text-indigo-700 mb-2">Где используется статистика?</h2>
        <ul class="list-disc list-inside space-y-1">
          <li>Анализ данных и отчёты</li>
          <li>Маркетинг и исследования</li>
          <li>Медицина, социология, экономика</li>
          <li>AI и машинное обучение</li>
        </ul>
      </section>
  
      <!-- Вывод -->
      <section class="mt-12">
        <h2 class="text-2xl font-semibold text-indigo-700 mb-2">Вывод</h2>
        <p>
          Математическая статистика помогает делать выводы на основе ограниченной информации. 
          Это мощный инструмент принятия решений в условиях неопределённости.
        </p>
      </section>
  
      <!-- Навигация -->
      <section class="mt-16 flex justify-between items-center">
        <NuxtLink
          to="/lessons/probability/3-lesson"
          class="text-indigo-600 hover:underline font-medium flex items-center gap-2"
        >
          ← Математическое ожидание и дисперсия
        </NuxtLink>
  
        <NuxtLink
          to="/lessons/discrete/1-lesson"
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
  