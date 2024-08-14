<template>
    <div>
        <h1>this is the child emits</h1>
        <button @click="openDivs">close</button>
    </div>
</template>

<script setup>

const emits = defineEmits(['taengMalaki'])
const openDivs = () => {
    emits('taengMalaki', true)
}
</script>

<style lang="scss" scoped></style>