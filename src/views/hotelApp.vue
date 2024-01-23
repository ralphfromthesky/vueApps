<template>
  <div>
    <div class="main">
      <div class="hotel-rooms-containers">
        <div class="container1">
          <div class="rooms"></div>
          <div class="rooms"></div>
          <div class="rooms"></div>
          <div class="rooms"></div>
          <div class="rooms"></div>
          <div class="rooms"></div>
          <div class="rooms"></div>
          <div class="rooms"></div>
          <div class="rooms"></div>
          <div class="rooms"></div>
          <div class="rooms"></div>
          <div class="rooms"></div>
          <div class="rooms"></div>
          <div class="rooms"></div>
          <div class="rooms"></div>
          <div class="rooms"></div>
          <div class="rooms"></div>
          <div class="rooms"></div>
          <div class="rooms"></div>
          <div class="rooms"></div>
          <div class="rooms"></div>
          <div class="rooms"></div>
          <div class="rooms"></div>
          <div class="rooms"></div>
          <div class="rooms"></div>
          <div class="rooms"></div>
          <div class="rooms"></div>
          <div class="rooms"></div>
          <div class="rooms"></div>
          <div class="rooms"></div>
        </div>
        <div class="container1">
          <div class="rooms"></div>
          <div class="rooms"></div>
          <div class="rooms"></div>
          <div class="rooms"></div>
          <div class="rooms"></div>
          <div class="rooms"></div>
          <div class="rooms"></div>
          <div class="rooms"></div>
          <div class="rooms"></div>
          <div class="rooms"></div>
          <div class="rooms"></div>
          <div class="rooms"></div>
          <div class="rooms"></div>
          <div class="rooms"></div>
          <div class="rooms"></div>
          <div class="rooms"></div>
          <div class="rooms"></div>
          <div class="rooms"></div>
          <div class="rooms"></div>
          <div class="rooms"></div>
          <div class="rooms"></div>
          <div class="rooms"></div>
          <div class="rooms"></div>
          <div class="rooms"></div>
          <div class="rooms"></div>
          <div class="rooms"></div>
          <div class="rooms"></div>
          <div class="rooms"></div>
          <div class="rooms"></div>
          <div class="rooms"></div>
        </div>
        <div class="container1">
          <div class="rooms"></div>
          <div class="rooms"></div>
          <div class="rooms"></div>
          <div class="rooms"></div>
          <div class="rooms"></div>
          <div class="rooms"></div>
          <div class="rooms"></div>
          <div class="rooms"></div>
          <div class="rooms"></div>
          <div class="rooms"></div>
          <div class="rooms"></div>
          <div class="rooms"></div>
          <div class="rooms"></div>
          <div class="rooms"></div>
          <div class="rooms"></div>
          <div class="rooms"></div>
          <div class="rooms"></div>
          <div class="rooms"></div>
          <div class="rooms"></div>
          <div class="rooms"></div>
          <div class="rooms"></div>
          <div class="rooms"></div>
          <div class="rooms"></div>
          <div class="rooms"></div>
          <div class="rooms"></div>
          <div class="rooms"></div>
          <div class="rooms"></div>
          <div class="rooms"></div>
          <div class="rooms"></div>
          <div class="rooms"></div>
        </div>
      </div>
    </div>
    <div class="modalCont" v-if="modal">
      <div class="modalCont-header">
        <h1>this is the header</h1>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "hotle",
  setup() {
    const modal = ref(false);
    const allRooms= document.querySelectorAll(".rooms");
    return {
      modal,
      allRooms
    };
  },
};
</script>

<style scoped>
.main {
  position: relative;
}
.modalCont {
  height: 100vh;
  position: fixed;
  background-color: aliceblue;
  opacity: 0.5;
  border: 2px solid red;
  width: 100vw;
  top: 0;
  left: 0;
  z-index: 1;
}
.rooms {
  height: 100px;
  width: 100px;
  border: 2px solid gray;
  background-color: aliceblue;
}
.container1 {
  display: flex;
  gap: 5px;
}
.hotel-rooms-containers {
  display: flex;
  flex-direction: column;
  width: 70vw;
}
</style>
