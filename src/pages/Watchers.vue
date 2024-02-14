<template>
  <div>
    <div class="main-watchers">
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
      <div>
        <h1>{{ name }}</h1>
        <button @click="changeName">change</button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, watch } from "vue";

export default {
  setup() {
    const volume = ref(0);
    const alertVolume = ref(16);
    const name = ref('ralph');

    watch(volume, (newVolume, oldVolume) => {
      if (newVolume > oldVolume && newVolume === alertVolume.value) {
        alert("Your volume is high and might damage your hearing!");
      }
    });


    watch(name,(newValue, oldValue) => {
      console.log(`this is the ${oldValue} and this is the ${newValue}`)
    })

    const changeName = () => {
      name.value = 'santolorin'
    }

    return {
      volume,
      alertVolume,
      name,
      changeName
    };
  },
};
</script>

<style>
.main-watchers {
  display: flex;
  border: 1px solid red;
  width: 70vw;
  justify-content: space-between;
}
</style>
