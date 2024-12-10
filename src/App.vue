<template>
  <div class="mainApp" :class="{ 'night': dayNight, 'light': !dayNight }">
    <div class="sidebarContainer">
      <mainSideBarLabelVue class="sidebarlabel" :class="slideSidebar ? 'slideForward' : 'slideBackward'"
        @slide-this-back="slideBack" />
      <mainSidebarVue class="sidebaricon" @slide-this="slideForward" :class="slideSidebar ? 'slideBackward' : ''" />
    </div>
    <!-- <div class="container" :class="slideSidebar ? 'paddingLeft': 'paddingRight'" > -->
    <div class="w-screen pl-[5rem] pr-[1rem]" :class="slideSidebar ? 'paddingLeft' : 'paddingRight'">
      <mainHeaderVue />
      <mainBodyVue />
    </div>
    <mainFooterVue />
  </div>
</template>

<script>
import { useStore } from "@/store/store";
import { computed, ref } from "vue";
import mainBodyVue from "./components/mainBody.vue";
import mainFooterVue from "./components/mainFooter.vue";
import mainHeaderVue from "./components/mainHeader.vue";
import mainSidebarVue from "./components/mainSidebar.vue";
import mainSideBarLabelVue from "./components/mainSideBarLabel.vue";
export default {
  name: "app",
  components: {
    mainHeaderVue,
    mainFooterVue,
    mainBodyVue,
    mainSidebarVue,
    mainSideBarLabelVue,
  },

  setup() {
    const store = useStore();
    const dayNight = computed(() => {
      return store.state.newStore.isNight
    })
    const slideSidebar = ref(false);

    const slideForward = () => {
      slideSidebar.value = true;
    }
    const slideBack = () => {
      slideSidebar.value = false;
    }

    return {
      slideSidebar,
      slideForward,
      slideBack,
      store,
      dayNight
    };
  },

};
</script>

<style scoped>
/* @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&display=swap'); */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Sometype Mono', monospace;
  /* font-family: 'JetBrains Mono', monospace; */


}


.night {
  background-color: black;
  color: white !important;
  transition: .3s ease;
}

.light {
  background-color: white;
  color: black !important;
  transition: .3s ease;
}

.mainApp {
  display: flex;
  flex-direction: column;
  position: relative;

}

.container {
  width: auto;
  margin-left: 5%;
  transition: .4s;
  border: 3px solid blue;
  width: 50vw !important;
  background-color: red;
}

.sidebarContainer {
  position: relative;
  z-index: 1;
}

.sidebaricon {
  position: absolute;
  transition: .3s ease;
}

.sidebarlabel {
  position: fixed;
  left: -16.5vw;
  transition: .4s ease;
  height: 100%;
  z-index: 5;
}

.slideForward {
  transform: translateX(115%);
}

@media screen {}

.slideBackward {
  transform: translateX(-120%);
}

.paddingLeft {
  padding-left: 6%;
}

.bx {
  cursor: pointer;
  color: rgb(59, 57, 57);
}

@media screen and (max-width: 1900px) {
  .slideForward {
    transform: translateX(16vw);
  }
}

@media screen and (max-width: 1501px) {
  .slideForward {
    transform: translateX(16vw);
  }
}

@media screen and (max-width: 430px) {

  .sidebarlabel {
    left: -30vw;
  }

  .sidebarContainer {
    z-index: 1;
  }

  .slideForward {
    transform: translateX(45%);
  }
}
</style>
