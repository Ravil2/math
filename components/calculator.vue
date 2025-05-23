<template>
  <div class="bg-white rounded-2xl shadow-lg p-6 sm:p-8 max-w-2xl mx-auto space-y-6 border border-gray-100">
    <h2 class="text-2xl font-bold text-gray-800 mb-2">{{ title }}</h2>

    <!-- Поле ввода -->
    <textarea
      v-model="expression"
      rows="4"
      class="w-full p-4 text-sm rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-400 focus:outline-none resize-none font-mono"
      placeholder='Примеры:
solve("2*x + 4 = 10", "x")
diff("x^2 + 2*x")
expand("(x+1)^3")'
    />

    <!-- Кнопки -->
    <div class="flex flex-wrap gap-4">
      <button
        @click="evaluateExpr"
        class="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-2 rounded-xl shadow transition"
      >
        🧠 Вычислить
      </button>
      <button
        @click="clear"
        class="bg-gray-400 hover:bg-gray-500 text-white font-medium px-6 py-2 rounded-xl transition"
      >
        ✖️ Очистить
      </button>
    </div>

    <!-- Результат -->
    <div v-if="result" class="mt-6">
      <p class="text-gray-700 font-semibold mb-2">🔍 Результат:</p>
      <pre class="bg-gray-100 text-gray-800 p-4 rounded-xl whitespace-pre-wrap font-mono text-sm border border-gray-200">
{{ result }}
      </pre>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import nerdamer from 'nerdamer'
import 'nerdamer/Algebra'
import 'nerdamer/Calculus'
import 'nerdamer/Solve'
import 'nerdamer/Extra'

// Переменные
const expression = ref('')
const result = ref('')

// Функция вычисления
function evaluateExpr() {
  try {
    const expr = expression.value.trim()

    // solve("2*x + 4 = 10", "x")
    if (expr.startsWith('solve')) {
      const match = expr.match(/solve\(["'](.+?)["']\s*,\s*["']?(\w+)["']?\)/)
      if (!match) throw new Error('Формат: solve("уравнение", "x")')

      const equation = match[1]
      const variable = match[2]

      const solutions = nerdamer.solveEquations(equation)
      const formatted = solutions.map(sol => {
        const val = sol[variable] || '(нет решения)'
        return `${variable} = ${val}`
      }).join('\n')

      result.value = formatted
      return
    }

    // diff("x^2 + x") → производная
    if (expr.startsWith('diff')) {
      const match = expr.match(/diff\(["'](.+?)["']\)/)
      if (!match) throw new Error('Формат: diff("выражение")')

      const derivative = nerdamer(`diff(${match[1]})`).toString()
      result.value = `Производная: ${derivative}`
      return
    }

    // expand("(x+1)^3") → раскрытие скобок
    if (expr.startsWith('expand')) {
      const match = expr.match(/expand\(["'](.+?)["']\)/)
      if (!match) throw new Error('Формат: expand("выражение")')

      const expanded = nerdamer(`expand(${match[1]})`).toString()
      result.value = `Раскрыто: ${expanded}`
      return
    }

    // Просто выражение
    result.value = nerdamer(expr).evaluate().toString()

  } catch (err) {
    result.value = `❌ Ошибка: ${err.message}`
  }
}

// Очистка
function clear() {
  expression.value = ''
  result.value = ''
}

defineProps(['title'])
</script>
