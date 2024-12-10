<template>
  <div>
    <div>

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
          <div :class="['border-2 border-[limegreen] p-3 text-[2rem]', motions && 'motion-preset-confetti motion-duration-2000']">
            E
          </div>
          <div :class="[motions && 'motion-scale-in-[0.02] motion-translate-x-in-[200%] motion-translate-y-in-[191%] motion-rotate-in-[5deg]', 'border-2 border-[limegreen] p-3 text-[2rem]']">
            F
          </div>
          <div :class="[motions && 'motion-preset-flomoji-🚀 motion-duration-2000', 'border-2 border-[limegreen] p-3 text-[2rem]']">
            G
          </div>
       
        </div>
        <div>
          <button class="bg-[gray] p-2" @click="motions = !motions">Motion</button>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const motions = ref(false)


</script>

<style lang="scss" scoped></style>