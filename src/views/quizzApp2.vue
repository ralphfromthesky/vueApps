<template>
  <div class="main mx-[10vw]">
    <div class="border-2 p-2 rounded-[.5rem]">
      <div class="text-center text-[2rem] font-bold">SIMPLE QUIZ APP</div>
      <div v-if="hideQuestion">
        <div v-for="(q, index) in quizQuestions" :index="q.index" bor>
          <div v-if="index === selectedQuestion" class="text-[1.6rem]">
            <div class="flex justify-end text-[1rem]">
              Question - {{ q.index }}/10
            </div>
            <div class="my-2 font-bold">
              {{ q.question }}
            </div>

            <div
              v-for="(o, i) in q.options"
              :class="[
                o === selected
                  ? 'bg-gray-200 text-[#000000] border-red-200'
                  : ' text-[#7a7a7a]',
                'leading-[2.5rem] my-2 text-[1.4rem] hover:bg-[#f8f5f5] hover:text-[#000000]',
              ]"
              :key="index"
              @click="selectAns(o, q.answer)"
            >
              <div>{{ o }}</div>
            </div>
            <!-- <div class="border-2 border-[red]">{{ q.answer }}</div> -->
          </div>
        </div>
        <div class="text-center">
          <button
            :class="['p-1 rounded-[.5rem] w-full border-2 my-5', selected ? 'bg-[#c7c5c5] transition-all duration-300 ease-in-out' : 'border-[white]']"
            :disabled="lastQuestion"
            @click="switchQuestion()"
            v-if="selectedQuestion < 9 && selected"
          >
            Next question...
          </button>
          <button
            class="p-1 rounded bg-[green] w-full text-white border-2"
            @click="submitAns()"
            v-if="selectedQuestion === 9 && selected"
          >
            Submits
          </button>
        </div>
      </div>
      <div v-else class="text-[1.6rem] text-center">
        CONGRATULATION!!! you got {{ rightAns }} out of 10
        {{
          rightAns <= 5
            ? "you failed the tests &#128516;"
            : "you pass the test! &#128512;"
        }}
        <div class="flex justify-center mt-10" v-if="rightAns <= 5">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSerNfJr-vJiOL5j90bVNFehH8_y8U2U_DR5g&s"
            alt=""
          />
        </div>
        <div class="flex justify-center mt-10" v-if="rightAns >= 6">
          <img
            src="https://i.pinimg.com/originals/86/d1/76/86d1767ba3ecb6af8df3e4e5dda376eb.gif"
            alt=""
          />
        </div>
      </div>
    </div>
    <div class="mt-[2rem] text-center">
      <h2>Description:</h2>
      <p>
        "The Quiz" is an interactive web app that challenges your knowledge with
        multiple-choice questions. Test yourself, earn points for correct
        answers, and see how well you perform. When you've completed the quiz,
        when you answer it right it turns green if wrong turns red and your
        final score is revealed. Enjoy a fun and educational experience! <br />
        <br />
        <b> Using composition API: ref, computed, watch</b>
      </p>
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
    question: "Who is the Greek goddess of wisdom and warfare?",
    options: ["Aphrodite", "Athena", "Hera", "Artemis"],
    answer: "Athena"
  },
  {
    index: 2,
    question: "In Roman mythology, who is the counterpart of the Greek goddess Demeter, goddess of the harvest?",
    options: ["Ceres", "Venus", "Juno", "Minerva"],
    answer: "Ceres"
  },
  {
    index: 3,
    question: "Which Norse goddess is known as the goddess of love, beauty, and fertility?",
    options: ["Frigg", "Hel", "Freya", "Sif"],
    answer: "Freya"
  },
  {
    index: 4,
    question: "Who is the Hindu goddess of wealth and prosperity?",
    options: ["Parvati", "Durga", "Lakshmi", "Saraswati"],
    answer: "Lakshmi"
  },
  {
    index: 5,
    question: "In Egyptian mythology, which goddess is associated with motherhood and magic?",
    options: ["Isis", "Bastet", "Nephthys", "Hathor"],
    answer: "Isis"
  },
  {
    index: 6,
    question: "Which goddess in Greek mythology is known as the queen of the gods and goddess of marriage?",
    options: ["Hera", "Aphrodite", "Demeter", "Persephone"],
    answer: "Hera"
  },
  {
    index: 7,
    question: "Who is the Aztec goddess of fertility and agriculture?",
    options: ["Chalchiuhtlicue", "Tlazolteotl", "Coatlicue", "Xochiquetzal"],
    answer: "Xochiquetzal"
  },
  {
    index: 8,
    question: "In Celtic mythology, who is the goddess of the river Boyne and knowledge?",
    options: ["Brigid", "Danu", "Morrigan", "Boann"],
    answer: "Boann"
  },
  {
    index: 9,
    question: "Who is the Shinto goddess of the sun and the universe?",
    options: ["Amaterasu", "Inari", "Izanami", "Hachiman"],
    answer: "Amaterasu"
  },
  {
    index: 10,
    question: "In Greek mythology, who is the goddess of the hunt and the moon?",
    options: ["Hestia", "Athena", "Artemis", "Demeter"],
    answer: "Artemis"
  }
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

@media screen and (max-width: 500px) {
  .main {
    margin: 0 2vw 0 2vw;
  }
}
</style>
