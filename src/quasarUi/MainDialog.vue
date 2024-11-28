<template>
    <div>

        <div class="text-center">
            <div>
                Number of Cards: {{ cards }} {{ cards === 10 ? '(Max: 10)' : '' }}
            </div>
            <div class="flex gap-2">
                <button @click="addCards" class="flex-1">+ </button>
                <button @click="minusCards" class="flex-1">-</button>
            </div>

        </div>
    </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useStore } from '../store/store';
const store = useStore()
const cards = ref(1)
// const props = defineProps({
//     cards: {
//         type: Number,
//         required: true,
//         default: "500"
//     }
// })

const addCards = () => {
    if (cards.value < 10) {
        cards.value++
        store.commit('newStore/setcards', cards.value)
    }
}
const minusCards = () => {
    if (cards.value > 1) {
        cards.value--;
        store.commit('newStore/setcards', cards.value)

    }
}
const emits = defineEmits(['cardNumber'])

watch(cards, (newVal) => {
    emits('cardNumber', newVal)
})

</script>

<style lang="scss" scoped></style>