<template>
  <div>
    <h1>this is watchers</h1>
    <h1>Volume Tracker - (0-20)</h1>
    <small v-if="volume === alertVolume">Danger</small>
    <h2>the volume is {{ volume }}</h2>
    <div>
      <button @click="volume += 1">INCREMENT</button>
      <button @click="volume -= 1">DECREMENT</button>
    </div>
  </div>
</template>

<!-- <script>
export default {
  data() {
    return {
      volume: 0,
      alertVolume: 16,
    };
  },
  methods: {},
  computed: {},
  watch: {
    volume(a, b) {
      if (a > b && a === 16) {
        alert("your volume is high might damage your hearing");
      }
    },
  },
};
</script> -->

<script>
import { ref, watch } from 'vue';

export default {
  setup() {
    const volume = ref(0);
    const alertVolume = ref(16);

    watch(volume, (newVolume, oldVolume) => {
      if (newVolume > oldVolume && newVolume === alertVolume.value) {
        alert("Your volume is high and might damage your hearing!");
      }
    });

    return {
      volume,
      alertVolume,
    };
  },
};
</script>


<style></style>


