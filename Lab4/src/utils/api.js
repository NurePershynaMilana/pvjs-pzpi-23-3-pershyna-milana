import { API_CONFIG } from '@/constants'
import { randomDelay } from './delay'

export async function submitRegistration() {
  await randomDelay(API_CONFIG.MIN_DELAY_MS, API_CONFIG.MAX_DELAY_MS)

  if (Math.random() < API_CONFIG.ERROR_RATE) {
    throw new Error('Сервер тимчасово недоступний. Спробуйте ще раз.')
  }

  return `reg-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`
}
