<template>
  <div class="music-app-container">
    <div class="main-container"  :class="{'night': store.state.isNight, 'light': !store.state.isNight}">
      <musicSongListVue />
    </div>
    
    <div class="description">
      <h3>Description:</h3>
      <br />
      <p>
        Discover and enjoy your favorite music with our easy-to-use app. Browse
        songs, switch tracks, and immerse yourself in the world of music
        effortlessly. Your go-to companion for all your musical moments.
      </p>
      <br />
      <h3>
        Using Compostion API, ref, watch, component events-emits, onMounted and
        props.
      </h3>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import musicSongListVue from "./musicSongList.vue";
import { useStore } from '@/store/store';
export default {
  name: "music-app",
  components: {
    musicSongListVue,
  },
  setup() {
    const store = useStore();
    return {
      store
    };
  },
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
.music-app-container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
}
.main-container {
  width: 20vw;
  height: 60vh;
  padding: 20px;
  border-radius: 10px;
  background-color: black;
}
.description {
  width: 25%;
}
@media screen and (max-width: 375px) {
  .music-app-container {
    flex-direction: column;
  }
  .main-container {
    width: 70vw;
  }
  .description {
  padding-left: 15px;
  }
}
</style>
