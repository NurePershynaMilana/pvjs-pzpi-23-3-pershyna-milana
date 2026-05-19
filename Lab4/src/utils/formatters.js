import { EVENT_TYPES } from '@/constants'

const TYPE_LABELS = {
  [EVENT_TYPES.MEETUP]: 'МІТАП',
  [EVENT_TYPES.CONFERENCE]: 'КОНФЕРЕНЦІЯ',
  [EVENT_TYPES.HACKATHON]: 'ХАКАТОН',
  [EVENT_TYPES.WORKSHOP]: 'ВОРКШОП',
}

export function formatDate(isoDate) {
  if (!isoDate) return ''
  return String(isoDate).slice(0, 10)
}

export function formatEventType(type) {
  return TYPE_LABELS[type] || String(type || '').toUpperCase()
}

export function formatRegistrationDate(isoDate) {
  if (!isoDate) return ''
  const date = new Date(isoDate)
  if (Number.isNaN(date.getTime())) return ''
  return date.toLocaleString('uk-UA', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  })
}
