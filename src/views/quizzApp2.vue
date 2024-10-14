<template>
  <div>
    <div>QUIZ APP</div>
    <div v-for="(q, index) in quizQuestions" :index="q.index">
      <div v-if="index === selectedQuestion">
        <div>Question - {{ q.index }}</div>
        <div>
          {{ q.question }}
        </div>
        <div>
          <div @click="selectAns(q.options[0])" :class="selected ? 'border-2 border-[gray] bg-[#dddfdd]' : ''">
            A.{{ q.options[0] }}
          </div>
          <div @click="selectAns(q.options[1])" :class="selected ? 'border-2 border-[gray] bg-[#dddfdd]' : ''">
            b.{{ q.options[1] }}
          </div>
          <div @click="selectAns(q.options[2])">
            C.{{ q.options[2] }}
          </div>
          <div @click="selectAns(q.options[3])">
            D.{{ q.options[3] }}
          </div>
        </div>

        <button
          class="p-1 rounded border-2"
          :disabled="lastQuestion"
          @click="switchQuestion()"
        >
          next Question
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref, computed } from "vue";
const selectedQuestion = ref(0);
const selected = ref(null)

const switchQuestion = () => {
  selectedQuestion.value++;
};

const selectAns = (ans) =>{
    selected.value = ans
}

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
