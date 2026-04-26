import { onBeforeUnmount, watch, nextTick } from 'vue'

export function useInfiniteScroll(targetRef, onIntersect, options = {}) {
  const { rootMargin = '300px' } = options
  let observer = null

  function setup() {
    if (observer) observer.disconnect()
    if (!targetRef.value) return
    observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) onIntersect()
      },
      { rootMargin }
    )
    observer.observe(targetRef.value)
  }

  watch(targetRef, async (el) => {
    if (el) {
      await nextTick()
      setup()
    } else if (observer) {
      observer.disconnect()
    }
  })

  onBeforeUnmount(() => {
    if (observer) observer.disconnect()
  })
}
