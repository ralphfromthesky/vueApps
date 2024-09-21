<template>
  <div class="main-container z-10">
    <div class="container">
      <div class="calculator">
        <div class="btn display">{{ current || "0" }}</div>
        <div class="btn" @click="clear">AC</div>
        <div class="btn" @click="sign">+/-</div>
        <div class="btn" @click="percent">%</div>
        <div class="btn operator" @click="add">+</div>
        <div class="btn" @click="append('7')">7</div>
        <div class="btn" @click="append('8')">8</div>
        <div class="btn" @click="append('9')">9</div>
        <div class="btn operator" @click="minus">-</div>
        <div class="btn" @click="append('4')">4</div>
        <div class="btn" @click="append('5')">5</div>
        <div class="btn" @click="append('6')">6</div>
        <div class="btn operator" @click="times">*</div>
        <div class="btn" @click="append('1')">1</div>
        <div class="btn" @click="append('2')">2</div>
        <div class="btn" @click="append('3')">3</div>
        <div class="btn operator" @click="divide">/</div>
        <div class="btn zero" @click="append('0')">0</div>
        <div class="btn" @click="dot">.</div>
        <div class="btn operator" @click="equal">=</div>
      </div>
    </div>
    <div class="descriptions">
      <p>
        <b> Calculator</b> <br> <br> This sleek and user-friendly calculator provides you with
        essential mathematical functions at your fingertips. It allows you to
        perform addition, subtraction, multiplication, and division, making it
        perfect for both simple and complex calculations. <br><br><b> Key Features:</b> <br><br> Clear
        (AC): Reset your calculations with a single click. <br> Sign (+/-): Quickly
        switch between positive and negative numbers. <br> Percent (%): Calculate
        percentages effortlessly. <br> Operators: Addition (+), Subtraction (-),
        Multiplication (*), and Division (/) buttons are readily available.
        Digits: Enter numbers from 0 to 9 with ease. <br> Decimal (.): Add decimal
        points to your numbers as needed. <br> Equal (=): Obtain the results of your
        calculations at the press of a button. Whether you need to crunch
        numbers for work, school, or everyday tasks, this calculator simplifies
        the process, ensuring accurate results every time.
      </p>
    </div>
  </div>
</template>
  
  <script>
import { ref } from "vue";

export default {
  name: "calculator",
  setup() {
    const current = ref("");
    const previous = ref(null);
    const operator = ref(null);
    const operatorClicked = ref(false);

    const clear = () => {
      current.value = "";
    };

    const sign = () => {
      current.value =
        current.value.charAt(0) === "-"
          ? current.value.slice(1)
          : `-${current.value}`;
    };

    const percent = () => {
      current.value = `${parseFloat(current.value) / 100}`;
    };

    const append = (number) => {
      if (operatorClicked.value) {
        current.value = "";
        operatorClicked.value = false;
      }
      current.value = `${current.value}${number}`;
    };

    const dot = () => {
      if (current.value.indexOf(".") === -1) {
        append(".");
      }
    };

    const setPrevious = () => {
      previous.value = current.value;
      operatorClicked.value = true;
    };

    const divide = () => {
      operator.value = (a, b) => a / b;
      setPrevious();
    };

    const times = () => {
      operator.value = (a, b) => a * b;
      setPrevious();
    };

    const minus = () => {
      operator.value = (a, b) => a - b;
      setPrevious();
    };

    const add = () => {
      operator.value = (a, b) => a + b;
      setPrevious();
    };

    const equal = () => {
      if (operator.value) {
        current.value = `${operator.value(
          parseFloat(previous.value),
          parseFloat(current.value)
        )}`;
        previous.value = null;
        operatorClicked.value = true;
      }
    };

    return {
      current,
      append,
      clear,
      sign,
      percent,
      dot,
      times,
      divide,
      add,
      minus,
      equal,
    };
  },
};
</script>
  
  <style scoped>
.main-container {
  display: flex;
  width: 60vw;

}
.container {
  padding: 5px;
  border-radius: 5px;
}
.calculator {
  margin: 0 auto;
  width: auto;
  font-size: 40px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(50px, auto);
  gap: 5px;
  background-color: black;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 11px 11px 22px #797979, -11px -11px 22px #ffffff;

}

.display {
  grid-column: 1 / 5;
  background-color: #472f2f;
  color: black;
}

.zero {
  grid-column: 1 / 3;
}

.btn {
  background-color: #f2f2f2;
  border: 1px solid #999;
  border-radius: 10px;
}

.operator {
  background-color: orange;
  color: white;
}
.descriptions {
  padding: 20px;
}

@media screen and (max-width: 375px){
  .calculator {
        width: 250px;
    }

}
</style>
  