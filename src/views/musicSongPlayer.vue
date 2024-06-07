<template>
  <div>
    <div class="main-container" :style="{ backgroundImage: `url(${img})` }">
      <div class="songList">
        <i class="bx bx-menu" @click="$emit('showSonglist')"></i>
      </div>
      <div class="playButton">
        <i class="bx bx-play-circle" @click="playPause()" v-if="hidePlay"></i>
        <i class='bx bx-pause-circle' @click="playPause()" v-if="hidePause"></i>
      </div>
      <div class="songDetails">
        <div>
          <h3>{{ song }} - {{ artist }}</h3>
          <!-- <img :src="img" alt="" /> -->
        </div>
        <div class="audioDivs">
          <audio
            id="audioPlayer"
            controls="true"
            preload="auto"
            ref="audioPlayer"
            :src="audio"
            @ended="continuesPlay"
          ></audio>
        </div>
        <div class="controls">
          <i class="bx bx-skip-previous-circle" @click="$emit('prev')"></i>
          <i class="bx bx-skip-next-circle" @click="$emit('next')"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, watch } from "vue";
export default {
  name: "music-player",
  emits: ["showSonglist", "next", "prev", "playThisAudio"],
  props: [
    "song",
    "artist",
    "img",
    "audio",
    "currentIndex",
    "musicList",
    "playAudio",
  ],
  setup(props) {
    const isPlaying = ref(false);
    const audioPlayer = ref(null);
    const bgImage = ref("");
    const hidePlay = ref(true);
    const hidePause = ref(false)

    const resetAudio = () => {
      audioPlayer.value.currentTime = 0; // Reset the audio playback time
      audioPlayer.value.pause();
      isPlaying.value = false;
    };

    const continuesPlay = () => {
      if (props.currentIndex < props.musicList.length - 1) {
        props.playAudio(
          props.musicList[props.currentIndex + 1].title,
          props.musicList[props.currentIndex + 1].artist,
          props.musicList[props.currentIndex + 1].img,
          props.musicList[props.currentIndex + 1].audioUrl
        );
        audioPlayer.value.play();
      } else {
        props.playAudio(
          props.musicList[0].title,
          props.musicList[0].artist,
          props.musicList[0].img,
          props.musicList[0].audioUrl
        );
        audioPlayer.value.play();
      }
    };

    onMounted(() => {
      audioPlayer.value.addEventListener("ended", continuesPlay);
    });

    const playPause = () => {
      isPlaying.value = !isPlaying.value;
      const audio = document.getElementById("audioPlayer");
      if (isPlaying.value) {
        audio.play();
        hidePlay.value = false;
        hidePause.value = true
      } else {
        audio.pause();
        hidePlay.value = true;
        hidePause.value = false;
      }
    };

    watch(
      () => props.currentIndex,
      (newIndex) => {
        resetAudio();
        props.playAudio(
          props.musicList[newIndex].title,
          props.musicList[newIndex].artist,
          props.musicList[newIndex].img,
          props.musicList[newIndex].audioUrl
        );
      }
    );

    watch(bgImage, (newImage) => {
      newImage;
    });

    return {
      playPause,
      isPlaying,
      continuesPlay,
      audioPlayer,
      resetAudio,
      bgImage,
      hidePlay,
      hidePause
    };
  },
};
</script>

<style scoped>
.bx {
  font-size: 40px;
  color: rgb(187, 182, 182);
}
img {
  height: 100px;
  width: 100px;
  border-radius: 50%;
}
.main-container {
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  height: 55vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
}
.controls {
  display: flex;
  justify-content: start;
}
.songDetails {
  color: rgb(187, 182, 182);
}
.audioDivs audio {
  display: none;
}

audio::-webkit-media-controls-mute-button {
  display: none;
}
.playButton {
  display: flex;
  justify-content: end;
}
.playButton .bx {
  font-size: 150px;
}


</style>
