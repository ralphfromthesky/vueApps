<template>
  <div>
    <div class="mb-[5rem]">USING SUSPENSE</div>
    <Suspense>
      <template #default>
        <Component3 />
      </template>
      <template #fallback>
        loading.... using SUSPENSE
      </template>
    </Suspense>
  </div>
</template>

<script setup>
import { defineAsyncComponent } from 'vue'

const Component3 = defineAsyncComponent({
  loader: () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(import('@/pages/Component3Suspense.vue'))
      }, 3000) // 5-second delay before loading the component
    })
  },
  // Optionally, you can add a delay before showing the fallback:
  delay: 200, // Delay before showing fallback loading state
})
</script>

<style lang="scss" scoped></style>
