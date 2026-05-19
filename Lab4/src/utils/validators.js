export const required = (value) =>
  (typeof value === 'string' && value.trim().length > 0) ||
  (typeof value === 'number' && !Number.isNaN(value))
    ? true
    : "Поле обов'язкове"

export const minLength = (n) => (value) =>
  typeof value === 'string' && value.trim().length >= n
    ? true
    : `Мінімум ${n} символів`

export const maxLength = (n) => (value) =>
  typeof value === 'string' && value.trim().length <= n
    ? true
    : `Максимум ${n} символів`

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export const isEmail = (value) =>
  typeof value === 'string' && EMAIL_REGEX.test(value.trim())
    ? true
    : 'Некоректний email'
