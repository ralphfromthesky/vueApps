<template>
  <div>
    <div class="goToMusicPlayer">
      <i
        class="bx bx-caret-right"
        @click="(showSongPlayer = true), (showSongList = false), (arrow = false)"
        v-show="arrow"
      
      ></i>
    </div>
    <div
      class="musicSongList-container"
      v-for="music in musicList"
      :key="music"
      v-show="showSongList"
    >
      <h3
        @click="
          (showSongPlayer = true),
            (showSongList = false),
            playAudio(music.title, music.artist, music.img, music.audioUrl)
        "
      >
        {{ music.title }}
      </h3>
    </div>
    <musicSongPlayerVue
      v-show="showSongPlayer"
      @showSonglist="(showSongList = true), (showSongPlayer = false), (arrow = true)"
      :song="songName"
      :artist="artistName"
      :img="songImg"
      :audio="audioSrc"
      :songList="musicList[currentIndex]"
      :currentIndex="currentIndex"
      :musicList="musicList"
      @next="nextSong"
      @prev="prevSong"
      @playThisAudio="playAudio"
      :playAudio="playAudio"
    />
  </div>
</template>

<script>
import { ref, inject } from "vue";
import musicSongPlayerVue from "./musicSongPlayer.vue";
export default {
  components: {
    musicSongPlayerVue,
  },
  name: "song-list",
  emits: ["showSongPlayer"],
  setup() {
    const songName = ref("");
    const artistName = ref("");
    const audioSrc = ref("");
    const currentIndex = ref(0);
    const songImg = ref(null);
    const showSongPlayer = ref(false);
    const showSongList = ref(true);
    const musicList = inject("musicList");
    const arrow = ref(true);

    const playAudio = (song, artist, img, audioUrl) => {
      songName.value = song;
      artistName.value = artist;
      songImg.value = img;
      audioSrc.value = audioUrl;
      arrow.value = false;
    };

    const nextSong = () => {
      if (currentIndex.value < musicList.value.length - 1) {
        currentIndex.value += 1;
        console.log("paying next:" + currentIndex.value);
        playAudio(
          musicList.value[currentIndex.value].title,
          musicList.value[currentIndex.value].artist,
          musicList.value[currentIndex.value].img,
          musicList.value[currentIndex.value].audioUrl
        );
      } else {
        currentIndex.value = 0;
      }

      playAudio(
        musicList.value[currentIndex.value].title,
        musicList.value[currentIndex.value].artist,
        musicList.value[currentIndex.value].img,
        musicList.value[currentIndex.value].audioUrl
      );
    };

    const prevSong = () => {
      if (currentIndex.value > 0) {
        currentIndex.value -= 1;
        console.log("paying prev:" + currentIndex.value);
      } else {
        currentIndex.value = musicList.value.length - 1;
      }
      playAudio(
        musicList.value[currentIndex.value].title,
        musicList.value[currentIndex.value].artist,
        musicList.value[currentIndex.value].img,
        musicList.value[currentIndex.value].audioUrl
      );
    };

    return {
      songName,
      songImg,
      artistName,
      musicList,
      showSongPlayer,
      showSongList,
      playAudio,
      nextSong,
      currentIndex,
      prevSong,
      audioSrc,
      arrow,
    };
  },
};
</script>

<style scoped>
.bx {
  color: white;
  font-size: 25px;
}
h3 {
  cursor: pointer;
}
.musicSongList-container {
  color: white;
}
.goToMusicPlayer {
  display: flex;
  justify-content: end;
}
</style>
