<template>
    <BaseLesson title="Графы">
  
      <!-- Введение -->
      <section>
        <h2 class="text-2xl font-semibold text-indigo-700 mb-4">Что такое граф?</h2>
        <p class="mb-4">
          <strong>Граф</strong> — это набор объектов, называемых <strong>вершинами</strong> (или узлами), 
          и соединяющих их <strong>рёбер</strong> (или дуг).
        </p>
        <p>Граф обычно обозначается так:</p>
        <pre class="bg-white border p-3 font-mono text-sm rounded shadow-sm">
  G = (V, E)
  V — множество вершин
  E — множество рёбер (пары вершин)
        </pre>
      </section>
  
      <!-- Пример -->
      <section class="bg-gray-50 border-l-4 border-indigo-400 p-4 rounded-md shadow-sm mt-8">
        <h3 class="text-lg font-semibold text-indigo-800 mb-2">Пример:</h3>
        <p class="mb-2">Пусть V = {A, B, C}, E = {(A, B), (B, C)}</p>
        <p>Это граф с 3 вершинами и 2 рёбрами.</p>
      </section>
  
      <!-- Виды графов -->
      <section class="mt-12">
        <h2 class="text-2xl font-semibold text-indigo-700 mb-2">Типы графов</h2>
        <ul class="list-disc list-inside space-y-1">
          <li><strong>Ориентированный граф</strong> — рёбра имеют направление (дуги)</li>
          <li><strong>Неориентированный граф</strong> — рёбра без направления</li>
          <li><strong>Взвешенный граф</strong> — рёбра имеют вес (стоимость)</li>
          <li><strong>Циклический граф</strong> — содержит циклы</li>
          <li><strong>Дерево</strong> — связный граф без циклов</li>
        </ul>
      </section>
  
      <!-- Представление графов -->
      <section class="mt-12">
        <h2 class="text-2xl font-semibold text-indigo-700 mb-2">Как представляют графы?</h2>
        <ul class="list-disc list-inside space-y-1">
          <li><strong>Списки смежности</strong> — удобны для хранения</li>
          <li><strong>Матрица смежности</strong> — таблица N×N с 0 и 1</li>
          <li><strong>Списки рёбер</strong> — просто пары (u, v)</li>
        </ul>
      </section>
  
      <!-- Практика -->
      <Calculator title="Попробуйте рассчитать графовую задачу (например, количество рёбер)" class="mt-10" />
  
      <!-- Где применяются графы -->
      <section class="mt-12">
        <h2 class="text-2xl font-semibold text-indigo-700 mb-2">Где применяются графы?</h2>
        <ul class="list-disc list-inside space-y-1">
          <li>Поиск пути в картах (Google Maps, GPS)</li>
          <li>Социальные сети (граф друзей, подписки)</li>
          <li>Алгоритмы (поиск в глубину/ширину, Дейкстра, A*)</li>
          <li>Программы и зависимые модули (граф зависимостей)</li>
          <li>Базы данных (GraphQL, Neo4j)</li>
        </ul>
      </section>
  
      <!-- Заключение -->
      <section class="mt-12">
        <h2 class="text-2xl font-semibold text-indigo-700 mb-2">Вывод</h2>
        <p>
          Графы — это универсальный язык для моделирования связей и маршрутов. Их используют в алгоритмах, 
          анализе данных, социальных сетях и даже биологии. Знание графов — ключ к множеству задач в CS.
        </p>
      </section>
  
      <!-- Навигация -->
      <section class="mt-16 flex justify-between items-center">
        <NuxtLink
          to="/lessons/discrete/2-lesson"
          class="text-indigo-600 hover:underline font-medium flex items-center gap-2"
        >
          ← Теория множеств
        </NuxtLink>
  
        <NuxtLink
          to="/lessons/discrete/4-lesson"
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
  