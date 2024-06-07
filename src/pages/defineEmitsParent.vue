<template>
    <div>
        <h1>this is define Emits parent</h1>
        <defineEmitsChild @taeng-malaki="openthediv"/>
        <div v-if="openNow">
            <h1>this open by child component</h1>
        </div>
    </div>
</template>

<script setup>
import {ref} from 'vue'

import defineEmitsChild from './defineEmitsChild.vue';
const openNow = ref(false)
const openthediv = () => {
openNow.value = true
}
</script>

