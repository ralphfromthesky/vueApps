<template>
    <div>
        <h1>{{ messageko }}</h1>
        <h1>{{ newMsg }}</h1>
        <div v-for="obj in objectPass" :key="obj.name">
            {{ obj.name }} - {{ obj.age }} - {{ obj.occupation }}
        </div>
        <div>
            {{ props }}
        </div>
        <div v-if="booleanValue">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem quas consequatur quae ea recusandae
            tempora iure, quaerat voluptates quod quis velit iste, at consequuntur praesentium ipsum itaque facilis
            porro impedit nostrum dolore iusto! Ipsa odit maxime eius id necessitatibus tempora! Exercitationem minus
            atque quibusdam aspernatur laboriosam fuga accusamus iure dignissimos.
        </div>
    </div>
</template>

<script setup>

const props = defineProps({
    messageko: String,
    newMsg: String,
    objectPass: Object,
    booleanValue: Boolean
})

</script>

<style lang="scss" scoped></style>