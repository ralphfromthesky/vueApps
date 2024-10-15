<template>
  <div>
    <div class="text-center text-[2rem] font-bold">SIMPLE QUIZ APP</div>
    <div v-if="hideQuestion">
      <div v-for="(q, index) in quizQuestions" :index="q.index" bor>
          <div v-if="index === selectedQuestion" class="text-[1.8rem]">
            <div class="flex justify-end text-[1rem]">
              Question - {{ q.index }}/10
            </div>
            <div class="my-2">
              {{ q.question }}
            </div>

            <div
              v-for="(o, i) in q.options"
              :class="[
                o === selected
                  ? 'bg-gray-200 text-[#000000] border-red-200'
                  : ' text-[#7a7a7a]',
                'leading-[2.5rem] my-2 text-[1.5rem]',
              ]"
              :key="index"
              @click="selectAns(o, q.answer)"
            >
              <div>{{ o }}</div>
            </div>
            <div class="border-2 border-[red]">{{ q.answer }}</div>
          </div>
      </div>
      <div class="text-center">
        <button
          class="p-1 rounded-[.5rem] w-full border-2 border-[gray] my-5"
          :disabled="lastQuestion"
          @click="switchQuestion()"
          v-if="selectedQuestion < 9"
        >
          Next question...
        </button>
        <button
          class="p-1 rounded bg-[green] w-full text-white border-2"
          @click="submitAns()"
          v-if="selectedQuestion === 9"
        >
          Submits
        </button>
      </div>
    </div>
    <div v-else class="text-[1.6rem]">
      CONGRATULATION!!! you got {{ rightAns }} out of 10
      {{ rightAns <= 5 ? "you failed the tests" : "you pass the test!" }}
      <div class="flex justify-center mt-10" v-if="rightAns <= 5">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSerNfJr-vJiOL5j90bVNFehH8_y8U2U_DR5g&s" alt="">
      </div>
      <div class="flex justify-center mt-10" v-if="rightAns >= 6">
        <img src="https://i.pinimg.com/originals/86/d1/76/86d1767ba3ecb6af8df3e4e5dda376eb.gif" alt="">
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref, computed, watch } from "vue";
const selectedQuestion = ref(0);
const selected = ref(null);
const rightAns = ref(0);
const alreadyAnswer = ref(false);
const hideQuestion = ref(true);

const selectAns = (i, ans) => {
  selected.value = i;
  if (i === ans && !alreadyAnswer.value) {
    rightAns.value += 1;
    alreadyAnswer.value = true;
  } else if (i !== ans && alreadyAnswer.value) {
    rightAns.value -= 1;
    alreadyAnswer.value = false;
  }
};

const switchQuestion = () => {
  alreadyAnswer.value = false;
  if (!selected.value) {
    alert("please choose answer");
    return;
  }
  selectedQuestion.value++;
   selected.value = null;
};

const submitAns = () => {
  hideQuestion.value = false;
  alert("you finished the test!");
};

const lastQuestion = computed(() => {
  return selectedQuestion.value === quizQuestions.value.length - 1;
});

const quizQuestions = ref([
  {
    index: 1,
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    answer: "Paris",
  },
  {
    index: 2,
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Venus"],
    answer: "Mars",
  },
  {
    index: 3,
    question: "What is the largest mammal in the world?",
    options: ["Elephant", "Blue Whale", "Giraffe", "Great White Shark"],
    answer: "Blue Whale",
  },
  {
    index: 4,
    question: "Which element has the chemical symbol 'O'?",
    options: ["Gold", "Oxygen", "Silver", "Iron"],
    answer: "Oxygen",
  },
  {
    index: 5,
    question: "What is the boiling point of water?",
    options: ["100°C", "0°C", "50°C", "25°C"],
    answer: "100°C",
  },
  {
    index: 6,
    question: "Who wrote 'Romeo and Juliet'?",
    options: [
      "Charles Dickens",
      "Mark Twain",
      "William Shakespeare",
      "Jane Austen",
    ],
    answer: "William Shakespeare",
  },
  {
    index: 7,
    question: "What is the smallest prime number?",
    options: ["0", "1", "2", "3"],
    answer: "2",
  },
  {
    index: 8,
    question: "Which gas do plants absorb from the atmosphere?",
    options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
    answer: "Carbon Dioxide",
  },
  {
    index: 9,
    question: "What is the capital of Japan?",
    options: ["Beijing", "Seoul", "Tokyo", "Bangkok"],
    answer: "Tokyo",
  },
  {
    index: 10,
    question: "Which organ is responsible for pumping blood in the human body?",
    options: ["Liver", "Brain", "Heart", "Lungs"],
    answer: "Heart",
  },
]);
</script>

<style scoped>
.route-enter-from {
  opacity: 0;
  transform: translateX(10rem);
}

.route-enter-active {
  transition: all 0.3s ease-out;
}

.route-leave-to {
  opacity: 0;
  transform: translateX(-10rem);
}

.route-leave-active {
  transition: all 0.3s ease-in;
}
</style>
