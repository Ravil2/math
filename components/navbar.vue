<template>
    
<!-- Навбар -->
<header class="bg-white shadow-sm sticky top-0 z-50">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex justify-between h-16 items-center">
      <!-- Лого -->
      <NuxtLink to="/" class="flex items-center text-2xl font-black text-transparent bg-clip-text bg-gradient-to-br from-blue-600 to-purple-500">
        FastMath
      </NuxtLink>

      <!-- Меню для десктопа -->
      <nav class="hidden md:flex gap-8 text-gray-700 font-medium">
        <NuxtLink to="/" class="hover:text-indigo-600 transition">Курсы</NuxtLink>
        <NuxtLink to="/calculator-page" class="hover:text-indigo-600 transition">Калькулятор</NuxtLink>
      </nav>


      <!-- Бургер и меню для мобилки -->
      <div class="md:hidden flex items-center">
        <button @click="isMenuOpen = !isMenuOpen" class="text-gray-700 focus:outline-none">
          <svg v-if="!isMenuOpen" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
               viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
               viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
      </div>
    </div>
  </div>

  <!-- Мобильное меню -->
  <div v-if="isMenuOpen" class="md:hidden bg-white shadow-md">
    <div class="px-4 pt-4 pb-2 space-y-2 text-gray-700 font-medium">
      <NuxtLink to="/" class="block py-2 hover:text-indigo-600">Курсы</NuxtLink>
      <NuxtLink to="/calculator-page" class="block py-2 hover:text-indigo-600">Калькулятор</NuxtLink>
      <NuxtLink to="/about" class="block py-2 hover:text-indigo-600">О нас</NuxtLink>
      <NuxtLink to="/login" class="block py-2 text-indigo-600 font-semibold">Войти</NuxtLink>
    </div>
  </div>
</header>


</template>

<script>
import { ref } from 'vue'
const isMenuOpen = ref(false)

</script>