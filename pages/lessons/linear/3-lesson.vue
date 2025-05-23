<template>
    <BaseLesson title="Собственные значения и собственные векторы">
  
      <!-- Введение -->
      <section>
        <h2 class="text-2xl font-semibold text-indigo-700 mb-4">Что это вообще такое?</h2>
        <p class="mb-4">
          <strong>Собственные векторы и собственные значения</strong> — это ключевые понятия линейной алгебры,
          которые лежат в основе многих математических и прикладных задач: от сжатия изображений до машинного обучения.
        </p>
        <p>
          Пусть у нас есть квадратная матрица A. Тогда собственный вектор — это такой вектор <strong>v</strong>, 
          который при умножении на матрицу не меняет своего направления:
        </p>
        <div class="bg-white border p-4 mt-4 mb-4 rounded-md text-sm font-mono shadow-sm">
          A * v = λ * v
        </div>
        <p>
          Где:
        </p>
        <ul class="list-disc list-inside mb-4 mt-2 space-y-1">
          <li><strong>v</strong> — собственный вектор</li>
          <li><strong>λ</strong> (лямбда) — собственное значение</li>
        </ul>
      </section>
  
      <!-- Объяснение простыми словами -->
      <section class="mt-10">
        <h2 class="text-2xl font-semibold text-indigo-700 mb-2">Простой пример</h2>
        <p class="mb-2">
          Если матрица — это оператор поворота или масштабирования, то собственный вектор — это такой вектор, 
          который после действия матрицы просто «вытягивается» или «сжимается», но не поворачивается.
        </p>
  
        <p class="mt-4">Пример:</p>
        <pre class="bg-gray-50 p-4 font-mono text-sm rounded-md border">
  A = [ 2  0 ]
      [ 0  3 ]
  
  v₁ = [1, 0] → Av₁ = [2, 0] ⇒ λ = 2
  v₂ = [0, 1] → Av₂ = [0, 3] ⇒ λ = 3
        </pre>
        <p class="mt-2">
          Здесь [1, 0] и [0, 1] — собственные векторы. Матрица просто растягивает их.
        </p>
      </section>
  
      <!-- Как найти -->
      <section class="mt-10">
        <h2 class="text-2xl font-semibold text-indigo-700 mb-2">Как найти собственные значения?</h2>
        <p class="mb-2">
          Нужно решить уравнение:
        </p>
        <pre class="bg-white p-4 rounded-md border font-mono text-sm shadow-sm">
  det(A − λI) = 0
        </pre>
        <p class="mt-2">
          Это называется <strong>характеристическим уравнением</strong>. Его корни — это собственные значения.
        </p>
        <p class="mt-4">
          После нахождения λ, подставляем его в (A − λI)v = 0 и находим собственные векторы.
        </p>
      </section>
  
      <!-- Практика -->
      <Calculator title="Попробуйте найти λ" class="mt-10" />
  
      <!-- Где используется -->
      <section class="mt-12">
        <h2 class="text-2xl font-semibold text-indigo-700 mb-2">Применения</h2>
        <ul class="list-disc list-inside space-y-1">
          <li><strong>Сжатие изображений</strong> (например, PCA)</li>
          <li><strong>Распознавание лиц</strong> — алгоритмы Eigenfaces</li>
          <li><strong>Диагонализация матриц</strong> — упрощение вычислений</li>
          <li><strong>Физика</strong> — анализ устойчивости и колебаний</li>
          <li><strong>Машинное обучение</strong> — свёртка, анализ признаков</li>
        </ul>
      </section>
  
      <!-- Заключение -->
      <section class="mt-12">
        <h2 class="text-2xl font-semibold text-indigo-700 mb-2">Итог</h2>
        <p>
          Собственные значения и векторы — это как «отпечатки пальцев» матрицы. Они показывают, 
          как матрица действует на пространство и какие направления при этом остаются неизменными.
          Это фундамент для многих мощных алгоритмов и теорий.
        </p>
      </section>
  
    </BaseLesson>
  </template>
  
  <script setup>
  import BaseLesson from '~/components/base-lesson/BaseLesson.vue'
  </script>
  