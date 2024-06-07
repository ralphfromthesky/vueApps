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

            <transition name="route" appear>
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
    </div>

  </div>
</template>

<script setup>
import Side from '@/pages/Slots/Side.vue';
import Foot from '@/pages/Slots/Foot.vue';
import Head from '@/pages/Slots/Head.vue';
import Right from '@/pages/Slots/Right.vue';


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
</style>
