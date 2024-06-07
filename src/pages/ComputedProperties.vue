<template>
  <div>
    <h1>my complete name is - {{ firstName }} {{ lastName }} -</h1>
    <h1>my complete name is from computed {{ fullName }}</h1>
    <h1>my complete name is from method {{ thisFullName() }}</h1>
    <h1>the total is {{ total }}</h1>
    <button @click="items.push({ id: 4, items: 'guitar', price: 500 })">
      total
    </button>

    <template v-for="item in items" :key="item.id">
      <h1 v-if="item.price > 100">{{ item.items }} {{ item.price }}</h1>
      <h1 v-for="item in expensiveItems" :key="item.id">
        {{ item.items }} {{ item.price }}
      </h1>
    </template>

    <br>
    <input type="text" v-model="count">
    {{ counting }} / 200
  </div>
</template>

<script>
import { computed, ref } from 'vue';
export default {
  setup () {
    const count = ref('')
    const counting = computed(() => {
      if(count.value.length === 10) {
       count.value = ''

      }
      return count.value.length

    })
    return {
  count,
  counting
    }
  },
  data() {

    return {
      firstName: "ralph",
      lastName: "santolorin",
      items: [
        {
          id: 1,
          items: "toys",
          price: 100,
        },
        {
          id: 2,
          items: "piano",
          price: 200,
        },
        {
          id: 3,
          items: "ball",
          price: 300,
        },
        {
          id: 4,
          items: "ring",
          price: 400,
        },
      ],
    };
  },
  methods: {
    thisFullName() {
      return `${this.firstName} ${this.lastName}`;
    },
  },
  computed: {
    fullName() {
      return `${this.firstName} ${this.lastName}`;
    },
    total() {
      return this.items.reduce((a, b) => (a = a + b.price), 0);
    },
    expensiveItems() {
      return this.items.filter((a) => a.price > 100);
    },
  },
};
</script>

<style></style>
