<script setup>
import './TodoItem.css'

const props = defineProps({
  todo: {
    type: Object,
    required: true,
  },
})

const emit = defineEmits(['toggle', 'delete'])
</script>

<template>
  <li class="todo-item" :class="{ done: todo.done }">

    <!-- Кастомний чекбокс -->
    <label class="custom-checkbox">
      <input
        type="checkbox"
        :checked="todo.done"
        @change="emit('toggle', todo.id)"
      />
      <span class="checkmark">
        <svg width="12" height="10" viewBox="0 0 12 10" fill="none">
          <path d="M1 5L4.5 8.5L11 1" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </span>
    </label>

    <!-- Текст -->
    <span class="todo-text">{{ todo.text }}</span>

    <!-- Видалити -->
    <button class="btn-delete" @click="emit('delete', todo.id)">
      Видалити
    </button>

  </li>
</template>