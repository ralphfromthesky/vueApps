<template>
    <div>
        <div>
            <slot name="top"> </slot>
        </div>
        <div>
            <slot name="bottom"></slot>
        </div>

        <div>
            <slot name="datafromchild" :data="datafromChild"></slot>
        </div>

    </div>
</template>

<script setup>
import {ref} from 'vue'

const datafromChild = ref([
    {name: 'jade pinkett'},
    {name: 'mia khalifa'},
    {name: 'harry pothead'},
    {value: true}


])
</script>

<style lang="scss" scoped>

</style>