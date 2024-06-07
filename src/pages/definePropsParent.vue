<template>
    <div class="w-[50rem]">
        <h1>this is the parent define props in vue 3</h1>
        <definePropsChild messageko="ito ang mensahe" :newMsg="newmessage" :objectPass="obj" :booleanValue="bolbol"/>
    </div>
</template>

<script setup>
import {ref, reactive } from 'vue'
import definePropsChild from './definePropsChild.vue';

const newmessage = ref('ano daw?')
const bolbol = ref(true)
const obj = reactive([
    {name: 'jelena jensen', age: 40, occupation: 'pornstar'},
    {name: 'dani daniels', age: 30, occupation: 'pornhub'},
    {name: 'miya khalifa', age: 25, occupation: 'xvideos'}


])
</script>

<style lang="scss" scoped></style>