<template>
  <div>
    <div>using v-memo</div>
    <div>
    <div class="my-[1rem] p-2">
      <div v-memo="[subscriber]" class="border-2 border-[red]">
        indside the v-memo, v-memo="[subscriber]"
        <br /><br />
        <p>subscriber {{ subscriber }}</p>
        <p>views {{ views }}</p>
        <p>like {{ like }}</p>
      </div>
      <div class="flex gap-2 py-3" v-memo="[subscriber]">
        <button class="bg-[gray] rounded text-white" @click="subscriber++">
          suscribe ++</button
        ><button class="bg-[gray] rounded text-white" @click="views++">
          views ++</button
        ><button class="bg-[gray] rounded text-white" @click="like++">
          likes ++
        </button>
      </div>
      <div class="border-2 border-[blue]">
        <br /><br />
        outside the v-memo
        <br /><br />
        <p>subscriber {{ subscriber }}</p>
        <p>views {{ views }}</p>
        <p>like {{ like }}</p>
      </div>
    </div>
    <div class="border-2 border-[black]">
        using v-once
        <div v-once>
            {{ name }}
        </div>
        <button class="bg-[gray] rounded text-white" @click="nameChange">
          NAME CHANGE
        </button>    </div>
</div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const name = ref('ralph')

const nameChange = () => {
name.value = 'santolorin'
}
const subscriber = ref(1000);
const views = ref(100);
const like = ref(50);
</script>

<style lang="scss" scoped></style>
