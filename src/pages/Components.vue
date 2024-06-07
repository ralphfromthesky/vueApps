<template>
  <div>
    <div>
      <h1>this is the dynamic components</h1>

      <component :is="anoDaw ? Foot : Side" />
      <!-- <component :is="Side " /> -->


    </div>
  </div>
</template>

<script setup>
import {ref} from 'vue'
import Foot from '@/pages/Slots/Foot.vue'
import Side from '@/pages/Slots/Side.vue'

const anoDaw = ref(true)



</script>

<style lang="scss" scoped></style>