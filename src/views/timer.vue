<template>
  <div class="mainContainer" :class="{'night': store.state.isNight, 'light': !store.state.isNight}">
    <div class="text-[2rem] text-center">{{ displayDays }} Days before Christmas!!!</div>
    <div class="container">
      <div class="main">
        <div class="day">
          <h1>{{ displayDays }}:</h1>
          <small>DAYS</small>
        </div>
        <div class="day">
          <h1>{{ displayHours }}:</h1>
          <small>HOURS</small>
        </div>
        <div class="day">
          <h1>{{ displayMinutes }}:</h1>
          <small>MINUTES</small>
        </div>
        <div class="day">
          <h1>{{ displaySeconds }}</h1>
          <small>SECONDS</small>
        </div>
      </div>

      <div class="description">
        <h3>
          "🕒 I've created a custom countdown timer to mark important events.
          This dynamic timer displays the remaining days, hours, minutes, and
          seconds until a significant milestone. Stay tuned for the countdown to
          the big day!"
        </h3>
      </div>
    </div>
  </div>
</template>
  
  <script>
import { computed, onMounted, ref } from "vue";
import {useStore} from '@/store/store'
export default {
  name: "CounterTimer",
  components: {},
  setup() {
    const displayDays = ref(0);
    const displayHours = ref(0);
    const displayMinutes = ref(0);
    const displaySeconds = ref(0);
const store = useStore()
    const now = new Date();
    const end = new Date(2023, 11, 31, 23, 59, 59, 999);
    const distance = ref(end.getTime() - now.getTime());

    const calculateTimeUnits = () => {
      displayDays.value = Math.floor(distance.value / (1000 * 60 * 60 * 24));
      displayHours.value = Math.floor(
        (distance.value % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      displayMinutes.value = Math.floor(
        (distance.value % (1000 * 60 * 60)) / (1000 * 60)
      );
      displaySeconds.value = Math.floor((distance.value % (1000 * 60)) / 1000);
    };

    const showRemaining = () => {
      const timer = setInterval(() => {
        distance.value -= 1000;

        if (distance.value < 0) {
          clearInterval(timer);
          return;
        }

        calculateTimeUnits();
      }, 1000);
    };

    onMounted(() => {
      calculateTimeUnits();
      showRemaining();
    });

    return {
      displayDays,
      displayHours,
      displayMinutes,
      displaySeconds,
      now,
      end,
      distance,
      store
    };
  },
};
</script>
  
  <style scoped>

.night {
  border:2px solid gray;
  border-radius: 10px;
}
  .mainContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100%;
    width: 100%;
    background-image: url('/images/christmas.jpg');
    background-position: center center;
    background-size: cover;


  }
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40vh;
  width: auto;
}
.main {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-radius: 20px;
  white-space: nowrap;
  
}
.day small {
  margin-left: 20px;
}
h1 {
  font-size: 5rem;
  margin: 0;
  padding: 0;
}
h3 {
  line-height: 2;
}
.description {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}
@media screen and (max-width: 375px) {
  h1 {
    font-size: 1rem;
  }
  .container {
    flex-direction: column;
    justify-content: flex-start;
  }
  small {
    margin: 0 !important;
  }
  .day {
text-align: center;
margin-left: 10px;
  }
}
@media screen and (max-width: 430px) {
  .mainContainer {
    width: auto;
    flex-direction: column;
  }
 h1 {
    font-size: 2rem;
  }
  .container {
    flex-direction: column;
    margin-top: 5rem;
    padding: 0;
  }
  .description {
    padding: 0;
    width: auto;
  }
  .main {
    padding: 10px;
  }
}
</style>
  