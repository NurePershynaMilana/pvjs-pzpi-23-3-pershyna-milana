<script setup>
import { reactive, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useTaskStore } from '@/stores/taskStore'
import { CATEGORIES, PRIORITIES, STATUS_OPTIONS } from '@/constants/task'
import { validateTask } from '@/utils/validation'
import BaseInput from '@/components/base/BaseInput/BaseInput.vue'
import BaseTextarea from '@/components/base/BaseTextarea/BaseTextarea.vue'
import BaseSelect from '@/components/base/BaseSelect/BaseSelect.vue'
import BaseButton from '@/components/base/BaseButton/BaseButton.vue'

const route = useRoute()
const router = useRouter()
const store = useTaskStore()

const isEdit = computed(() => Boolean(route.params.id))

const form = reactive({
  title: '',
  description: '',
  category: CATEGORIES[0],
  priority: 'Medium',
  deadline: '',
  completed: false
})

const errors = reactive({ title: '', deadline: '' })

onMounted(() => {
  if (!isEdit.value) return
  const existing = store.getTaskById(route.params.id)
  if (!existing) {
    router.replace({ name: 'list' })
    return
  }
  form.title = existing.title
  form.description = existing.description
  form.category = existing.category
  form.priority = existing.priority
  form.deadline = existing.deadline
  form.completed = existing.completed
})

function onSubmit() {
  errors.title = ''
  errors.deadline = ''

  const result = validateTask(form, isEdit.value ? 'edit' : 'create')
  if (!result.isValid) {
    errors.title = result.errors.title
    errors.deadline = result.errors.deadline
    return
  }

  if (isEdit.value) {
    store.updateTask(route.params.id, form)
  } else {
    store.addTask(form)
  }
  router.push({ name: 'list' })
}

function onCancel() {
  router.back()
}
</script>

<template>
  <div class="task-form">
    <button type="button" class="task-form__back" @click="onCancel">
      ← {{ isEdit ? 'Back to details' : 'Back' }}
    </button>

    <h1 class="task-form__title">{{ isEdit ? 'Edit Task' : 'New Task' }}</h1>

    <form class="task-form__form" @submit.prevent="onSubmit">
      <BaseInput
        id="title"
        v-model="form.title"
        label="Title"
        placeholder="Task title"
        :error="errors.title"
      />

      <BaseTextarea
        id="description"
        v-model="form.description"
        label="Description"
        placeholder="Optional details"
      />

      <div class="task-form__row">
        <BaseSelect
          id="category"
          v-model="form.category"
          label="Category"
          :options="CATEGORIES"
        />
        <BaseSelect
          id="priority"
          v-model="form.priority"
          label="Priority"
          :options="PRIORITIES"
        />
      </div>

      <div class="task-form__row">
        <BaseInput
          id="deadline"
          v-model="form.deadline"
          type="date"
          label="Deadline"
          :error="errors.deadline"
        />
        <BaseSelect
          v-if="isEdit"
          id="status"
          v-model="form.completed"
          label="Status"
          :options="STATUS_OPTIONS"
        />
      </div>

      <div class="task-form__actions">
        <BaseButton variant="ghost" type="button" @click="onCancel">
          Cancel
        </BaseButton>
        <BaseButton variant="primary" type="submit">
          {{ isEdit ? 'Save Changes' : 'Create Task' }}
        </BaseButton>
      </div>
    </form>
  </div>
</template>

<style lang="scss" scoped src="./TaskFormView.scss"></style>
