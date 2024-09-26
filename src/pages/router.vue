<template>
  <div>
    <h1>this is the router demo</h1>

    <div class="flex gap-1">
      <div class="border-2 border-[blue]" @click="router.push({name: 'home'})">useRouter</div>
      <div class="border-2 border-[red]">useRoute</div>
    </div>
  </div>
</template>

<script setup>
import {onMounted, ref} from 'vue'
import { useRouter } from "vue-router";
import { useRoute } from "vue-router";

const router = useRouter();
const route = useRoute();

const goto = () => {
}
onMounted(() => {
    if(route.path === '/thisRouter') {
        alert('this route')
    }
}),
</script>

<style lang="scss" scoped></style>
