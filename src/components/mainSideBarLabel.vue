<template>
  <div class="mainSidebarLabel">
    <!-- <div class="mainSidebarLabelBx">
      <h1>VUE JS apps</h1>
      <h1>
        <i
          class="bx bx-menu"
          id="sidebarIcon"
          @click="$emit('slideThisBack')"
        ></i>
      </h1>
    </div> -->
    <div class="label">
      <i
        class="bx bx-menu"
        id="sidebarIcon"
        @click="$emit('slideThisBack')"
      >My Vue js tutorial</i>
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
  margin-bottom: 20%;
}
.label {
  height: 100%;
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
</style>
