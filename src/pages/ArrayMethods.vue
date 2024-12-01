<template>
    <div class="flex flex-col gap-2">
        <div class="border-2 border-[gray] p-1 rounded">
            <div>
                this is .slice()
            </div>
            <div class="grid grid-cols-3 gap-1">
                <div v-for="(a, i) in showLessImage" :key="i" class="border-2 border-[red] flex justify-center">
                    <img :src="a.img" alt="" srcset="" class="h-[5rem]">
                </div>
                <div>
                    <button @click="showAllImage">{{ allImage ? 'see all image' : 'less image' }}</button>
                </div>
            </div>
        </div>
        <div class="border-2 border-[gray] p-1 rounded">

            <div>
                this is .map() - {{ arrayNums }}
            </div>
            <div>
                <div>
                    Multiply - {{ returnNums.length ? returnNums :  'tae' }}
                </div>
                <div>
                    add - {{ adds }}
                </div>
            </div>
            <div>
                <input type="number" class="border-2 border-[green]" v-model="timesNum" min="1" max="99" />
            </div>
        </div>

    </div>
</template>

<script setup>
import { ref, computed } from 'vue'
const allImage = ref(true)
const arrayNums = ref([10, 20, 30, 40, 50, 60, 70])
const timesNum = ref()
const image = ref([

    { img: './images/christmas.jpg' },
    { img: './images/clear.png' },
    { img: './images/clearBg.jpg' },
    { img: './images/clearMobile.jpg' },
    { img: './images/cloudBg.jpg' },
    { img: './images/cloudWeather.jpg' },
    { img: './images/mario.png' },
    { img: './images/marioClouds.png' },
    { img: './images/mariokart.png' },
    { img: './images/mistBg.jpg' },


])

const returnNums = computed(() => {
    return arrayNums.value.map((a) => a * timesNum.value)
})

const adds = computed(() => {
    return arrayNums.value.map((a) => a + timesNum.value)
})
const showLessImage = computed(() => {
    return allImage.value ? image.value.slice(0, 3) : image.value
})
const showAllImage = () => {
    allImage.value = !allImage.value
}
</script>

<style lang="scss" scoped></style>