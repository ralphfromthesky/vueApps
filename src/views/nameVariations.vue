<template>
  <div class="main">
    <div class="mainContainer">
      <div class="mainInput">
        <div class="inputs">
          <label for="">whats your name?</label>
          <input type="text" v-model="name" />
        </div>
        <table class="table" border="2">
          <thead>
            <tr>
              <th width="200px">Variation</th>
              <th width="103px">Result</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Number of characters</td>
              <td>{{ charlength }}</td>
            </tr>
            <tr>
              <td>First character</td>
              <td>{{ firstChar }}</td>
            </tr>
            <tr>
              <td>Last character</td>
              <td>{{ lastChar }}</td>
            </tr>
            <tr>
              <td>Lower case</td>
              <td>{{ lowerCase }}</td>
            </tr>
            <tr>
              <td>Upper case</td>
              <td>{{ upperCase }}</td>
            </tr>
            <tr>
              <td>Capitalize</td>
              <td>{{ capitalized }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="description">
        <h1>Description: </h1>
        <p>
          very simple name variation that counts name length, upper case,
          lowercase, last character, first character and capitalized
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, ref, watch } from "vue";
export default {
  name: "nameVar",
  setup() {
    const name = ref("");
    const answer1 = ref("");
    const answer2 = ref("");
    const answer3 = ref("");
    const answer4 = ref("");
    const answer5 = ref("");
    const answer6 = ref("");

    const charlength = computed(() => {
      return (answer1.value = name.value.length > 0 ? name.value.length : "");
    });
    const firstChar = computed(() => {
      return (answer2.value = name.value.charAt(0));
    });
    const lastChar = computed(() => {
      return (answer3.value = name.value[name.value.length - 1]);
    });
    const lowerCase = computed(() => {
      return (answer4.value = name.value.toLowerCase());
    });
    const upperCase = computed(() => {
      return (answer5.value = name.value.toUpperCase());
    });
    const capitalized = computed(() => {
        if(name.value)
      return (answer6.value =
        name.value.charAt(0).toUpperCase() +
        name.value.substring(1).toLowerCase());
    });
    return {
      name,
      answer1,
      charlength,
      answer2,
      firstChar,
      answer3,
      lastChar,
      lowerCase,
      answer5,
      upperCase,
      answer6,
      capitalized,
    };
  },
};
</script>

<style scoped>
.main {
    height: 35vw;
    display: flex;
    justify-content: center;
    align-items: center;
}
.mainContainer {
    display: flex;
    align-items: center;
    gap: 10px;
}
.description {
    width:30vw;
}
th {
    background-color: greenyellow;
}
input {
  border: 1px solid gray;
}
@media screen and (max-width: 430px) {
  .mainContainer {
    margin-top: 20vh;
  }
}
</style>
