import { reactive, computed, ref } from 'vue'

export function useFormValidation(initialValues, rules) {
  const values = reactive({ ...initialValues })
  const errors = reactive({})
  const touched = reactive({})
  const submitAttempted = ref(false)

  Object.keys(rules).forEach((key) => {
    errors[key] = null
    touched[key] = false
  })

  function validateField(name) {
    const fieldRules = rules[name] || []
    for (const rule of fieldRules) {
      const result = rule(values[name])
      if (result !== true) {
        errors[name] = result
        return false
      }
    }
    errors[name] = null
    return true
  }

  function validateAll() {
    submitAttempted.value = true
    let allValid = true
    Object.keys(rules).forEach((name) => {
      touched[name] = true
      const valid = validateField(name)
      if (!valid) allValid = false
    })
    return allValid
  }

  function handleBlur(name) {
    touched[name] = true
    validateField(name)
  }

  function handleInput(name) {
    if (touched[name] || submitAttempted.value) {
      validateField(name)
    }
  }

  function reset() {
    Object.keys(rules).forEach((key) => {
      values[key] = initialValues[key] ?? ''
      errors[key] = null
      touched[key] = false
    })
    submitAttempted.value = false
  }

  const isValid = computed(() =>
    Object.keys(rules).every((name) => {
      const fieldRules = rules[name]
      return fieldRules.every((rule) => rule(values[name]) === true)
    }),
  )

  const displayErrors = computed(() => {
    const result = {}
    Object.keys(errors).forEach((name) => {
      result[name] =
        touched[name] || submitAttempted.value ? errors[name] : null
    })
    return result
  })

  return {
    values,
    errors: displayErrors,
    touched,
    isValid,
    validateField,
    validateAll,
    handleBlur,
    handleInput,
    reset,
  }
}
