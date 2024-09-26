import { createRouter, createWebHistory } from "vue-router";
import home from "../views/home.vue";
import todoApps from "../views/todoApps.vue";
import calculator from "../views/calculator.vue";
import weather from "../views/weather.vue";
import musicApp from "../views/musicApp.vue";
import quizzApp from "../views/quizzApp.vue";
import timer from "../views/timer.vue";
import Vbind from "../pages/Vbind.vue";
import ConditionalRendering from "../pages/ConditionalRendering.vue";
import ListRendering from "../pages/ListRendering.vue";
import ConditionalListRendering from "../pages/ConditionalListRendering.vue";
import Methods from "../pages/Methods.vue";
import EventHandling from "../pages/EventHandling.vue";
import FormHandling from "../pages/FormHandling.vue";
import ComputedProperties from "../pages/ComputedProperties.vue";
import Wathchers from "../pages/Watchers.vue";
import Component from "../pages/Components.vue";
import HttpGetRequest from "../pages/HttpGetRequest.vue";
import Http from "../pages/Http.vue";
import PropsAndCompositionAPIParent from "../pages/PropsAndCompositionAPIParent.vue";
import PropsParent from "../pages/PropsParent.vue";
import ProvideAndInjectParenComponent from "../pages/ProvideAndInjectParenComponent.vue";
import ReplacingDataWithRef from "../pages/ReplacingDataWithRef.vue";
import ComponentsEventsParents from "../pages/ComponentsEventsParents.vue";
import SlotsParent from "../pages/Slots/SlotsParent.vue";
import Animations from "../pages/Animations.vue";
import sampleComputed from "../pages/sampleComputed.vue";
import ReusabilityWithMixins from "../pages/ReusabilityWithMixins.vue";
import provideAndInjectUsingGlobalandCompositionApi from "../pages/provideAndInjectUsingGlobalandCompositionApi.vue";
import provideAndInjectUsingGlobalandCompositionApi2 from "../pages/provideAndInjectUsingGlobalandCompositionApi2.vue";
import vueXStatemanagement from "../pages/vueXstateManagementPersisted/vueXStatemanagement.vue";
import vuex from "../views/vueX/vuex.vue";
import gitApps from "../views/gitApps.vue";
import nameVariations from "../views/nameVariations.vue";
import hotelApp from "../views/hotelApp.vue";
import flipGames from "../views/flipGames.vue";
import thisRouter from "@/pages/router.vue";
import definePropsParent from "@/pages/definePropsParent.vue";
import defineEmitsParent from "@/pages/defineEmitsParent.vue";
import HomeSlotLink from "../pages/Slots/linkSlots/Home.vue";
import AboutSlotLink from "../pages/Slots/linkSlots/About.vue";
import ContactSlotLink from "../pages/Slots/linkSlots/Contact.vue";
import Layout from "../pages/Slots/Layout.vue";
import LifeCycleHooks from "@/pages/LifeCycleHooks.vue";
import DefineModel from "@/pages/DefineModel.vue";
import TwElements from "@/pages/TwElements.vue";
import cars from "@/pages/vueXstateManagementPersisted/car.vue";
import motor from "@/pages/vueXstateManagementPersisted/motor.vue";
import settings from "@/pages/vueXstateManagementPersisted/settings.vue";
import spareParts from "@/pages/vueXstateManagementPersisted/spareParts.vue";
import inventory from "@/pages/vueXstateManagementPersisted/inventory.vue";
import Transitition from "@/pages/TransitionEffect.vue";

const routes = [

  {
    path: '/',
    name: 'home',
    component: home
  },

  {
    path: "/home",
    name: "home",
    component: home,
    alias: "/kepweng",
    meta: {
      requiresAuth: true,
      isKupal: true,
    },
    tae: {
      malaki: true,
      malagkit: true,
    },
  },
  {
    path: "/todoAndSaved",
    name: "todos",
    component: todoApps,
  },
  {
    path: "/keepalive",
    name: "keep",
    component: Transitition,
  },
  {
    path: "/calculator",
    name: "calculator",
    component: calculator,
  },
  {
    path: "/weather",
    name: "weather",
    component: weather,
  },
  {
    path: "/music",
    name: "music",
    component: musicApp,
  },
  {
    path: "/quizz",
    name: "quizz",
    component: quizzApp,
  },
  {
    path: "/timer",
    name: "timer",
    component: timer,
  },
  {
    path: "/todo",
    name: "todo",
    component: Vbind,
  },
  {
    path: "/con",
    name: "conditionalrenderging",
    component: ConditionalRendering,
  },
  {
    path: "/listRendering",
    name: "listrenderging",
    component: ListRendering,
  },
  {
    path: "/conditionallistRendering",
    name: "conditionallistrenderging",
    component: ConditionalListRendering,
  },
  {
    path: "/method",
    name: "method",
    component: Methods,
  },
  {
    path: "/event",
    name: "EventHandling",
    component: EventHandling,
  },
  {
    path: "/form",
    name: "FormHandling",
    component: FormHandling,
  },
  {
    path: "/computed",
    name: "ComputedProperties",
    component: ComputedProperties,
  },
  {
    path: "/watchers",
    name: "watchers",
    component: Wathchers,
  },
  {
    path: "/components",
    name: "component",
    component: Component,
  },
  {
    path: "/http",
    name: "http",
    component: HttpGetRequest,
  },
  {
    path: "/https",
    name: "https",
    component: Http,
  },
  {
    path: "/PropsAndCompositionAPiI",
    name: "propscompAPI",
    component: PropsAndCompositionAPIParent,
  },
  {
    path: "/props",
    name: "props",
    component: PropsParent,
  },
  {
    path: "/provideInject",
    name: "provideinject",
    component: ProvideAndInjectParenComponent,
  },
  {
    path: "/ReplacingDataWithRef",
    name: "ReplacingDataWithRef",
    component: ReplacingDataWithRef,
  },
  {
    path: "/ComponentsEventsParents",
    name: "ComponentsEventsParents",
    component: ComponentsEventsParents,
  },
  {
    path: "/SlotsParent",
    name: "SlotsParent",
    component: SlotsParent,
  },
  {
    path: "/animation",
    name: "animationsliding",
    component: Animations,
  },
  {
    path: "/computed",
    name: "computedPropery",
    component: sampleComputed,
  },
  {
    path: "/reuse",
    name: "PropReusabilityWithMixinsery",
    component: ReusabilityWithMixins,
  },
  {
    path: "/provideInjectglobally",
    name: "provide",
    component: provideAndInjectUsingGlobalandCompositionApi,
  },
  {
    path: "/provideInjectglobally2",
    name: "provide2",
    component: provideAndInjectUsingGlobalandCompositionApi2,
  },
  {
    path: "/vueXStatemanagement",
    name: "vueXStatemanagement",
    component: vueXStatemanagement,
  },
  {
    path: "/vuex",
    name: "vuexApp",
    component: vuex,
  },
  {
    path: "/ghub",
    name: "gitApps",
    component: gitApps,
  },
  {
    path: "/nameVar",
    name: "nameVariation",
    component: nameVariations,
  },
  {
    path: "/hotel",
    name: "hotel",
    component: hotelApp,
  },
  {
    path: "/flipGames",
    name: "flipGames",
    component: flipGames,
  },
  {
    path: "/thisRouter",
    name: "thisRouter",
    component: thisRouter,
  },
  {
    path: "/defineProps",
    name: "defineProps",
    component: definePropsParent,
  },
  {
    path: "/defineEmits",
    name: "defineEmits",
    component: defineEmitsParent,
  },
  {
    path: "/homeSlotLink",
    name: "slotlinkhome",
    component: HomeSlotLink,
  },
  {
    path: "/contactSlotLink",
    name: "slotlinkcontact",
    component: ContactSlotLink,
  },
  {
    path: "/aboutSlotLink",
    name: "slotlinkabout",
    component: AboutSlotLink,
  },
  {
    path: "/layout",
    name: "layout",
    component: Layout,
  },
  {
    path: "/hooks",
    name: "lifeCycle",
    component: LifeCycleHooks,
  },
  {
    path: "/defineModel",
    name: "defineModel",
    component: DefineModel,
  },
  {
    path: "/twElements",
    name: "twElements",
    component: TwElements,
  },
  {
    path: "/car",
    name: "car",
    component: cars,
  },
  {
    path: "/inventory",
    name: "inventory",
    component: inventory,
  },
  {
    path: "/settings",
    name: "settings",
    component: settings,
  },
  {
    path: "/spareParts",
    name: "spareParts",
    component: spareParts,
  },
  {
    path: "/motor",
    name: "motor",
    component: motor,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const protectedRoute = routes.map((p) => p.path);
  
  // Allow access to the root path without redirection
  if (to.path === '/') {
    next(); // Allow the navigation to '/'
  } else if (protectedRoute.includes(to.path)) {
    // Logic for checking authentication goes here
    // For example, if (!isAuthenticated) { next('/home'); }
    next(); // If authenticated, allow navigation to the protected route
  } else {
    next('/home'); // Redirect to home for unprotected routes
  }
});

export default router;

// const router = createRouter({
//   history: createWebHistory(import.meta.env.BASE_URL),
//   routes: [
//     {
//       path: '/',
//       name: 'home',
//       component: () => import('@/components/home.vue'),
//     },
//     {
//       path: '/home',
//       name: 'home',
//       component: () => import('@/components/home.vue'),
//     },
//     {
//       path: '/todoAndSaved',
//       name: 'todos',
//       component: () => import('@/components/todoApps.vue'),
//     },
//     {
//       path: '/calculator',
//       name: 'calculator',
//       component: () => import('@/components/calculator.vue'),
//     },
//     {
//       path: '/weather',
//       name: 'weather',
//       component: () => import('@/components/weather.vue'),
//     },
//     {
//       path: '/music',
//       name: 'music',
//       component: () => import('@/components/musicApp.vue'),
//     },
//     {
//       path: '/quizz',
//       name: 'quizz',
//       component: () => import('@/components/quizzApp.vue'),
//     },
//     {
//       path: '/timer',
//       name: 'timer',
//       component: () => import('@/components/timer.vue'),
//     },
//     {
//       path: '/todo',
//       name: 'todo',
//       component: () => import('@/components/Vbind.vue'),
//     },
//     {
//       path: '/con',
//       name: 'conditionalrenderging',
//       component: () => import('@/components/ConditionalRendering.vue'),
//     },
//     {
//       path: '/listRendering',
//       name: 'listrenderging',
//       component: () => import('@/components/ListRendering.vue'),
//     },
//     {
//       path: '/conditionallistRendering',
//       name: 'conditionallistrenderging',
//       component: () => import('@/components/ConditionalListRendering.vue'),
//     },
//     {
//       path: '/method',
//       name: 'method',
//       component: () => import('@/components/Methods.vue'),
//     },
//     {
//       path: '/event',
//       name: 'EventHandling',
//       component: () => import('@/components/EventHandling.vue'),
//     },
//     {
//       path: '/form',
//       name: 'FormHandling',
//       component: () => import('@/components/FormHandling.vue'),
//     },
//     {
//       path: '/computed',
//       name: 'ComputedProperties',
//       component: () => import('@/components/ComputedProperties.vue'),
//     },
//     {
//       path: '/watchers',
//       name: 'watchers',
//       component: () => import('@/components/Wathchers.vue'),
//     },
//     {
//       path: '/components',
//       name: 'component',
//       component: () => import('@/components/Component.vue'),
//     },
//     {
//       path: '/http',
//       name: 'http',
//       component: () => import('@/components/HttpGetRequest.vue'),
//     },
//     {
//       path: '/https',
//       name: 'https',
//       component: () => import('@/components/Http.vue'),
//     },
//     {
//       path: '/PropsAndCompositionAPiI',
//       name: 'propscompAPI',
//       component: () => import('@/components/PropsAndCompositionAPIParent.vue'),
//     },
//     {
//       path: '/props',
//       name: 'props',
//       component: () => import('@/components/PropsParent.vue'),
//     },
//     {
//       path: '/provideInject',
//       name: 'provideinject',
//       component: () => import('@/components/ProvideAndInjectParenComponent.vue'),
//     },
//     {
//       path: '/ReplacingDataWithRef',
//       name: 'ReplacingDataWithRef',
//       component: () => import('@/components/ReplacingDataWithRef.vue'),
//     },
//     {
//       path: '/ComponentsEventsParents',
//       name: 'ComponentsEventsParents',
//       component: () => import('@/components/ComponentsEventsParents.vue'),
//     },
//     {
//       path: '/SlotsParent',
//       name: 'SlotsParent',
//       component: () => import('@/components/SlotsParent.vue'),
//     },
//     {
//       path: '/animation',
//       name: 'animationsliding',
//       component: () => import('@/components/Animations.vue'),
//     },
//     {
//       path: '/computed',
//       name: 'computedPropery',
//       component: () => import('@/components/sampleComputed.vue'),
//     },
//     {
//       path: '/reuse',
//       name: 'PropReusabilityWithMixinsery',
//       component: () => import('@/components/ReusabilityWithMixins.vue'),
//     },
//     {
//       path: '/provideInjectglobally',
//       name: 'provide',
//       component: () => import('@/components/provideAndInjectUsingGlobalandCompositionApi.vue'),
//     },
//     {
//       path: '/provideInjectglobally2',
//       name: 'provide2',
//       component: () => import('@/components/provideAndInjectUsingGlobalandCompositionApi2.vue'),
//     },
//     {
//       path: '/vueXStatemanagement',
//       name: 'vueXStatemanagement',
//       component: () => import('@/components/vueXStatemanagement.vue'),
//     },
//     {
//       path: '/vuex',
//       name: 'vuexApp',
//       component: () => import('@/components/vuex.vue'),
//     },
//     {
//       path: '/ghub',
//       name: 'gitApps',
//       component: () => import('@/components/gitApps.vue'),
//     },
//     {
//       path: '/nameVar',
//       name: 'nameVariation',
//       component: () => import('@/components/nameVariations.vue'),
//     },
//     {
//       path: '/hotel',
//       name: 'hotel',
//       component: () => import('@/components/hotelApp.vue'),
//     },
//     {
//       path: '/flipGames',
//       name: 'flipGames',
//       component: () => import('@/components/flipGames.vue'),
//     },
//     {
//       path: '/thisRouter',
//       name: 'thisRouter',
//       component: () => import('@/components/thisRouter.vue'),
//     },
//     {
//       path: '/defineProps',
//       name: 'defineProps',
//       component: () => import('@/components/definePropsParent.vue'),
//     },
//     {
//       path: '/defineEmits',
//       name: 'defineEmits',
//       component: () => import('@/components/defineEmitsParent.vue'),
//     },
//     {
//       path: '/homeSlotLink',
//       name: 'slotlinkhome',
//       component: () => import('@/components/HomeSlotLink.vue'),
//     },
//     {
//       path: '/contactSlotLink',
//       name: 'slotlinkcontact',
//       component: () => import('@/components/ContactSlotLink.vue'),
//     },
//     {
//       path: '/aboutSlotLink',
//       name: 'slotlinkabout',
//       component: () => import('@/components/AboutSlotLink.vue'),
//     },
//     {
//       path: '/layout',
//       name: 'layout',
//       component: () => import('@/components/Layout.vue'),
//     },
//     {
//       path: '/hooks',
//       name: 'lifeCycle',
//       component: () => import('@/components/LifeCycleHooks.vue'),
//     },
//     {
//       path: '/defineModel',
//       name: 'defineModel',
//       component: () => import('@/components/DefineModel.vue'),
//     },
//     {
//       path: '/twElements',
//       name: 'twElements',
//       component: () => import('@/components/TwElements.vue'),
//     },
//     {
//       path: '/car',
//       name: 'car',
//       component: () => import('@/components/cars.vue'),
//     },
//     {
//       path: '/inventory',
//       name: 'inventory',
//       component: () => import('@/components/inventory.vue'),
//     },
//     {
//       path: '/settings',
//       name: 'settings',
//       component: () => import('@/components/settings.vue'),
//     },
//     {
//       path: '/spareParts',
//       name: 'spareParts',
//       component: () => import('@/components/spareParts.vue'),
//     },
//     {
//       path: '/motor',
//       name: 'motor',
//       component: () => import('@/components/motor.vue'),
//     },
//   ],
// });

// export default router;
