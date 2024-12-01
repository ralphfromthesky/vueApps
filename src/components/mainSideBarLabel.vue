<template>
  <div class="mainSidebarLabe bg-[red]" :class="{ 'night': store.state.newStore.isNight, 'light': !store.state.newStore.isNight }">
    <div class="label">
      <div class="menu-bx">
        <h4>Vue js Tuts</h4>
        <i class="bx bx-menu" id="sidebarIcon" @click="$emit('slideThisBack')"></i>
      </div>

      <cloudBackgroundVue class="cloudBg" />
      <div class="labeledLink" v-for="link in sidebarlabel" :key="link.link">
        <router-link :to="link.link" @click="$emit('slideThisBack')">
          <div>{{ link.title }}</div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import {reactive} from 'vue'
import cloudBackgroundVue from "../views/cloudBackground.vue";
import { useStore } from "@/store/store";
export default {
  name: "sidebar-label",
  emits: ["slideThisBack"],
  components: {
    cloudBackgroundVue,
  },
  setup() {
    const sidebarlabel = reactive([
  {
    label: 'Vbind',
    link: '/todo',
    title: 'Vbind'
  },
  {
    label: 'Conditional Rendering',
    link: '/con',
    title: 'Conditional Rendering'
  },
  {
    label: 'List Rendering',
    link: '/listRendering',
    title: 'List Rendering'
  },
  {
    label: 'Conditional List Rendering',
    link: '/conditionallistRendering',
    title: 'Conditional List Rendering'
  },
  {
    label: 'Method',
    link: '/method',
    title: 'Method'
  },
  {
    label: 'Event Handling',
    link: '/event',
    title: 'Event Handling'
  },
  {
    label: 'Form Handling',
    link: '/form',
    title: 'Form Handling'
  },
  {
    label: 'Computed Properties',
    link: '/computed',
    title: 'Computed Properties'
  },
  {
    label: 'Watchers',
    link: '/watchers',
    title: 'Watchers'
  },
  {
    label: 'Components',
    link: '/components',
    title: 'Components' 
  },
  {
    label: 'TwElements',
    link: '/twElements',
    title: 'v-once and v-memo' 
  },
  {
    label: 'HTTP Get Request',
    link: '/http',
    title: 'HTTP Get Request'
  },
  {
    label: 'HTTP',
    link: '/https',
    title: 'HTTP'
  },
  {
    label: 'Props and Composition API',
    link: '/PropsAndCompositionAPiI',
    title: 'Props and Composition API'
  },
  {
    label: 'Props',
    link: '/props',
    title: 'Props'
  },
  {
    label: 'Provide and Inject',
    link: '/provideInject',
    title: 'Provide and Inject'
  },
  {
    label: 'Replacing Data With Ref',
    link: '/ReplacingDataWithRef',
    title: 'Replacing Data With Ref'
  },
  {
    label: 'Components, Events, and Parents',
    link: '/ComponentsEventsParents',
    title: 'Components, Events, and Parents'
  },
  {
    label: 'Slots',
    link: '/SlotsParent',
    title: 'Slots'
  },
  {
    label: 'keep-alive',
    link: '/keepalive',
    title: 'Keep-alive'
  },
  {
    label: 'Animations',
    link: '/animation',
    title: 'Animations'
  },
  {
    label: 'Computed Property',
    link: '/computed',
    title: 'Computed Property'
  },
  {
    label: 'Reusability with Mixins',
    link: '/reuse',
    title: 'Reusability with Mixins'
  },
  {
    label: 'Provide and Inject Globally',
    link: '/provideInjectglobally',
    title: 'Provide and Inject Globally'
  },
  {
    label: 'Provide and Inject Globally 2',
    link: '/provideInjectglobally2',
    title: 'Provide and Inject Globally 2'
  },
  {
    label: 'vueX Statemanagement',
    link: '/vueXStatemanagement',
    title: 'vueX Statemanagement'
  },
  {
    label: 'router-view',
    link: '/thisRouter',
    title: 'router-view'
  },
  {
    label: 'defineProps',
    link: '/defineProps',
    title: 'defineProps'
  },
  {
    label: 'defineEmits',
    link: '/defineEmits',
    title: 'defineEmits'
  },
  {
    label: 'Suspense',
    link: '/suspense',
    title: '<Suspense/>'
  },
  {
    label: 'defineEmits',
    link: '/defineModel',
    title: 'defrineAsyncComponent'
  },
  {
    label: '',
    link: '/hooks',
    title: 'Life Cycle Hooks'
  },
  {
    label: '',
    link: '/htmlTemp',
    title: 'Must know HTML'
  },
  {
    label: '',
    link: '/arr',
    title: 'Array Methods'
  }


]);

    const store = useStore()
    return {
      store,
      sidebarlabel
    }
  }
};
</script>

<style scoped>
.light {
  box-shadow: 17px 17px 15px #868686,
    -17px -17px 15px #ffffff;
}

.night {
  border: 2px solid gray;
}

.mainSidebarLabel {
  height: 100vh;
  width: 10vw;
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
  height: inherit;
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

a {
  text-decoration: none;
}

a.router-link-active {
  border-left: 5px solid black;
}

@media screen and (max-width: 430px) {
  .mainSidebarLabel {
    height: 100%;
    width: 30vw;
  }

}
</style>
