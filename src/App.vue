<template>
  <div class="mainApp" :class="{'night': dayNight, 'light': !dayNight}">
    <div class="sidebarContainer">
      <mainSideBarLabelVue class="sidebarlabel" :class="slideSidebar ? 'slideForward': 'slideBackward' " @slide-this-back="slideBack"/>
      <mainSidebarVue class="sidebaricon" @slide-this="slideForward" :class="slideSidebar ? 'slideBackward': ''"/>
    </div>
    <div class="container" :class="slideSidebar ? 'paddingLeft': 'paddingRight'" >
      <mainHeaderVue />
 
      <mainBodyVue />
      <mainFooterVue />
    </div>
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
      return store.state.isNight
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

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Sometype Mono', monospace;
}
.night {
  background-color: black;
  color: white  !important;
  transition: .3s ease;
}
.light {
  background-color: white;
  color: black !important;
  transition: .3s ease;
}
.mainApp {
  display: flex;

}
.container {
  width: 100%;
  margin-left: 5%;
  transition: .4s;
}
.sidebarContainer {
  position: relative;
  
}
.sidebaricon {
  position: absolute;
  transition: .3s ease;
}
.sidebarlabel {
  position: absolute;
  left: -10vw;
  transition: .3s ease;
}
.slideForward {
  transform: translateX(100%);
}
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
@media screen and (max-width: 430px) {

  .sidebarlabel {
    left: -30vw;
  }
  .sidebarContainer {
    z-index: 1;
  }
}

</style>