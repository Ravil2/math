<template>
    <div class="max-w-6xl mx-auto px-4 md:px-8 py-12">
      <!-- Заголовок -->
      <div class="mb-10">
        <h1 class="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-500 drop-shadow mb-4">
          {{ title }}
        </h1>
        <div class="h-1 w-24 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
      </div>
  
      <!-- Контент -->
      <div class="space-y-12 text-gray-800 leading-relaxed">
        <slot />
      </div>
    </div>
  </template>
  
  <script setup>
  defineProps({
    title: {
      type: String,
      required: true
    }
  })
  </script>
  