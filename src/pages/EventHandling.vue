<template>
  <div>
    <div class="text-center flex flex-col">
      {{ count }} {{ count === 10 ? 'max is 10' : '' }} {{ count === 1 ? 'minimun is 1' : '' }}
      <div class="flex gap-2">
        <button @click="add">increment +</button>
        <button @click="minus">decrement -</button>
      </div>
      <div v-if="count === 9" class="mt-[2rem] border-2 border-[red] p-2 rounded-[.5rem]">
        this shows because the count total is 9
      </div>
      <div v-if="count === 5" class="mt-[2rem] border-2 border-[pink] p-2 rounded-[.5rem]">
        this shows because the count total is 5
      </div>
      <div class="mt-[2rem] text-center border-2 border-[red]">
        <div class="flex gap-[1rem] justify-center">
          <div v-for="(a, i) in arrNum" :key="i">
            {{ a }}
          </div>
        </div>
        <button @click="generateNum">Generate Lotto number</button>
      </div>
    </div>

  </div>
</template>

<script setup>
import { computed, ref } from 'vue';
const arrNum = ref([])

const count = ref(0)

const add = () => {
  if (count.value < 10) {
    count.value++
  }
}
const minus = () => {
  if (count.value > 1) {
    count.value--
  }
}

const generateNum = () => {
  for (let i = 0; i < 6; i++) {
    arrNum.value.push(Math.floor(Math.random() * 55 + 1))
  }
}
// const randomNUm = computed(() => {
//   return Math.floor(Math.random() * 100 + 1)
// })
</script>

<style lang="scss" scoped></style>