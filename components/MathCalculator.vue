<template>
    <div class="bg-white p-6 rounded shadow">
      <textarea v-model="expression" rows="3" class="border p-2 w-full mb-4" placeholder="Введите выражение: lambda x: x^2 + 2*x + 1 или solve(2*x+4=10, x)" />
      <div class="flex gap-4">
        <button @click="evaluateExpr" class="bg-green-600 text-white px-4 py-2 rounded">Вычислить</button>
        <button @click="clear" class="bg-gray-400 text-white px-4 py-2 rounded">Очистить</button>
      </div>
      <div v-if="result" class="mt-4">
        <p><strong>Результат:</strong></p>
        <pre class="bg-gray-100 p-3 rounded mt-2">{{ result }}</pre>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { simplify } from 'mathjs'
  
  const expression = ref('')
  const result = ref('')
  
  function calculate() {
    try {
      result.value = simplify(expression.value).toString()
    } catch (e) {
      result.value = 'Ошибка: проверьте выражение'
    }
  }
  </script>