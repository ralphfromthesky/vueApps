import { createRouter, createWebHistory } from "vue-router";

import SlotsParent from "../pages/Slots/SlotsParent.vue";
import sampleComputed from "../pages/sampleComputed.vue";
import ReusabilityWithMixins from "../pages/ReusabilityWithMixins.vue";
import vueXStatemanagement from "../pages/vueXstateManagementPersisted/vueXStatemanagement.vue";
import vuex from "../views/vueX/vuex.vue";
import HomeSlotLink from "../pages/Slots/linkSlots/Home.vue";
import AboutSlotLink from "../pages/Slots/linkSlots/About.vue";
import ContactSlotLink from "../pages/Slots/linkSlots/Contact.vue";
import Layout from "../pages/Slots/Layout.vue";
import cars from "@/pages/vueXstateManagementPersisted/car.vue";
import motor from "@/pages/vueXstateManagementPersisted/motor.vue";
import settings from "@/pages/vueXstateManagementPersisted/settings.vue";
import spareParts from "@/pages/vueXstateManagementPersisted/spareParts.vue";
import inventory from "@/pages/vueXstateManagementPersisted/inventory.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/home.vue"),
  },

  {
    path: "/home",
    name: "home",
    component: () => import("@/views/home.vue"),
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
    component: () => import("@/views/todoApps.vue"),
  },
  {
    path: "/keepalive",
    name: "keep",
    component: () => import("@/pages/transitionEffect.vue"),
  },
  {
    path: "/calculator",
    name: "calculator",
    component: () => import("@/views/calculator.vue"),
  },
  {
    path: "/weather",
    name: "weather",
    component: () => import("@/views/weather.vue"),
  },
  {
    path: "/music",
    name: "music",
    component: () => import("@/views/musicApp.vue"),
  },
  {
    path: "/quizz",
    name: "quizz",
    component: () => import("@/views/quizzApp.vue"),
  },
  {
    path: "/timer",
    name: "timer",
    component: () => import('@/views/timer.vue'),
  },
  {
    path: "/todo",
    name: "todo",
    component: () => import('@/pages/Vbind.vue'),
  },
  {
    path: "/con",
    name: "conditionalrenderging",
    component: () => import("@/pagee/ConditionalRendering.vue"),
  },
  {
    path: "/listRendering",
    name: "listrenderging",
    component: () => import("@/pages/ListRendering.vue"),
  },
  {
    path: "/conditionallistRendering",
    name: "conditionallistrenderging",
    component: () => import("@/pages/ConditionalListRendering.vue"),
  },
  {
    path: "/method",
    name: "method",
    component: () => import("@/pages/Methods.vue"),
  },

  {
    path: "/suspense",
    name: "suspense",
    component: () => import("@/pages/Component3.vue"),
  },
  {
    path: "/event",
    name: "EventHandling",
    component: () => import("@/pages/EventHandling.vue"),
  },
  {
    path: "/form",
    name: "FormHandling",
    component: () => import("@/pages/FormHandling.vue"),
  },
  {
    path: "/computed",
    name: "ComputedProperties",
    component: () => import("@/pages/ComputedProperties.vue"),
  },
  {
    path: "/watchers",
    name: "watchers",
    component: () => import("@/pages/Wathchers.vue"),
  },
  {
    path: "/components",
    name: "component",
    component: () => import("@/pages/Components.vue"),
  },
  {
    path: "/http",
    name: "http",
    component: () => import("@/pages/HttpGetRequest.vue"),
  },
  {
    path: "/https",
    name: "https",
    component: () => import("@/pages/Http.vue"),

  },
  {
    path: "/PropsAndCompositionAPiI",
    name: "propscompAPI",
    component: () => import("@/pages/PropsAndCompositionAPIParent.vue"),
  },
  {
    path: "/props",
    name: "props",
    component: () => import("@/pages/PropsParent.vue"),
  },
  {
    path: "/provideInject",
    name: "provideinject",
    component: () => import("@/pages/ProvideAndInjectParenComponent.vue"),
  },
  {
    path: "/ReplacingDataWithRef",
    name: "ReplacingDataWithRef",
    component: () => import("@/pages/ReplacingDataWithRef.vue"),
  },
  {
    path: "/ComponentsEventsParents",
    name: "ComponentsEventsParents",
    component: () => import("@/pages/ComponentsEventsParents.vue"),
  },
  {
    path: "/SlotsParent",
    name: "SlotsParent",
    component: SlotsParent,
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
    path: "/animation",
    name: "animationsliding",
    component: () => import("@/pages/Animations.vue"),
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
    component: () => import('@/pages/provideAndInjectUsingGlobalandCompositionApi.vue'),

  },
  {
    path: "/provideInjectglobally2",
    name: "provide2",
    component: () => import('@/pages/provideAndInjectUsingGlobalandCompositionApi2.vue'),

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
    component: () => import('@/views/gitApps.vue'),
  },
  {
    path: "/nameVar",
    name: "nameVariation",
    component: () => import('@/views/nameVariations.vue'),

  },
  {
    path: "/hotel",
    name: "hotel",
    component: () => import('@/views/hotelApp.vue'),

  },
  {
    path: "/flipGames",
    name: "flipGames",
    component: () => import('@/views/flipGames.vue'),

  },
  {
    path: "/thisRouter",
    name: "thisRouter",
    component: () => import('@/pages/flipGamthisRouteres.vue'),

  },
  {
    path: "/defineProps",
    name: "defineProps",
    component: () => import('@/pages/definePropsParent.vue'),

  },
  {
    path: "/defineEmits",
    name: "defineEmits",
    component: () => import('@/pages/defineEmitsParent.vue'),

  },

  {
    path: "/hooks",
    name: "lifeCycle",
    component: () => import('@/pages/LifeCycleHooks.vue'),

  },
  {
    path: "/defineModel",
    name: "defineModel",
    component: () => import('@/pages/DefineModel.vue'),

  },
  {
    path: "/twElements",
    name: "twElements",
    component: () => import('@/pages/TwElements.vue'),

  },

];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

router.replace

router.beforeEach((to, from, next) => {
  const protectedRoute = routes.map((p) => p.path);

  // Allow access to the root path without redirection
  if (to.path === "/") {
    next(); // Allow the navigation to '/'
  } else if (protectedRoute.includes(to.path)) {
    // Logic for checking authentication goes here
    // For example, if (!isAuthenticated) { next('/home'); }
    next(); // If authenticated, allow navigation to the protected route
  } else {
    next("/home"); // Redirect to home for unprotected routes
  }
});

export default router;

