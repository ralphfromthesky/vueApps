<template>
  <div>
    <div>QUIZ APP {{ rightAns }}</div>
    <div v-for="(q, index) in quizQuestions" :index="q.index" v-if="hideQuestion">
      <div v-if="index === selectedQuestion">
        <div>Question - {{ q.index }}/10 - {{ selectedQuestion }}</div>
        <div>
          {{ q.question }}
        </div>

        <div
          v-for="(o, i) in q.options"
          :class="[
            o === selected ? 'bg-gray-200 border-red-200' : '',
            'leading-[2.5rem]',
          ]"
          :key="index"
          @click="selectAns(o, q.answer)"
        >
          <div>{{ o }}</div>
        </div>
        <!-- <div class="border-2 border-[red]">{{ q.answer }}</div> -->
        <button
          class="p-1 rounded border-2"
          :disabled="lastQuestion"
          @click="switchQuestion()"
          v-if="selectedQuestion < 9"
        >
          Next question...
        </button>
        <button
          class="p-1 rounded border-2"
          :disabled="lastQuestion"
          @click="submitAns()"
          v-if="selectedQuestion === 9"
        >
          Submits
        </button>
      </div>
    </div>
    <div v-else>

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
  //selected.value = null
};

const submitAns = () => {
  hideQuestion.value = false;
  alert('fdasdf')
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

<style lang="scss" scoped></style>
