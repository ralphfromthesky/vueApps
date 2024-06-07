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
      <h1>{{ data }}</h1>
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
    const data = ref(1000)

    watch(volume, (newVolume, oldVolume) => {
      if (newVolume > oldVolume && newVolume === alertVolume.value) {
        alert("Your volume is high and might damage your hearing!");
      }
    });


    watch(name,(newValue, oldValue) => {
      console.log(`this is the ${oldValue} and this is the ${newValue}`)
    })
    
    watch(data, (newValue, oldValue) => {
      alert(`${oldValue} - ${newValue}`)
    })

    const changeName = () => {
      name.value = 'santolorin';
      data.value ++;
    }

    return {
      volume,
      alertVolume,
      name,
      changeName,
      data
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
