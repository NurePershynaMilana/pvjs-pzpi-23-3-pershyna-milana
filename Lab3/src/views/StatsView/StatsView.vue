<script setup>
import { useTaskStore } from '@/stores/taskStore'
import { formatDate } from '@/utils/date'
import StatCard from '@/components/stats/StatCard/StatCard.vue'
import CategoryBadge from '@/components/task/CategoryBadge/CategoryBadge.vue'
import EmptyState from '@/components/common/EmptyState/EmptyState.vue'

const store = useTaskStore()
</script>

<template>
  <div class="stats">
    <div class="stats__cards">
      <StatCard :value="store.tasks.length" label="Total" />
      <StatCard :value="store.activeTasks.length" label="Active" variant="info" />
      <StatCard
        :value="store.completedTasks.length"
        label="Completed"
        variant="success"
      />
      <StatCard
        :value="store.overdueTasks.length"
        label="Overdue"
        variant="danger"
      />
    </div>

    <section class="stats__section">
      <h2 class="stats__heading">Upcoming deadlines (next 3 days)</h2>
      <EmptyState
        v-if="!store.upcomingDeadlines.length"
        message="No tasks due in the next 3 days"
      />
      <ul v-else class="stats__list">
        <li
          v-for="task in store.upcomingDeadlines"
          :key="task.id"
          class="stats__row"
        >
          <span class="stats__row-title">{{ task.title }}</span>
          <CategoryBadge :category="task.category" />
          <span class="stats__row-date">{{ formatDate(task.deadline) }}</span>
        </li>
      </ul>
    </section>
  </div>
</template>

<style lang="scss" scoped src="./StatsView.scss"></style>
