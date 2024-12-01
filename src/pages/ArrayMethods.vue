<template>
    <div>
        <div>
            <div>
                this is .splice()
            </div>
            <div class="grid grid-cols-3 gap-1">
                <div v-for="(a, i) in image" :key="a"  class="border-2 border-[red]">
                    <img :src="a.img" alt="" srcset="" class="h-[5rem]">
                </div>

            </div>
        </div>
</div>
</template>

<script setup>
import {ref} from 'vue'
const image = ref([
    
    {img: './images/christmas.jpg'},
    {img: './images/clear.png'},
    {img: './images/clearBg.jpg'},
    {img: './images/clearMobile.jpg'},
    {img: './images/clouds.jpg'},

])

</script>

<style lang="scss" scoped>

</style>