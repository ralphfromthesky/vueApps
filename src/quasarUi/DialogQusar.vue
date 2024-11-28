<template>
  <div class="q-pa-md q-gutter-sm">
    <q-btn :label="props.label" style="background-color: #39D881; color: white;" @click="confirm" />
  </div>
<div>
</div>
</template>

<script setup>
import { useQuasar } from 'quasar'
import { defineAsyncComponent, h, ref } from 'vue';
const MainDialog = defineAsyncComponent(() => import('./MainDialog.vue'));

const cards = ref(100)
const addCards = (adds) => {
  cards.value = adds
}
const emits = defineEmits(['playBingo'])
const props = defineProps({
  label: {
    type: String,
    required: true,
    default: 'label'
  },
  title: {
    type: String,
    required: true,
    default: "title"
  },
  message: {
    type: String,
    required: true,
    default: 'message'
  }
})
const $q = useQuasar()

const confirm = () => {
  $q.dialog({
    title: props.title,
    message: h(MainDialog, { cards: cards.value }),
    cancel: true,
    persistent: true
  }).onOk(() => {
    emits('plaBing', true)
  }).onCancel(() => {
    // Handle Cancel action
  }).onDismiss(() => {
    // Handle dismiss action
  })
}
</script>
