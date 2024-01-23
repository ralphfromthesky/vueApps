<template>


<div class="separator">

  <div class="credit-card-info--form">
    <div class="labeled">
      <label for="">full name</label>
      <input type="text" v-model="nameInput" />
    </div>
    <div class="labeled">
      <label for="">card number</label>
      <input type="text" v-model="cardInput" />
    </div>
    <div class="labeled">
      <label for="">expiry date</label>
      <input type="text" v-model="expiryInput" />
    </div>

    <div class="labeled">
      <label for="">CVV</label>
      <input type="text" v-model="cvvInput" />
    </div>
    <div class="labeled">
      <label for="">complete address</label>
      <input type="text" v-model="addressInput" />
    </div>
  </div>
  <button class="purchase--btn" style="cursor: pointer" @click="click">
    PLACE-ORDER
  </button>

</div>
</template>

<script>
import { reactive, ref, watch } from "vue";
import axios from "axios";
export default {
name: "forms",
props: {
modelValue: Object,
},
setup(props, { emit }) {
const nameInput = ref(props.modelValue.nameInputFromParent); // this one from the value of the input values from child to parent and rendering to parent template
const cardInput = ref(props.modelValue.cardInputFromParent); // this one from the value of the input values from child to parent and rendering to parent template
const expiryInput = ref(props.modelValue.expiryInputFromParent); // this one from the value of the input values from child to parent and rendering to parent template
const cvvInput = ref(props.modelValue.cvvInputFromParent); // this one from the value of the input values from child to parent and rendering to parent template
const addressInput = ref(props.modelValue.addressInputFromParent); // this one from the value of the input values from child to parent and rendering to parent template
const boolers = ref(props.modelValue.boolFromParent)

watch(
[nameInput, cardInput, expiryInput, cvvInput, addressInput, boolers],
() => {
  //watch for emit event child to parent component
  emit("update:modelValue", {
    nameInput: nameInput.value,
    cardInput: cardInput.value,
    expiryInput: expiryInput.value,
    cvvInput: cvvInput.value,
    addressInput: addressInput.value,
    tae: boolers.value,
  });
}
);
const click = () => {
    boolers.value = true;
}

return {
nameInput,
cardInput,
expiryInput,
cvvInput,
addressInput,
boolers,
click
};
},
};
</script>