<template>
  <div>
    <div class="text-[3rem] flex gap-2 text-center justify-center">
      <div> BINGO GAME {{ cardNum }} {{ store.state.newStore.cards }}</div>
      <!-- <button v-if="winBall.length">Play Again?</button> -->
    </div>
    <div class="main flex gap-2" v-if="isPlay">
      <div class="cards text-center flex flex-col gap-2 justify-center items-center">
npm        <div>

          <div><button @click="generateCard()" class="mb-2 mt-2" v-if="!cards.length"> Take Cards</button></div>

          <div>
            <div>Patterns to win</div>
            <div class="flex gap-1">
              <div class="border-[black] border-2 grid grid-cols-5 text-[pink]">
                <div v-for="(a, i) in 25" :key="i"
                  :class="[p1.includes(a) && 'bg-[pink]', p4.includes(a) && 'text-[white]']"
                  class="border-[.05rem] text-[.5rem]">
                  {{ a }}
                </div>
              </div>
              <div class="border-[black] border-2 grid grid-cols-5">
                <div v-for="(a, i) in 25" :key="i"
                  :style="{ backgroundColor: a === 13 && 'white', color: a === 13 && 'white' }"
                  :class="p2.includes(a) && 'bg-[pink]'" class="border-[.05rem] text-[.5rem]">
                  {{ a }}
                </div>
              </div>
              <div class="border-[black] border-2 grid grid-cols-5">
                <div v-for="(a, i) in 25" :key="i" :class="p3.includes(a) && 'bg-[pink]'"
                  class="border-[.05rem] text-[.5rem]" :style="{ color: a === 13 ? 'white' : '' }">
                  {{ a }}
                </div>
              </div>
            </div>
          </div>

        </div>
        <div>Cards</div>
        <div class="border-2 border-[gray] grid grid-cols-5 p-1" v-if="cards.length">
          <div v-for="(a, i) in cards" :key="i"
            :class="['border-2 text-center p-1', winBall.includes(a) && 'bg-[pink]', i % 2 === 0 ? 'bg-gray-200' : '']">
            {{ a }} 
          </div>
        </div>
      </div>
      <div class="border-2 flex flex-col justify-center items-center rounded-[.5rem]">
        <div class="mb-[1rem]">
          <div class="text-center mt-2">
            <button class="text-[1rem]" @click="generateNums()" :disabled="!cards.length"
              v-if="!winBall.length">PLAY</button>
          </div>
          <div class="flex flex-wrap w-[40vw] gap-2 mt-2" v-auto-animate="{ stagger: 300 }">
            <div v-for="(a, i) in winBall" :key="a"
              class="border-2 border-[gray] p-1 w-[2rem] text-center rounded-[50%] ">
              {{ a }}
            </div>
          </div>
        </div>
        <div>Results</div>
        <div class="w-[50vw] flex gap-2 flex-wrap justify-center">
          <div v-for="(a, i) in showBingNums" :key="a.id">
            <div :class="['p-2 border-[.05rem] border-[gray] rounded-[.5rem]', winBall.includes(a.num) && 'bg-[green]']"
              @click="showBingData(a.num)">
              {{ a.num }}
            </div>

          </div>

        </div>
      </div>



    </div>
    <div class="text-center">
      <DialogQusar title="Lets Play bingo?" v-if="hideDialog" @playBingo="handlePlayBingo" @cardNumber="showCardNumber"
        label="Play?" />
    </div>


  </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import { useStore } from '../store/store';
const p1 = ref([1, 2, 3, 4, 5, 6, 11, 16, 21, 22, 23, 24, 25, 10, 15, 20])
const p2 = ref([1, 2, 3, 4, 5, 11, 12, 13, 14, 15, 21, 22, 23, 24, 25])
const p3 = ref([1, 5, 21, 25])
const p4 = ref([7, 8, 9, 12, 13, 14, 17, 18, 19])


const store = useStore()
const isPlay = ref(false)
const hideDialog = ref(true)
const winBall = ref([])
const ballCount = ref(30)
const cards = ref([])
const cardsIndex = ref([])
const cardNum = ref()
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

const handlePlayBingo = (play) => {
  hideDialog.value = play
  isPlay.value = true;
}

const showCardNumber = (num) => {
  cardNum.value = num
}

const showBingNums = computed(() => {
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
  return bingoNums.value

})



const generateCard = () => {
  
  for (let i = 0; i < 25; i++) {
    cards.value.push(Math.floor(Math.random() * 60) + 1)
  }
}


const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));
const generateNums = async () => {
  while (winBall.value.length < ballCount.value) {
    const random = Math.floor(Math.random() * 60) + 1;

    // Check if the number is unique before adding it
    if (!winBall.value.includes(random)) {
      winBall.value.push(random);
      console.log(`Generated: ${random}`);  // Log the generated number
    }
    // Wait for .5 second before generating the next number
    await sleep(500);  // Delay execution for 1000ms (1 second)
  }

};


const indexing = computed(() => {
  const balls = []

  cards.value.forEach((a, i) => {
    if (winBall.value.includes(a)) {
      balls.push(a)
    }
  })
  return balls;
})
</script>


<style scoped>
.main {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}

@media screen and (max-width: 430px) {
  .main {
    display: flex;
    justify-content: center;
  }

  .cards {
    display: flex;
    flex-direction: column;
  }
}
</style>