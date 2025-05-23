<template>
    <BaseLesson title="Матрицы и определители">
      
      <!-- Что такое матрица -->
      <section>
        <h2 class="text-2xl font-semibold text-indigo-700 mb-4">Что такое матрица?</h2>
  
        <p class="mb-4">
          <strong>Матрица</strong> — это упорядоченная таблица чисел (или других математических объектов), 
          расположенных в виде прямоугольной схемы из строк и столбцов. Эти элементы называются <em>элементами матрицы</em>.
        </p>
  
        <p class="mb-4">
          Каждый элемент обозначается как <code class="text-purple-600 font-mono">a<sub>ij</sub></code>, где <strong>i</strong> — номер строки, 
          а <strong>j</strong> — номер столбца. Например, <code class="font-mono">a<sub>23</sub></code> — это элемент во второй строке и третьем столбце.
        </p>
  
        <p class="mb-4">
          Размер матрицы записывается как <strong>m × n</strong>, где m — количество строк, а n — столбцов. 
          Например, матрица <strong>3×2</strong> содержит 3 строки и 2 столбца.
        </p>
  
        <h3 class="text-lg font-semibold text-indigo-700 mt-6 mb-2">История</h3>
        <p class="mb-4">
          Матрицы стали активно использоваться в XIX веке в работах Карла Гаусса и Артура Кэли. 
          Сегодня они являются неотъемлемой частью линейной алгебры, численного анализа и вычислительной математики.
        </p>
  
        <h3 class="text-lg font-semibold text-indigo-700 mt-6 mb-2">Где применяются матрицы</h3>
        <ul class="list-disc list-inside mb-4 space-y-1">
          <li><strong>Компьютерная графика:</strong> масштабирование, повороты, проекции</li>
          <li><strong>Машинное обучение:</strong> представление входных данных и весов</li>
          <li><strong>Физика и механика:</strong> системы уравнений и координатные преобразования</li>
          <li><strong>Статистика:</strong> ковариационные и корреляционные матрицы</li>
          <li><strong>Криптография:</strong> шифрование и декодирование</li>
          <li><strong>Экономика:</strong> модель Леонтьева, учет потоков ресурсов</li>
        </ul>
  
        <h3 class="text-lg font-semibold text-indigo-700 mt-6 mb-2">Жизненные примеры</h3>
        <ul class="list-disc list-inside mb-4 space-y-1">
          <li>Цифровое изображение — это матрица пикселей</li>
          <li>Инстаграм-фильтры используют матричные преобразования</li>
          <li>Навигация GPS работает с матрицами координат</li>
          <li>Netflix и YouTube используют матрицы предпочтений для рекомендаций</li>
        </ul>
  
        <h3 class="text-lg font-semibold text-indigo-700 mt-6 mb-2">Зачем тебе матрицы?</h3>
        <p>
          Если ты хочешь идти в <strong>AI, Data Science, разработку игр, 3D или финтех</strong> — матрицы тебе нужны.
          Это фундамент, без которого ты не сможешь уверенно двигаться в высокоуровневую математику и технологии.
        </p>
      </section>
  
      <!-- Обозначение -->
      <section class="mt-12">
        <h2 class="text-2xl font-semibold text-indigo-700 mb-2">Обозначение</h2>
        <p>
          Элемент, стоящий в i-й строке и j-м столбце, обозначается как 
          <code class="text-purple-600 font-mono">a<sub>ij</sub></code>. Матрицы часто обозначаются заглавной буквой: 
          <strong>A</strong>, <strong>B</strong> и т.д.
        </p>
      </section>
  
      <!-- Пример матрицы -->
      <section class="bg-gray-50 border-l-4 border-indigo-300 p-4 rounded-md shadow-sm mt-8">
        <h3 class="text-lg font-semibold mb-2 text-indigo-800">Пример матрицы 2×3:</h3>
        <div class="font-mono text-lg">
          A = ⎡ 1 2 3 ⎤<br />
           ⎣ 4 5 6 ⎦
        </div>
      </section>
  
      <!-- Калькулятор -->
      <Calculator title="Попробуйте решить пример" class="mt-10" />
  
      <!-- Типы матриц -->
      <section class="mt-12">
        <h2 class="text-2xl font-semibold text-indigo-700 mb-2">Типы матриц</h2>
        <ul class="list-disc list-inside space-y-1">
          <li><strong>Квадратная</strong> — одинаковое количество строк и столбцов</li>
          <li><strong>Нулевая</strong> — все элементы равны нулю</li>
          <li><strong>Единичная</strong> — единицы на главной диагонали, остальное — нули</li>
          <li><strong>Диагональная</strong> — вне диагонали всё нули</li>
        </ul>
      </section>
  
      <!-- Формула 2x2 -->
      <section class="bg-white border-l-4 border-green-400 p-4 rounded-md shadow-sm mt-8">
        <h3 class="text-lg font-semibold mb-2 text-green-700">Формула определителя 2×2:</h3>
        <p>
          A = ⎡a b⎤<br />
          ⎣c d⎦
        </p>
        <p class="mt-2">
          <strong>det(A) = ad − bc</strong>
        </p>
      </section>
  
      <!-- Пример 2x2 -->
      <section class="bg-gray-50 border-l-4 border-yellow-400 p-4 rounded-md shadow-sm mt-4">
        <h3 class="text-lg font-semibold mb-2 text-yellow-800">Пример:</h3>
        <p>
          A = ⎡2 3⎤<br />
          ⎣1 4⎦
        </p>
        <p class="mt-2">det = (2×4) − (3×1) = <strong>5</strong></p>
      </section>
  
      <!-- Правило Саррюса -->
      <section class="mt-12">
        <h2 class="text-2xl font-semibold text-indigo-700 mb-2">Определитель 3×3 (Правило Саррюса)</h2>
        <div class="bg-white border p-4 rounded-md text-sm leading-relaxed shadow-sm">
          det(A) = a₁₁a₂₂a₃₃ + a₁₂a₂₃a₃₁ + a₁₃a₂₁a₃₂<br />
          − a₁₃a₂₂a₃₁ − a₁₁a₂₃a₃₂ − a₁₂a₂₁a₃₃
        </div>
      </section>
  
      <!-- Зачем нужен определитель -->
      <section class="mt-10">
        <h2 class="text-2xl font-semibold text-indigo-700 mb-2">Зачем нужен определитель?</h2>
        <ul class="list-disc list-inside space-y-1">
          <li>Определяет, существует ли обратная матрица</li>
          <li>Показывает, имеет ли система уравнений единственное решение</li>
          <li>Используется в аналитической геометрии, линейных преобразованиях и теории функций</li>
        </ul>
      </section>
  
    </BaseLesson>
  </template>
  
  <script setup>
  import BaseLesson from '~/components/base-lesson/BaseLesson.vue'
import Calculator from '~/components/calculator.vue';
  </script>
  