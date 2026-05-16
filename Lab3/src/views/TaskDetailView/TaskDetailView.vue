<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useTaskStore } from '@/stores/taskStore'
import { isOverdue, formatFullDate } from '@/utils/date'
import CategoryBadge from '@/components/task/CategoryBadge/CategoryBadge.vue'
import PriorityBadge from '@/components/task/PriorityBadge/PriorityBadge.vue'
import DeadlineLabel from '@/components/task/DeadlineLabel/DeadlineLabel.vue'
import BaseButton from '@/components/base/BaseButton/BaseButton.vue'

const route = useRoute()
const router = useRouter()
const store = useTaskStore()

const task = computed(() => store.getTaskById(route.params.id))

const deadlineOverdue = computed(
  () => task.value && !task.value.completed && isOverdue(task.value.deadline)
)

function goBack() {
  router.push({ name: 'list' })
}

function goEdit() {
  router.push({ name: 'edit', params: { id: task.value.id } })
}

function onDelete() {
  store.deleteTask(task.value.id)
  router.push({ name: 'list' })
}
</script>

<template>
  <div class="task-detail">
    <button type="button" class="task-detail__back" @click="goBack">
      ← Back to list
    </button>

    <div v-if="!task" class="task-detail__missing">
      <h2>Task not found</h2>
      <p>The task you are looking for does not exist or was deleted.</p>
      <BaseButton variant="primary" @click="goBack">Back to list</BaseButton>
    </div>

    <template v-else>
      <h1 class="task-detail__title">{{ task.title }}</h1>
      <div class="task-detail__badges">
        <CategoryBadge :category="task.category" />
        <PriorityBadge :priority="task.priority" with-suffix />
        <DeadlineLabel :deadline="task.deadline" :completed="task.completed" />
      </div>

      <div class="task-detail__grid">
        <div class="task-detail__field">
          <span class="task-detail__label">Status</span>
          <span class="task-detail__value">
            {{ task.completed ? 'Completed' : 'Active' }}
          </span>
        </div>
        <div class="task-detail__field">
          <span class="task-detail__label">Category</span>
          <span class="task-detail__value">{{ task.category }}</span>
        </div>
        <div class="task-detail__field">
          <span class="task-detail__label">Created</span>
          <span class="task-detail__value">{{ formatFullDate(task.createdAt) }}</span>
        </div>
        <div class="task-detail__field">
          <span class="task-detail__label">Deadline</span>
          <span
            :class="[
              'task-detail__value',
              { 'task-detail__value--danger': deadlineOverdue }
            ]"
          >
            {{ formatFullDate(task.deadline) }}
          </span>
        </div>
      </div>

      <div class="task-detail__field task-detail__field--full">
        <span class="task-detail__label">Description</span>
        <p class="task-detail__description">
          {{ task.description || 'No description' }}
        </p>
      </div>

      <div class="task-detail__actions">
        <BaseButton variant="primary" @click="goEdit">✎ Edit</BaseButton>
        <BaseButton variant="danger" @click="onDelete">× Delete</BaseButton>
      </div>
    </template>
  </div>
</template>

<style lang="scss" scoped src="./TaskDetailView.scss"></style>
