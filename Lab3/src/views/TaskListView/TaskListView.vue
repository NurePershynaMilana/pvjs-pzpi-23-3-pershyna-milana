<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useTaskStore } from '@/stores/taskStore'
import { PRIORITY_WEIGHTS } from '@/constants/task'
import TaskFilters from '@/components/task/TaskFilters/TaskFilters.vue'
import TaskItem from '@/components/task/TaskItem/TaskItem.vue'
import EmptyState from '@/components/common/EmptyState/EmptyState.vue'

const router = useRouter()
const store = useTaskStore()

const searchQuery = ref('')
const selectedCategory = ref('all')
const selectedPriority = ref('all')
const sortBy = ref('deadline')

const filteredTasks = computed(() => {
  let result = store.tasks

  if (selectedCategory.value !== 'all') {
    result = result.filter((t) => t.category === selectedCategory.value)
  }

  if (selectedPriority.value !== 'all') {
    result = result.filter((t) => t.priority === selectedPriority.value)
  }

  const query = searchQuery.value.trim().toLowerCase()
  if (query) {
    result = result.filter((t) => t.title.toLowerCase().includes(query))
  }

  const sorted = [...result]
  if (sortBy.value === 'deadline') {
    sorted.sort((a, b) => new Date(a.deadline) - new Date(b.deadline))
  } else if (sortBy.value === 'priority') {
    sorted.sort(
      (a, b) => PRIORITY_WEIGHTS[b.priority] - PRIORITY_WEIGHTS[a.priority]
    )
  }
  return sorted
})

function goCreate() {
  router.push({ name: 'create' })
}

function onView(id) {
  router.push({ name: 'detail', params: { id } })
}

function onEdit(id) {
  router.push({ name: 'edit', params: { id } })
}

function onDelete(id) {
  store.deleteTask(id)
}

function onToggle(id) {
  store.toggleComplete(id)
}
</script>

<template>
  <div class="task-list">
    <TaskFilters
      v-model:category="selectedCategory"
      v-model:priority="selectedPriority"
      v-model:sort-by="sortBy"
      v-model:search-query="searchQuery"
      @create="goCreate"
    />

    <EmptyState v-if="!filteredTasks.length" message="No tasks found" />
    <ul v-else class="task-list__items">
      <li v-for="task in filteredTasks" :key="task.id">
        <TaskItem
          :task="task"
          @toggle="onToggle"
          @view="onView"
          @edit="onEdit"
          @delete="onDelete"
        />
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped src="./TaskListView.scss"></style>
