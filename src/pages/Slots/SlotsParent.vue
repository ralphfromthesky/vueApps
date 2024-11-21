<template>
  <div>
    <div>
      <div>

        <Head />
        <div class="flex">
          <div>
            <Side />
          </div>
          <div class="w-[50rem]">

            <transition name="zoom-fade" appear>
              <div v-if="$slots.default">
                <slot></slot>
              </div>
            </transition>
          </div>
          <div>
            <Right />
          </div>
        </div>
        <div>
          <Foot />
        </div>
      </div>
      <div class="mt-[2rem]">
        <SlotsChild #top>this is child slot A</SlotsChild>
        <SlotsChild #bottom>and this is the child slot B</SlotsChild>

        <div class="mt-[3rem]" >
          this data comes from child
          <SlotsChild #datafromchild="{data}">
          
          <div v-for="d in data" :key="d.name">
            {{ d.name }}
            <div v-if="d.value === false">
fsdfsadf
            </div>
          </div>
          </SlotsChild>
        </div>

      </div>
    </div>

  </div>
</template>

<script setup>
import Side from '@/pages/Slots/Side.vue';
import Foot from '@/pages/Slots/Foot.vue';
import Head from '@/pages/Slots/Head.vue';
import Right from '@/pages/Slots/Right.vue';
import SlotsChild from './SlotsChild.vue';



</script>

<style scoped>
.route-enter-from {
  opacity: 0;
  transform: translateX(10rem);
}

.route-enter-active {

  transition: all 0.3s ease-out;
}

.route-leave-to {
  opacity: 0;
  transform: translateX(-10rem);
}

.route-leave-active {
  transition: all 0.3s ease-in;
}
.zoom-fade-enter-active,
.zoom-fade-leave-active {
  transition:
    transform 0.2s,
    opacity 0.3s ease-out;
}
.zoom-fade-enter-from {
  opacity: 0;
  transform: scale(0.92);
}
.zoom-fade-leave-to {
  opacity: 0;
  transform: scale(1.06);
}
</style>
