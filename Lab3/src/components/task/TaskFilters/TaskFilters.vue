<script setup>
import BaseInput from '@/components/base/BaseInput/BaseInput.vue'
import BaseSelect from '@/components/base/BaseSelect/BaseSelect.vue'
import BaseButton from '@/components/base/BaseButton/BaseButton.vue'
import { CATEGORIES, PRIORITIES, SORT_OPTIONS } from '@/constants/task'

defineProps({
  category: { type: String, default: 'all' },
  priority: { type: String, default: 'all' },
  sortBy: { type: String, default: 'deadline' },
  searchQuery: { type: String, default: '' }
})

const emit = defineEmits([
  'update:category',
  'update:priority',
  'update:sortBy',
  'update:searchQuery',
  'create'
])

const categoryOptions = [
  { value: 'all', label: 'All categories' },
  ...CATEGORIES.map((c) => ({ value: c, label: c }))
]

const priorityOptions = [
  { value: 'all', label: 'All priorities' },
  ...PRIORITIES.map((p) => ({ value: p, label: p }))
]
</script>

<template>
  <div class="task-filters">
    <BaseInput
      type="search"
      placeholder="Search by title..."
      :model-value="searchQuery"
      class="task-filters__search"
      @update:model-value="emit('update:searchQuery', $event)"
    />
    <BaseSelect
      :model-value="category"
      :options="categoryOptions"
      @update:model-value="emit('update:category', $event)"
    />
    <BaseSelect
      :model-value="priority"
      :options="priorityOptions"
      @update:model-value="emit('update:priority', $event)"
    />
    <BaseSelect
      :model-value="sortBy"
      :options="SORT_OPTIONS"
      @update:model-value="emit('update:sortBy', $event)"
    />
    <BaseButton variant="primary" @click="emit('create')">+ Add Task</BaseButton>
  </div>
</template>

<style lang="scss" scoped src="./TaskFilters.scss"></style>
