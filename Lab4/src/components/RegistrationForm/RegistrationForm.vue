<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useFormValidation } from '@/composables/useFormValidation'
import { useRegistrations } from '@/composables/useRegistrations'
import { useToast } from '@/composables/useToast'
import {
  required,
  minLength,
  maxLength,
  isEmail,
} from '@/utils/validators'
import { ROUTE_NAMES, VALIDATION_LIMITS } from '@/constants'
import BaseButton from '@/components/BaseButton'
import BaseInput from '@/components/BaseInput'
import './RegistrationForm.scss'

const props = defineProps({
  eventId: {
    type: String,
    required: true,
  },
})

const router = useRouter()
const { registerUser } = useRegistrations()
const { showSuccess, showError } = useToast()

const {
  values,
  errors,
  isValid,
  validateAll,
  handleBlur,
  handleInput,
  reset,
} = useFormValidation(
  { name: '', email: '' },
  {
    name: [
      required,
      minLength(VALIDATION_LIMITS.NAME_MIN),
      maxLength(VALIDATION_LIMITS.NAME_MAX),
    ],
    email: [required, isEmail],
  },
)

const isSubmitting = ref(false)

async function handleSubmit() {
  if (!validateAll()) {
    return
  }
  if (isSubmitting.value) return

  isSubmitting.value = true
  try {
    const result = await registerUser(props.eventId, {
      name: values.name,
      email: values.email,
    })

    if (result.success) {
      showSuccess('Реєстрація успішна! Підтвердження надіслано на пошту.')
      reset()
      router.push({
        name: ROUTE_NAMES.EVENT_DETAILS,
        params: { id: props.eventId },
      })
    } else {
      showError(result.error || 'Не вдалося зареєструватися. Спробуйте ще раз.')
    }
  } finally {
    isSubmitting.value = false
  }
}
</script>

<template>
  <section class="registration-form">
    <header class="registration-form__header">
      <h2 class="registration-form__title">Реєстрація</h2>
      <p class="registration-form__subtitle">
        Заповніть форму і ми надішлемо підтвердження на вашу пошту.
      </p>
    </header>

    <form
      class="registration-form__form"
      novalidate
      @submit.prevent="handleSubmit"
    >
      <BaseInput
        v-model="values.name"
        name="name"
        label="Ім'я"
        placeholder="Ваше ім'я"
        autocomplete="name"
        :error="errors.name"
        @blur="handleBlur"
        @input="handleInput"
      />

      <BaseInput
        v-model="values.email"
        name="email"
        type="email"
        label="Email"
        placeholder="you@example.com"
        autocomplete="email"
        :error="errors.email"
        @blur="handleBlur"
        @input="handleInput"
      />

      <BaseButton
        type="submit"
        variant="accent"
        block
        :loading="isSubmitting"
        :disabled="isSubmitting || !isValid"
      >
        Зареєструватися
      </BaseButton>
    </form>
  </section>
</template>
