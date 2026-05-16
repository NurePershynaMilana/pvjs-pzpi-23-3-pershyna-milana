<script setup>
import BaseCheckbox from '@/components/base/BaseCheckbox/BaseCheckbox.vue'
import CategoryBadge from '@/components/task/CategoryBadge/CategoryBadge.vue'
import PriorityBadge from '@/components/task/PriorityBadge/PriorityBadge.vue'
import DeadlineLabel from '@/components/task/DeadlineLabel/DeadlineLabel.vue'

const props = defineProps({
  task: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['toggle', 'view', 'edit', 'delete'])

function onToggle() {
  emit('toggle', props.task.id)
}
</script>

<template>
  <article :class="['task-item', { 'task-item--completed': task.completed }]">
    <BaseCheckbox :model-value="task.completed" @update:model-value="onToggle" />

    <div class="task-item__content">
      <h3 class="task-item__title">{{ task.title }}</h3>
      <div class="task-item__meta">
        <CategoryBadge :category="task.category" />
        <PriorityBadge :priority="task.priority" />
        <DeadlineLabel :deadline="task.deadline" :completed="task.completed" />
      </div>
    </div>

    <div class="task-item__actions">
      <button
        type="button"
        class="task-item__action"
        title="Edit"
        @click="emit('edit', task.id)"
      >
        ✎
      </button>
      <button
        type="button"
        class="task-item__action"
        title="View"
        @click="emit('view', task.id)"
      >
        ◉
      </button>
      <button
        type="button"
        class="task-item__action task-item__action--danger"
        title="Delete"
        @click="emit('delete', task.id)"
      >
        ×
      </button>
    </div>
  </article>
</template>

<style lang="scss" scoped src="./TaskItem.scss"></style>
