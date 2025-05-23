<template>
    <BaseLesson title="Теория множеств">
  
      <!-- Введение -->
      <section>
        <h2 class="text-2xl font-semibold text-indigo-700 mb-4">Что такое множество?</h2>
        <p class="mb-4">
          <strong>Множество</strong> — это совокупность объектов (элементов), объединённых по какому-либо признаку. 
          Обозначается фигурными скобками:
        </p>
        <pre class="bg-white border rounded p-3 font-mono text-sm mt-2 shadow-sm">
  A = {1, 2, 3}
        </pre>
        <p class="mt-2">
          Объекты внутри множества называются <strong>элементами</strong>. Один и тот же элемент не может повторяться.
        </p>
      </section>
  
      <!-- Принадлежность -->
      <section class="mt-10">
        <h2 class="text-2xl font-semibold text-indigo-700 mb-2">Принадлежность</h2>
        <p class="mb-2">Обозначения:</p>
        <ul class="list-disc list-inside space-y-1">
          <li><code>3 ∈ A</code> — 3 принадлежит множеству A</li>
          <li><code>5 ∉ A</code> — 5 не принадлежит A</li>
        </ul>
      </section>
  
      <!-- Основные операции -->
      <section class="mt-10">
        <h2 class="text-2xl font-semibold text-indigo-700 mb-2">Операции над множествами</h2>
        <ul class="list-disc list-inside space-y-2">
          <li><strong>Объединение (A ∪ B)</strong> — все элементы из A и B</li>
          <li><strong>Пересечение (A ∩ B)</strong> — только общие элементы</li>
          <li><strong>Разность (A \ B)</strong> — элементы A, которых нет в B</li>
          <li><strong>Дополнение</strong> — всё, что вне множества</li>
          <li><strong>Подмножество (A ⊆ B)</strong> — все элементы A содержатся в B</li>
        </ul>
      </section>
  
      <!-- Пример -->
      <section class="bg-gray-50 border-l-4 border-green-400 p-4 rounded-md shadow-sm mt-10">
        <h3 class="text-lg font-semibold text-green-700 mb-2">Пример:</h3>
        <pre class="font-mono text-sm bg-white p-3 rounded border">
  A = {1, 2, 3, 4}  
  B = {3, 4, 5, 6}
  
  A ∪ B = {1, 2, 3, 4, 5, 6}  
  A ∩ B = {3, 4}  
  A \ B = {1, 2}
        </pre>
      </section>
  
      <!-- Диаграммы -->
      <section class="mt-12">
        <h2 class="text-2xl font-semibold text-indigo-700 mb-2">Диаграммы Венна</h2>
        <p class="mb-4">
          Визуально множества удобно изображать с помощью кругов. Пересечения — это перекрытия, объединения — вся площадь.
        </p>
        <img src="/images/venn-example.png" alt="Диаграмма Венна" class="w-full max-w-md mx-auto rounded shadow" />
      </section>
  
      <!-- Калькулятор -->
      <Calculator title="Проверь операции над множествами" class="mt-12" />
  
      <!-- Применение -->
      <section class="mt-12">
        <h2 class="text-2xl font-semibold text-indigo-700 mb-2">Где используется теория множеств?</h2>
        <ul class="list-disc list-inside space-y-1">
          <li>Базы данных (SQL: JOIN, INTERSECT, EXCEPT)</li>
          <li>Алгоритмы поиска и фильтрации</li>
          <li>Анализ данных и статистика</li>
          <li>Машинное обучение (классификация, кластеры)</li>
          <li>Построение логических выражений</li>
        </ul>
      </section>
  
      <!-- Вывод -->
      <section class="mt-12">
        <h2 class="text-2xl font-semibold text-indigo-700 mb-2">Вывод</h2>
        <p>
          Теория множеств — фундамент всего, что связано с данными и логикой. Она используется повсюду — 
          от математики до веб-разработки и баз данных.
        </p>
      </section>
  
      <!-- Навигация -->
      <section class="mt-16 flex justify-between items-center">
        <NuxtLink
          to="/lessons/discrete/1-lesson"
          class="text-indigo-600 hover:underline font-medium flex items-center gap-2"
        >
          ← Логика и высказывания
        </NuxtLink>
  
        <NuxtLink
          to="/lessons/discrete/3-lesson"
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
  