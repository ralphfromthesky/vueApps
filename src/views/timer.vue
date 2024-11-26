<template>
  <div>
    <div class="text-[3rem]">
      BINGO GAME
    </div>
    <div class="mb-[5rem]">
      <button @click="generateNums()">GEN</button>
      <div class="flex flex-wrap w-[40vw] gap-2">
        <div v-for="(a, i) in winBall" :key="a" class="border-2 border-[gray] p-1 w-[2rem] text-center rounded-[50%] ">
          {{ a }}
        </div>
      </div>
    </div>


    <div class="w-[50vw] flex gap-2 flex-wrap p-1">
      <div v-for="(a, i) in bingoNums" :key="a.id">
        <div
          :class="['p-2 border-[.05rem] border-[gray] rounded-[.5rem]', bingoNums.includes(winBall) ? 'bg-[green]' : '']"
          @click="showBingData(a.num)">
          {{ a.num }}
        </div>

      </div>
      <div v-for="(a, i) in winBall" :key="i">
        {{ a.num }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue';
const selectedNum = ref(null)
const winBall = ref([])
const winNum = ref(null)
const bingoNums = ref([
  { id: 1, num: 1 },
  { id: 2, num: 2 },
  { id: 3, num: 3 },
  { id: 4, num: 4 },
  { id: 5, num: 5 },
  { id: 6, num: 6 },
  { id: 7, num: 7 },
  { id: 8, num: 8 },
  { id: 9, num: 9 },
  { id: 10, num: 10 },
  { id: 11, num: 11 },
  { id: 12, num: 12 },
  { id: 13, num: 13 },
  { id: 14, num: 14 },
  { id: 15, num: 15 },
  { id: 16, num: 16 },
  { id: 17, num: 17 },
  { id: 18, num: 18 },
  { id: 19, num: 19 },
  { id: 20, num: 20 },
  { id: 21, num: 21 },
  { id: 22, num: 22 },
  { id: 23, num: 23 },
  { id: 24, num: 24 },
  { id: 25, num: 25 },
  { id: 26, num: 26 },
  { id: 27, num: 27 },
  { id: 28, num: 28 },
  { id: 29, num: 29 },
  { id: 30, num: 30 },
  { id: 31, num: 31 },
  { id: 32, num: 32 },
  { id: 33, num: 33 },
  { id: 34, num: 34 },
  { id: 35, num: 35 },
  { id: 36, num: 36 },
  { id: 37, num: 37 },
  { id: 38, num: 38 },
  { id: 39, num: 39 },
  { id: 40, num: 40 },
  { id: 41, num: 41 },
  { id: 42, num: 42 },
  { id: 43, num: 43 },
  { id: 44, num: 44 },
  { id: 45, num: 45 },
  { id: 46, num: 46 },
  { id: 47, num: 47 },
  { id: 48, num: 48 },
  { id: 49, num: 49 },
  { id: 50, num: 50 },
  { id: 51, num: 51 },
  { id: 52, num: 52 },
  { id: 53, num: 53 },
  { id: 54, num: 54 },
  { id: 55, num: 55 },
  { id: 56, num: 56 },
  { id: 57, num: 57 },
  { id: 58, num: 58 },
  { id: 59, num: 59 },
  { id: 60, num: 60 },
]);


// const generateNums = computed(() => {
//   const match = bingoNums.value.find((a) => a.num == selectedNum.value)
//   return match ? match.num : null 
// })

const generateNums = () => {
  for (let i = 0; i < 40; i++) {
    winBall.value.push(Math.floor(Math.random() * (60 - 1 + 1)));
  }
}
</script>





<style lang="scss" scoped></style>