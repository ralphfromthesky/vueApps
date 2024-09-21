
<template>
  <div class="container">
    <div class="mainContainer">
      <h1>The Quiz</h1>
      <section class="quiz" v-if="!quizCompleted"  :class="{'night': store.state.isNight, 'light': !store.state.isNight}">
        <div class="quiz-info">
          <span class="question">{{ getCurrentQuestion.question }}</span>
          <span class="score">Score {{ score }}/{{ questions.length }}</span>
        </div>

        <div class="options">
          <label
            v-for="(option, index) in getCurrentQuestion.options"
            :key="index"
            :for="'option' + index"
            :class="`option ${
              getCurrentQuestion.selected == index
                ? index == getCurrentQuestion.answer
                  ? 'correct'
                  : 'wrong'
                : ''
            } ${
              getCurrentQuestion.selected != null &&
              index != getCurrentQuestion.selected
                ? 'disabled'
                : ''
            }`"
          >
            <input
              type="radio"
              :id="'option' + index"
              :name="getCurrentQuestion.index"
              :value="index"
              v-model="getCurrentQuestion.selected"
              :disabled="getCurrentQuestion.selected"
              @change="SetAnswer"
            />
            <span>{{ option }}</span>
          </label>
        </div>

        <button @click="NextQuestion" :disabled="!getCurrentQuestion.selected">
          {{
            getCurrentQuestion.index == questions.length - 1
              ? "Finish"
              : getCurrentQuestion.selected == null
              ? "Select an option"
              : "Next question"
          }}
        </button>
      </section>

      <section v-else>
        <h2>You have finished the quiz!</h2>
        <p>Your score is {{ score }}/{{ questions.length }}</p>
      </section>
    </div>
    <div class="description">
      <h2>Description:</h2>
      <p>
        "The Quiz" is an interactive web app that challenges your knowledge with
        multiple-choice questions. Test yourself, earn points for correct
        answers, and see how well you perform. When you've completed the quiz,
        when you answer it right it turns green if wrong turns red and your
        final score is revealed. Enjoy a fun and educational experience! <br />
        <br />
        <b> Using composition API: ref, computed</b>
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useStore } from "@/store/store";
const questions = ref([
  {
    question: "What is the capital of France?",
    answer: 1,
    options: ["Paris", "London", "Berlin", "Madrid"],
    selected: null,
  },
  {
    question: "Which planet is known as the Red Planet?",
    answer: 2,
    options: ["Earth", "Venus", "Mars", "Jupiter"],
    selected: null,
  },
  {
    question: "What is the chemical symbol for water?",
    answer: 0,
    options: ["H2O", "CO2", "O2", "N2"],
    selected: null,
  },
  {
    question: "Which gas do plants absorb from the atmosphere?",
    answer: 3,
    options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Carbon Monoxide"],
    selected: null,
  },
  {
    question: "What is the largest mammal on Earth?",
    answer: 1,
    options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
    selected: null,
  },
  {
    question: "Who wrote the play 'Romeo and Juliet'?",
    answer: 0,
    options: [
      "William Shakespeare",
      "Charles Dickens",
      "Jane Austen",
      "Leo Tolstoy",
    ],
    selected: null,
  },
  {
    question: "What is the tallest mountain in the world?",
    answer: 2,
    options: [
      "Mount Kilimanjaro",
      "Mount Everest",
      "Mount McKinley",
      "Mount Fuji",
    ],
    selected: null,
  },
  {
    question: "What is the freezing point of water in Fahrenheit?",
    answer: 3,
    options: ["32°F", "0°F", "100°F", "212°F"],
    selected: null,
  },
  {
    question: "Who painted the Mona Lisa?",
    answer: 1,
    options: [
      "Pablo Picasso",
      "Leonardo da Vinci",
      "Vincent van Gogh",
      "Michelangelo",
    ],
    selected: null,
  },
  {
    question: "Which gas makes up the majority of Earth's atmosphere?",
    answer: 0,
    options: ["Nitrogen", "Oxygen", "Carbon Dioxide", "Hydrogen"],
    selected: null,
  },
]);
const store = useStore()
const quizCompleted = ref(false);
const currentQuestion = ref(0);
const score = computed(() => {
  let value = 0;
  questions.value.map((q) => {
    if (q.selected != null && q.answer == q.selected) {
      console.log("correct");
      value++;
    }
  });
  return value;
});

const getCurrentQuestion = computed(() => {
  let question = questions.value[currentQuestion.value];
  question.index = currentQuestion.value;
  return question;
});

const SetAnswer = (e) => {
  questions.value[currentQuestion.value].selected = e.target.value;
  e.target.value = null;
};

const NextQuestion = () => {
  if (currentQuestion.value < questions.value.length - 1) {
    currentQuestion.value++;
    return;
  }

  quizCompleted.value = true;
};
</script>
<style scoped>
.light {
  box-shadow:  17px 17px 15px #868686,
             -17px -17px 15px #ffffff; 
}
.night {
  border:2px solid gray;
  border-radius: 10px;
}
.container {
  display: flex;
  align-items: center;
  justify-content: center;
}
.mainContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  color: black;
  width: 40vw;
}
.description {
  width: 20vw;
}

h1 {
  font-size: 2rem;
  margin-bottom: 2rem;
}

.quiz {
  background-color: white;
  padding: 1rem;
  width: 100%;
  max-width: 640px;
  border-radius: 20px;
}

.quiz-info {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
}

.quiz-info .question {
  color: black;
  font-size: 1.25rem;
}

.quiz-info.score {
  color: #fff;
  font-size: 1.25rem;
}

.options {
  margin-bottom: 1rem;
}

.option {
  padding: 1rem;
  display: block;
  background-color: rgb(187, 181, 181);
  margin-bottom: 0.5rem;
  border-radius: 0.5rem;
  cursor: pointer;
}

.option:hover {
  background-color: #2d213f;
  color: white;
}

.option.correct {
  background-color: #2cce7d;
}

.option.wrong {
  background-color: #ff5a5f;
}

.option:last-of-type {
  margin-bottom: 0;
}

.option.disabled {
  opacity: 0.5;
}

.option input {
  display: none;
}

button {
  appearance: none;
  outline: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem 1rem;
  background-color: #2cce7d;
  color: #2d213f;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 1.2rem;
  border-radius: 0.5rem;
}

button:disabled {
  opacity: 0.5;
}

h2 {
  font-size: 2rem;
  margin-bottom: 2rem;
  text-align: center;
}

@media screen and (max-width: 375px) {
  .container {
    flex-direction: column;
  }
  .quiz {
    width: 100vw;
  }
}

@media screen and (max-width: 430px) {
  .container {
    flex-direction: column;
  }
  .mainContainer {
    width: auto;
  }
}
</style>
