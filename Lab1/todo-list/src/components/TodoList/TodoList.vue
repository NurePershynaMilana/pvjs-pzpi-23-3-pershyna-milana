<script setup>
import { ref, computed } from 'vue'
import TodoItem from '../TodoItem/TodoItem.vue'
import './TodoList.css'

const todos = ref([])
const inputValue = ref('')
const filter = ref('all')

const filteredTodos = computed(() => {
  if (filter.value === 'active') return todos.value.filter(t => !t.done)
  if (filter.value === 'done')   return todos.value.filter(t => t.done)
  return todos.value
})

const activeCount = computed(() => todos.value.filter(t => !t.done).length)

function addTodo() {
  const text = inputValue.value.trim()
  if (!text) return
  todos.value.push({ id: Date.now(), text, done: false })
  inputValue.value = ''
}

function toggleTodo(id) {
  const todo = todos.value.find(t => t.id === id)
  if (todo) todo.done = !todo.done
}

function deleteTodo(id) {
  todos.value = todos.value.filter(t => t.id !== id)
}
</script>

<template>
  <div class="todo-wrapper">
    <h1 class="todo-title">TO-DO List</h1>

    <!-- Поле вводу -->
    <div class="input-row">
      <input
        v-model="inputValue"
        placeholder="Введіть задачу..."
        @keyup.enter="addTodo"
      />
      <button class="btn-add" @click="addTodo">+ Додати</button>
    </div>

    <!-- Фільтри -->
    <div class="filters">
      <button :class="{ active: filter === 'all' }"    @click="filter = 'all'">Всі</button>
      <button :class="{ active: filter === 'active' }" @click="filter = 'active'">Активні</button>
      <button :class="{ active: filter === 'done' }"   @click="filter = 'done'">Виконані</button>
    </div>

    <!-- Лічильник -->
    <p v-if="todos.length > 0" class="todo-counter">
      Залишилось: {{ activeCount }} з {{ todos.length }}
    </p>

    <!-- Список -->
    <ul class="todo-list">
      <TodoItem
        v-for="todo in filteredTodos"
        :key="todo.id"
        :todo="todo"
        @toggle="toggleTodo"
        @delete="deleteTodo"
      />
    </ul>

    <!-- Порожній стан -->
    <div v-if="filteredTodos.length === 0" class="empty">
      Задач немає
    </div>
  </div>
</template>