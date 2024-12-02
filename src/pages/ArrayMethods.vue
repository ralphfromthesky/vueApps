<template>
    <div>
        <div class="border-2 border-[gray] p-1 rounded flex justify-center">
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
        <div class="border-2 border-[gray] p-1 rounded flex justify-center">

            <div>
                this is .map() - {{ arrayNums }}
            </div>
            <div>
                <div>
                    Multiply - {{ returnNums.length ? returnNums : 'tae' }}
                </div>
                <div>
                    add - {{ adds }}
                </div>
            </div>
            <div>
                <input type="number" class="border-2 border-[green]" v-model="timesNum" min="1" max="99" />
            </div>
        </div>
        <div class="border-2 border-[gray] p-1 rounded flex justify-center">

            <div class="text-center">
                this is .filter() and .find() <br /> {{ students }} <br><br> {{ findNumber ? `found a number that is
                equally ${findNumber}` : '' }}
            </div>
            <br>
            <div>
                <div>
                    <input type="text" v-model="search" class="border-2 border-[limegreen] mr-1" @keydown="searhName">
                    <button @click="searhName">Search</button>
                    <button @click="findIndexOf">Find Index</button>
                </div>
                <div v-if="searchResult">
                    <div>
                        Name found {{ searchResult.name }} with a grade of {{ searchResult.grade }} and with score of {{
                            searchResult.score }}
                    </div>
                </div>
                <div v-else="search" class="text-[red]">
                    <p>No student found with the name "{{ search }}".</p>
                </div>
            </div>
        </div>
        <div class="border-2 border-[gray] p-1 rounded flex flex-col items-center justify-center">

            <div>
                this is .reduce() <br /> {{ arrayNums }}
            </div>
            <div>
                <div>
                    <button @click="addNums">Sum all</button> {{ sums ? `total sums is ${sums}` : '' }} <br>

                </div>
                <div>
                    <button @click="showMax"> Max number</button> {{ max }}
                </div>
                <div>
                    <button @click="showMin"> Min number</button> {{ min }}
                </div>
            </div>

        </div>
        <div class="border-2 border-[gray] p-1 rounded flex justify-center">

            <div>
                this is .every() the reverse of some()
                <div class="flex gap-2">
                    <div v-for="(a, i) in people" :key="a.name">
                        {{ a.name }}

                    </div>
                    <div class="text-[red]"> // returns {{ findNameWithA }} all name has "a"</div>
                </div>
                <div class="flex gap-2">
                    <div v-for="(a, i) in people2" :key="a.name">
                        {{ a.name }}

                    </div>
                    <div class="text-[red]"> // returns {{ findNameDoesNotHave }} not all name has "a"</div>

                </div>
            </div>

        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue'
const allImage = ref(true)
const arrayNums = ref([10, 20, 30, 40, 50, 60, 70])
const timesNum = ref()
const sums = ref()
const max = ref()
const min = ref()
const search = ref('')
const people = ref([
    { name: 'randy' },
    { name: 'ryan' },
    { name: 'anna' },
    { name: 'brandy' },
    { name: 'jane' },


])
const people2 = ref([
    { name: 'randy' },
    { name: 'ryan' },
    { name: 'anna' },
    { name: 'brandy' },
    { name: 'jerome' },


])
const searchResult = ref([])
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

const students = ref([
    { name: 'ralph', score: 90, grade: 10 },
    { name: 'shenron', score: 85, grade: 5 },
    { name: 'gadwin', score: 70, grade: 1 },
    { name: 'sophia', score: 95, grade: 12 },
    { name: 'leo', score: 60, grade: 3 },
    { name: 'mila', score: 88, grade: 8 },
    { name: 'aaron', score: 75, grade: 6 },
    { name: 'claire', score: 80, grade: 7 },
    { name: 'erik', score: 85, grade: 9 },
    { name: 'lara', score: 92, grade: 11 },
]);

const findNameWithA = computed(() => {
    return people.value.every((a) => a.name.includes('a'))
})

const findNameDoesNotHave = computed(() => {
    return people2.value.every((a) => a.name.includes("a"))
})

const showFilter = computed(() => {
    return students.value.filter((a) => a.score === 70 || a.score === 90)
})

// const addNums  = computed(() => {
//     return arrayNums.value.reduce((a, b) => a + b, 0)
// })

const addNums = () => {
    sums.value = arrayNums.value.reduce((a, b) => a + b, 0)
}

const showMax = () => {
    max.value = arrayNums.value.reduce((a, b) => a > b ? b : b)
}

const showMin = () => {
    min.value = arrayNums.value.reduce((a, b) => a < b ? a : a)
}


const findNumber = computed(() => {
    return arrayNums.value.find((a) => a === 10)
})

const searhName = (event) => {
    const result = students.value.find((a) => a.name.toLowerCase() === search.value.toLowerCase())
    if (result) {
        searchResult.value = result

    } else {
        searchResult.value = null
    }
}

const findIndexOf = () => {
    const result = students.value.findIndex((a) => {
        return a.name.toLowerCase() === search.value.toLowerCase()
    })
    if (result) {
        alert(result)
    } else {
        return null
    }

}


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