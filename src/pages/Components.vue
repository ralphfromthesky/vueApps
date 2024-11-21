<template>
  <div>
    <div>
      <h1>this is the dynamic components</h1>

      <!-- <component :is="anoDaw ? Foot : Side" /> -->
      <!-- <component :is="Side " /> -->

      <div >
        <input type="number" class="border-2 border-[red] rounded-md" v-model="componentIndex">
        <div>
          Type 0 - 5 to see dynamic showing of components
        </div>
      </div>

      <div>
          <component :is="arrayOfComponent[componentIndex]"></component>
      </div>
     
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Foot from '@/pages/Slots/Foot.vue'
import Side from '@/pages/Slots/Side.vue'
import Home from './Slots/linkSlots/Home.vue';
import TodoApps from '../views/todoApps.vue'
import Calculator from '../views/calculator.vue'
import GitApps from '../views/gitApps.vue'

const componentIndex = ref()
const arrayOfComponent = ref([
  Foot,
  Side,
  Calculator,
  Home,
  TodoApps,
  GitApps
])

const showComponent = () => {
  // if(componentIndex.value)
}

</script>

<style lang="scss" scoped></style>