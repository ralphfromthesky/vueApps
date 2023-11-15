import { createRouter, createWebHistory } from 'vue-router'
import home from '../views/home.vue'
import todoApps from '../views/todoApps.vue'
import calculator from '../views/calculator.vue'
import weather from '../views/weather.vue'
import musicApp from  '../views/musicApp.vue'
import quizzApp from  '../views/quizzApp.vue'
import timer from '../views/timer.vue';

import Vbind from '../pages/Vbind.vue';
import ConditionalRendering from '../pages/ConditionalRendering.vue';
import ListRendering from '../pages/ListRendering.vue'
import ConditionalListRendering from '../pages/ConditionalListRendering.vue'
import Methods from '../pages/Methods.vue';
import EventHandling from '../pages/EventHandling.vue'
import FormHandling from '../pages/FormHandling.vue'
import ComputedProperties from '../pages/ComputedProperties.vue';
import Wathchers from '../pages/Watchers.vue';
import Component from '../pages/Components.vue';
import HttpGetRequest from '../pages/HttpGetRequest.vue'
import Http from '../pages/Http.vue'
import PropsAndCompositionAPIParent from '../pages/PropsAndCompositionAPIParent.vue';
import PropsParent from '../pages/PropsParent.vue'
import ProvideAndInjectParenComponent from '../pages/ProvideAndInjectParenComponent.vue'
import ReplacingDataWithRef from '../pages/ReplacingDataWithRef.vue'
import ComponentsEventsParents from '../pages/ComponentsEventsParents.vue'
import SlotsParent from '../pages/SlotsParent.vue';
import Animations from '../pages/Animations.vue'
import sampleComputed from '../pages/sampleComputed.vue'
import ReusabilityWithMixins from '../pages/ReusabilityWithMixins.vue'
import provideAndInjectUsingGlobalandCompositionApi from '../pages/provideAndInjectUsingGlobalandCompositionApi.vue'
import provideAndInjectUsingGlobalandCompositionApi2 from '../pages/provideAndInjectUsingGlobalandCompositionApi2.vue'


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
      {
        path: '/',
        name: 'home',
        component: home
      },
      {
        path: '/home',
        name: 'home',
        component: home
      },
      {
        path: '/todoAndSaved',
        name: 'todos',
        component: todoApps
      },
      {
        path: '/calculator',
        name: 'calculator',
        component: calculator
      },
      {
        path: '/weather',
        name: 'weather',
        component: weather
      },
      {
        path: '/music',
        name: 'music',
        component: musicApp
      },
      {
        path: '/quizz',
        name: 'quizz',
        component: quizzApp
      },
      {
        path: '/timer',
        name: 'timer',
        component: timer
      },
      {
        path: '/todo',
        name: 'todo',
        component: Vbind
      },
      {
        path: '/con',
        name: 'conditionalrenderging',
        component: ConditionalRendering
      },
      {
        path: '/listRendering',
        name: 'listrenderging',
        component: ListRendering
      },
      {
        path: '/conditionallistRendering',
        name: 'conditionallistrenderging',
        component: ConditionalListRendering
      },
      {
        path: '/method',
        name: 'method',
        component: Methods
      },
      {
        path: '/event',
        name: 'EventHandling',
        component: EventHandling
      },
      {
        path: '/form',
        name: 'FormHandling',
        component: FormHandling
      },
      {
        path: '/computed',
        name: 'ComputedProperties',
        component: ComputedProperties
      },
      {
        path: '/watchers',
        name: 'watchers',
        component: Wathchers
      },
      {
        path: '/components',
        name: 'component',
        component: Component
      },
      {
        path: '/http',
        name: 'http',
        component: HttpGetRequest
      },
      {
        path: '/https',
        name: 'https',
        component: Http
      },
      {
        path: '/PropsAndCompositionAPiI',
        name: 'propscompAPI',
        component: PropsAndCompositionAPIParent
      },
      {
        path: '/props',
        name: 'props',
        component: PropsParent
      }, {
        path: '/provideInject',
        name: 'provideinject',
        component: ProvideAndInjectParenComponent
      },
      {
        path: '/ReplacingDataWithRef',
        name: 'ReplacingDataWithRef',
        component: ReplacingDataWithRef 
      },
      {
        path: '/ComponentsEventsParents',
        name: 'ComponentsEventsParents',
        component: ComponentsEventsParents 
      },
      {
        path: '/SlotsParent',
        name: 'SlotsParent',
        component:  SlotsParent
      },
      {
        path: '/animation',
        name: 'animationsliding',
        component:  Animations
      },
      {
        path: '/computed',
        name: 'computedPropery',
        component: sampleComputed
      },
      {
        path: '/reuse',
        name: 'PropReusabilityWithMixinsery',
        component: ReusabilityWithMixins
      },
      {
        path: '/provideInjectglobally',
        name: 'provide',
        component: provideAndInjectUsingGlobalandCompositionApi
      },
      {
        path: '/provideInjectglobally2',
        name: 'provide2',
        component: provideAndInjectUsingGlobalandCompositionApi2 
      },
  
    ]
})

export default router;
