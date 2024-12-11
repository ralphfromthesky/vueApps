<template>
  <div>
    <div class=" w-[70vw]">

      <div :class="['text-[1.5rem] font-bold', motions && 'motion-preset-typewriter-[45]']">
        ROMBO Motion made simple,
        for Tailwind CSS
      </div>
      <div class="flex justify-around items-center">
        <div class="flex gap-2">
          <div
            :class="['border-2 border-[red] text-[2rem] p-3', motions && 'motion-scale-in-[0.5] motion-translate-x-in-[8%] motion-translate-y-in-[200%] motion-opacity-in-[0%] motion-rotate-in-[-10deg] motion-blur-in-[5px] motion-duration-[0.35s] motion-duration-[0.53s]/scale motion-duration-[0.53s]/translate motion-duration-[0.63s]/rotate']">
            A
          </div>
          <div
            :class="['border-2 border-[limegreen] p-3 text-[2rem]', motions && 'motion-scale-in-[0.5] motion-translate-x-in-[-120%] motion-translate-y-in-[-60%] motion-opacity-in-[33%] motion-rotate-in-[-1080deg] motion-blur-in-[10px] motion-delay-[0.38s]/scale motion-duration-[0.38s]/opacity motion-duration-[1.20s]/rotate motion-duration-[0.15s]/blur motion-delay-[0.60s]/blur motion-ease-spring-bouncier']">
            B
          </div>
          <div :class="[motions && 'motion-rotate-in-[0.5turn]', 'border-2 p-3 border-[blue] text-[2rem]']">
            C
          </div>
          <div
            :class="['border-2 border-[limegreen] p-3 text-[2rem]', motions && 'motion-preset-confetti motion-duration-2000']">
            E
          </div>
          <div
            :class="[motions && 'motion-scale-in-[0.02] motion-translate-x-in-[200%] motion-translate-y-in-[191%] motion-rotate-in-[5deg]', 'border-2 border-[limegreen] p-3 text-[2rem]']">
            F
          </div>
          <div
            :class="[motions && 'motion-preset-flomoji-🚀 motion-duration-2000', 'border-2 border-[limegreen] p-3 text-[2rem]']">
            G
          </div>

        </div>
        <div>
          <button class="bg-[gray] text-[white] p-2" @click="motions = !motions">{{ motions ? 'stop' : 'animate'
            }}</button>
        </div>
      </div>

    </div>
    <div>
      <div class="mt-[3rem] text-[1.5rem] font-bold">
        Animate transition for vue
      </div>
      <div class="flex gap-2 flex-col relative">

        <transition name="transitionSample">
          <div class="text-[1rem] p-3 bg-[gray]" v-if="motions">
            Full Transition Sequence: <br>
            Enter Transition: <br>
            Element is inserted into the DOM. <br>
            -enter-from (initial state). <br>
            -enter-active (applies for the entire transition duration). <br>
            -enter-to (final state during the transition).<br>
            Element reaches its normal/default state.<br>
            Leave Transition:<br>
            Default state.<br>
            -leave-from (initial state at the start of the transition).<br>
            -leave-active (applies for the entire transition duration).<br>
            -leave-to (final state before the element is removed).<br>
            Element is removed from the DOM.<br>
          </div>
        </transition>
        <transition name="sample">
          <div v-if="motions" class="bxs">
            Lorem ipsum dolor sit,
          </div>
        </transition>


      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, watchEffect } from 'vue';
const motions = ref(false)

// watch(() => motions, (newVal) => {
// alert(newVal)
// })

// watch(motions, (newVal) => {
//   alert(newVal)
// })

</script>

<style lang="scss">
.bxs {
  transform: translateX(30vw);
}



.sample-enter-from {
  opacity: 0;
  transform: translateX(0);
}
.sample-enter-active {
  transition: all 2s;
}
.sample-enter-to {
  opacity: 1;
  transform: translateX(30vw);
}

.sample-leave-from {
  opacity: 1;
  transform: translateX(30vw);
}

.sample-leave-active {
  transition: all .5s;
}

.sample-leave-to {
  opacity: 0;
  transform: translateY(0);
}


//initial state
.transitionSample-enter-from {
  opacity: 0;
  transform: scale(0.1);
}

/* Animates the properties when element is inserting in the dom*/
.transitionSample-enter-active {
  transition: opacity .5s, transform .5s;
}

/* End fully visible final state of transition then goes back to default css */
.transitionSample-enter-to {
  opacity: 1;
  transform: scale(1);
  color: white;
  background-color: pink;
}

/* Fully visible at the starts state before it remove in the dom */
.transitionSample-leave-from {
  opacity: 1;
  transform: scale(1);

}

// state while active removing the element in the dom, typically default or original state transition happens here
.transitionSample-leave-active {
  transition: opacity .5s, transform .5s;
  color: aqua;
  background-color: gray;

}

//final state of transition
.transitionSample-leave-to {
  opacity: 0;
  /* Fade out completely */
  transform: scale(0.1);
}
</style>