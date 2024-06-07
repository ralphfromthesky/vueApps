<template>
  <div class="main-props">
    <div class="w-[50rem]">
      <PropsAndCompositionAPIChild
        messageFromParentComponent="this is the message from parent Component"
        AnotherMessage="ralph santolorin"
        :sampleDataBindingProsp="taeKa"
        :anoDaw="okImFine"
        :sukasuka="silato"
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

      <PropsAndCompositionAPIChild2 :bindThisfromparents="newMessage" />
      <PropsAndCompositionAPIChild2 :dataList2="newData" />

      <hr />
      <button @click="changeData()">change data from parent component</button>
      <hr />

      <PropsAndCompositionAPIChild23 :data="dataList" />

      <PropsAndCompositionAPIChild23 :messageFromTheSky="messageFromSky" />
      <PropsAndCompositionAPIChild23 :tupacShakur="sampleData" />

      <br />
      <br />
      <div class="passingDataofChildToParent">
        <div class="childData">
          <h1 style="text-align: center">
            this is child data to be passed on parent
          </h1>
          <propsPassingDataFromChildToParentComponentVue v-model="parentData" />
        </div>
        <div
          class="parentData"
          :class="parentData.boolFromParent ? 'boolxs' : ''"
        >
          <h1 style="text-align: center">this is the Parent</h1>

          {{ parentData }}
          <br />
        </div>
      </div>
    </div>
    <div>
      <PropsAndCompositionAPIChild4Vue :haha="newestData"/>
    </div>
  </div>
</template>

<script>
import { reactive, ref } from "vue";
import PropsAndCompositionAPIChild from "./PropsAndCompositionAPIChild.vue";
import PropsAndCompositionAPIChild2 from "./PropsAndCompositionAPIChild2.vue";
import PropsAndCompositionAPIChild23 from "./PropsAndCompositionAPIChild23.vue";
import propsPassingDataFromChildToParentComponentVue from "./props-passingDataFromChildToParentComponent.vue";
import PropsAndCompositionAPIChild4Vue from "./PropsAndCompositionAPIChild4.vue";

export default {
  name: "propsUsingCompositionApi",
  components: {
    PropsAndCompositionAPIChild,
    PropsAndCompositionAPIChild2,
    PropsAndCompositionAPIChild23,
    propsPassingDataFromChildToParentComponentVue,
    PropsAndCompositionAPIChild4Vue,
  },
  setup() {
    const newParetntData = ref({
      name: "",
      location: "",
      age: "",
    });
    const MessageFromParentComponent = ref(
      "a bind message from Parent App.vue"
    );
    const newMessage = ref("this is the new messageeeeeee");
    const bindThisData = ref("new Message");
    const firstname = ref("ralph rigor");
    const lastname = ref("santolorin");
    const messageFromSky = ref("how are you!!!!!");
    const silato = ref('1111111111111')
    const taeKa = ref({
      name: 'lilith lust',
      name2: 'anna belle peaks',
      name3: 'winona ryder'
    });
    const okImFine = ref("im Really ok talaga");
    const newestData = ref({
      name: 'ralph',
      age: 39,
      status: 'single'
    })
    const dataList = reactive({
      name: "ralph santolorin",
      age: "39",
      location: "navotas",
    });
    const newData = reactive({
      name: "shenron santolorin",
      age: 10,
      location: "navotas",
    });
    const ralph = ref({
      name: 'rigor',
      age: 39,
      location: 'navotas'
    })

    const sampleData = reactive({
      name: "tupac shakur",
      age: 50,
      location: "usa",
    });

    const parentData = ref({
      nameInputFromParent: "",
      cardInputFromParent: "",
      expiryInputFromParent: "",
      cvvInputFromParent: "",
      addressInputFromParent: "",
      boolFromParent: false,
    });

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
      sampleData,
      parentData,
      newParetntData,
      newestData,
      silato
      
    };
  },
};
</script>

<style scoped>
.passingDataofChildToParent {
  display: flex;
}

.childData {
  width: 50%;
}
.boolxs {
  border: 2px solid red;
  background-color: aliceblue;
}
.main-props {
  display: flex;
justify-content: space-between;
}
</style>
