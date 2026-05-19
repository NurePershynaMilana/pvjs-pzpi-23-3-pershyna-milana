export const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

export const randomDelay = (min, max) =>
  sleep(min + Math.random() * (max - min))
