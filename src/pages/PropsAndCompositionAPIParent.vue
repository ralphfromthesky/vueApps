<template>
  <div>
    <PropsAndCompositionAPIChild
      messageFromParentComponent="this is the message from parent Component"
      AnotherMessage="ralph santolorin"
      :sampleDataBindingProsp="taeKa"
      :anoDaw="okImFine"
    />
    <hr />

    <PropsAndCompositionAPIChild2
      :bindMessageFromParents="MessageFromParentComponent"
      :anotherSampleOfBindDataFromParentComponent="bindThisData"
    />

    <PropsAndCompositionAPIChild2
      :usingComputedPropertiesForFirstName="firstname"
      :usingComputedPropertiesForlastName="lastname"
    />

    <PropsAndCompositionAPIChild2 :bindThisfromparents="newMessage"/>
    <PropsAndCompositionAPIChild2 :dataList2="newData"/>

    <hr />
    <button @click="changeData()">change data from parent component</button>
    <hr />

    <PropsAndCompositionAPIChild23 :data="dataList"/>

    <PropsAndCompositionAPIChild23 :messageFromTheSky="messageFromSky"/>
    <PropsAndCompositionAPIChild23 :tupacShakur="sampleData"/>

  </div>
</template>sampleData

<script>
import { reactive, ref } from "vue";
import PropsAndCompositionAPIChild from "./PropsAndCompositionAPIChild.vue";
import PropsAndCompositionAPIChild2 from "./PropsAndCompositionAPIChild2.vue";
import PropsAndCompositionAPIChild23 from "./PropsAndCompositionAPIChild23.vue";

export default {
  name: "propsUsingCompositionApi",
  components: {
    PropsAndCompositionAPIChild,
    PropsAndCompositionAPIChild2,
    PropsAndCompositionAPIChild23,
  },
  setup() {
    const MessageFromParentComponent = ref(
      "a bind message from Parent App.vue"
    );
    const newMessage = ref('this is the new messageeeeeee')
    const bindThisData = ref("new Message");
    const firstname = ref("ralph rigor");
    const lastname = ref("santolorin");
    const messageFromSky = ref('how are you!!!!!')
    const taeKa = ref('tae ka tlga!!!!')
    const okImFine = ref('im Really ok talaga')
    const dataList = reactive({
      name: 'ralph santolorin',
      age: '39',
      location: 'navotas'
    })
    const newData = reactive({
      name: 'shenron santolorin',
      age: 10,
      location: 'navotas'
    })

    const sampleData = reactive({
      name: 'tupac shakur',
      age: 50,
      location: 'usa'
    })




    const changeData = () => {
      firstname.value = "new data from a button click from parent component";
      lastname.value = "new data from a button click from parent component";
      bindThisData.value = "new data from a button click from parent component";
    };

    return {
      MessageFromParentComponent,
      bindThisData,
      firstname,
      lastname,
      changeData,
      dataList,
      newMessage,
      messageFromSky,
      newData,
      taeKa,
      okImFine,
      sampleData
    };
  },
};
</script>

<style lang="scss" scoped>
</style>