<template>
  <div class="mainSidebarLabel">
    <div class="label">
      <div class="menu-bx">
        <h4>Vue js Tuts</h4>
        <i
        class="bx bx-menu"
        id="sidebarIcon"
        @click="$emit('slideThisBack')"
      ></i>
      </div>
      
      <cloudBackgroundVue class="cloudBg" />
      <div class="labeledLink">
        <router-link to="/todo"><h3>Vbind</h3></router-link>
        <router-link to="/con"><h3>Conditional Rendering</h3></router-link>
        <router-link to="/listRendering"><h3>List Rendering</h3></router-link>
        <router-link to="/conditionallistRendering"
          ><h3>Conditional List Rendering</h3></router-link
        >
        <router-link to="/method"><h3>Method</h3></router-link>
        <router-link to="/event"><h3>Event Handling</h3></router-link>
        <router-link to="/form"><h3>Form Handling</h3></router-link>
        <router-link to="/computed"><h3>Computed Properties</h3></router-link>
        <router-link to="/watchers"><h3>Watchers</h3></router-link>
        <router-link to="/components"> <h3>Components</h3></router-link>
        <router-link to="/http"><h3>HTTP Get Request</h3></router-link>
        <router-link to="/https"> <h3>HTTP</h3></router-link>
        <router-link to="/PropsAndCompositionAPiI">
          <h3>Props and Composition API</h3></router-link
        >
        <router-link to="/props"><h3>Props</h3></router-link>
        <router-link to="/provideInject"
          ><h3>Provide and Inject</h3></router-link
        >
        <router-link to="/ReplacingDataWithRef"
          ><h3>Replacing Data With Ref</h3></router-link
        >
        <router-link to="/ComponentsEventsParents"
          ><h3>Components, Events, and Parents</h3></router-link
        >
        <router-link to="/SlotsParent"><h3>Slots</h3></router-link>
        <router-link to="/animation"><h3>Animations</h3></router-link>
        <router-link to="/computed"> <h3>Computed Property</h3></router-link>
        <router-link to="/reuse"><h3>Reusability with Mixins</h3></router-link>
        <router-link to="/provideInjectglobally"
          ><h3>Provide and Inject Globally</h3></router-link
        >
        <router-link to="/provideInjectglobally2"
          ><h3>Provide and Inject Globally 2</h3></router-link
        >
        <router-link to="/vueXStatemanagement"
          ><h3>vueX Statemanagement</h3></router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
import cloudBackgroundVue from "../views/cloudBackground.vue";

export default {
  name: "sidebar-label",
  emits: ["slideThisBack"],
  components: {
    cloudBackgroundVue,
  },
};
</script>

<style scoped>
.mainSidebarLabel {
  height: 100vh;
  width: 10vw;
  box-shadow: 17px 17px 15px #868686, -17px -17px 15px #ffffff;
}
.mainSidebarLabelBx {
  display: flex;
  justify-content: end;
}
.bx {
  font-size: 50px;
}
.bx-menu {
  border: 2px solid black;
}
.label {
  height:inherit;
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  text-align: left;
}
.labeledLink {
  padding-left: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
height: inherit;
}

.cloudBg {
  position: absolute;
  z-index: -1;
  height: 100%;
}
.menu-bx {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 10px;
}
@media screen and (max-width: 430px) {
  .mainSidebarLabel {
    height: 100%;
    width: 30vw;   
  }

}
</style>
