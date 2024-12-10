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
      <div class="flex gap-2">
        <!-- <transition name="sample">
          <div  v-if="motions" class="border-2 border-[red] text-[2rem] p-3">
            A
          </div>
        </transition> -->
        <transition name="sample2">
          <div class="text-[1rem] p-3 bg-[red]" v-if="motions">
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


      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const motions = ref(false)


</script>

<style lang="scss">
.sample-enter-active,
.sample-leave-active {
  transition: opacity 0.5s ease;
  color: red;
  border: 5px solid lime;
}

.sample-enter-from,
.sample-leave-to {
  opacity: 0;
  color: blue;
  border: 5px solid pink;
}



// .sample2-enter-active, .sample2-leave-active {
//   color: blue;
//   transition: all opacity 0.5s ease;
//   border: 2px solid blue;
//   transform: translateX(10vw);
//.sample2-leave-to
// }

//initial state
.sample2-enter-from {
  opacity: 0;
  transform: scale(0.1);
}
  /* Animates the properties when element is inserting in the dom*/
.sample2-enter-active {
  transition: opacity .5s, transform .5s;
}
  /* End fully visible final state of transition then goes back to default css */
.sample2-enter-to {
  opacity: 1;
  transform: scale(1);
  color: white;
}
  /* Fully visible at the starts state before it remove in the dom */
.sample2-leave-from {
  opacity: 1;
  transform: scale(1);
}

// state while active removing the element in the dom, typically default or original state transition happens here
.sample2-leave-active {
  transition: opacity .5s, transform .5s;
  /* Animate properties */
}

//final state of transition
.sample2-leave-to {
  opacity: 0;
  /* Fade out completely */
  transform: scale(0.1);
  /* Shrink slightly */
}
</style>