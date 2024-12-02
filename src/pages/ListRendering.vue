<template>
  <div>
    <div>List Rendering</div> <br>
    <div v-for="name in names" :key="name">{{ name }}</div>
    <h4 v-for="(name, index) in names" :key="name">{{ index }} {{ name }}</h4>
    <h4 v-for="name in fullNames" :key="name.firstName" :style="dataPropertyStyle" :class="'propertyClass'">
      {{ name.firstName }}{{ name.lastName }}
    </h4>

    <div v-for="student in students" :key="student.name">
      <div>{{ student.name }} </div>
      <div v-for="subject in student.subjects" :key="subject"> {{ subject }}</div>
    </div>
    <div v-for="(value, index, key) in myInfo" :key="value">{{ key }} {{ index }} {{ value }}</div>

    <div class="mt-[5vh] mb-[5vh]">
      <div>destructuring</div>
      <div v-for="({ name, email }, i) in users" :key="email">
        {{ name }} - {{ email }} {{ i + 1 }}
      </div>

    </div>

    <div class="p-2">
      <div>Looping an array inside an array v-for</div>
      <div>
        <div v-for="(a, i) in arrayWithObjectsInsideArray" :key="a.id" class="border-2 border-[red]">
          {{ a.group }}

          <div class="border-2 border-[blue]">
            <div v-for="(b, i) in a.members" :key="b.id">
              {{ b.name }}
            </div>
          </div>
        </div>
      </div>


    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const arrayWithObjectsInsideArray = ref([
  {
    id: 1,
    group: 'Group A',
    members: [
      { id: 1, name: 'Alice', role: 'Leader' },
      { id: 2, name: 'Bob', role: 'Member' },
      { id: 3, name: 'Charlie', role: 'Member' }
    ]
  },
  {
    id: 2,
    group: 'Group B',
    members: [
      { id: 1, name: 'David', role: 'Leader' },
      { id: 2, name: 'Eve', role: 'Member' }
    ]
  },
  {
    id: 3,
    group: 'Group C',
    members: [
      { id: 1, name: 'Frank', role: 'Leader' },
      { id: 2, name: 'Grace', role: 'Member' },
      { id: 3, name: 'Hannah', role: 'Member' },
      { id: 4, name: 'Isaac', role: 'Member' }
    ]
  }
]);


const users = ref([
  { name: 'Alice', email: 'alice@example.com' },
  { name: 'Bob', email: 'bob@example.com' },
  { name: 'Charlie', email: 'charlie@example.com' },
  { name: 'David', email: 'david@example.com' },
  { name: 'Eve', email: 'eve@example.com' },
  { name: 'Frank', email: 'frank@example.com' },
  { name: 'Grace', email: 'grace@example.com' },
]);

const names = ref(["ralph", "shenron", "gadwin"]);
const fullNames = ref([
  { firstName: "ralph ", lastName: "santolorin" },
  { firstName: "shenron ", lastName: "santolorin" },
  { firstName: "gadwin ", lastName: "santolorin" },
]);

const dataPropertyStyle = ref({
  color: "red",
});

const students = ref([
  {
    name: "ciara sotto",
    subjects: ["science", "math"],
  },
  {
    name: "g toengi",
    subjects: ["english", "filipino"],
  },
]);

const myInfo = ref({
  name: "ralph santolorin",
  work: "web developer",
  salary: 35000,
});
</script>
<style>
div,
div,
h4 {
  font-size: 15px;
}

.propertyClass {
  background-color: pink;
}
</style>
