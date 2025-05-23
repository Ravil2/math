<template>
    <div class="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div class="max-w-3xl mx-auto">
        
        <!-- Заголовок -->
        <div class="text-center mb-10">
          <h1 class="text-4xl font-extrabold text-gray-900 mb-2">Калькулятор выражений</h1>
          <p class="text-gray-600 text-lg">
            Введите математическое выражение, интеграл, производную или систему уравнений.
          </p>
        </div>
  
        <!-- Компонент калькулятора -->
        <Calculator title="Введите своё выражение" />
  
        <!-- Подсказки -->
        <div class="mt-10 bg-white border-l-4 border-indigo-300 p-4 rounded-xl shadow-sm">
          <h2 class="text-lg font-semibold text-indigo-700 mb-2">Примеры, которые можно вводить:</h2>
          <ul class="list-disc list-inside text-sm text-gray-700 space-y-1">
            <li><code>2 + 2 * (3 + 1)</code> — обычное выражение</li>
            <li><code>integrate("x^2, x")</code> — интеграл</li>
            <li><code>derivative("sin("x"), x")</code> — производная</li>
            <li><code>solve("2x + 4 = 10, x")</code> — уравнение</li>
          </ul>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  </script>
  