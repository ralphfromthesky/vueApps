<template>
  <div class="mainHeader">
    <div class="text-[1rem]">
      VUE JS - Ralph <span><i class="bx bxs-cat"></i></span>
    </div>

    <div class="dayNightVue flex items-center">
      <a href="cv.pdf" download="cv.pdf">
        <div>
          <img src="https://cdn-icons-png.flaticon.com/512/8347/8347432.png" class="h-[2rem]" alt="" srcset="">
        </div>
      </a>

      <dayNightVue />
    </div>
  </div>
</template>

<script>
import dayNightVue from "./dayNight.vue";

export default {
  name: "main-header",
  components: {
    dayNightVue,
  },
  setup() {

    return {

    };
  },
};
</script>

<style scoped>
.mainHeader {
  height: 10vh;
  border-bottom: 2px solid rgb(190, 185, 185);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.mainHeader span .bx {
  color: rgb(252, 102, 3);
  font-size: 40px;
}

@media screen and (max-width: 375px) {
  .mainHeader {
    padding-left: 15%;
  }
}
</style>
