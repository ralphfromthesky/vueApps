<template>
  <div>
    <div v-if="!store.state.useUser.isAuthenticated">
      <transition name="what">
        <form @submit.prevent="subForm" v-if="isLogin">
          <div class="flex flex-col">
            <div>this is the state management</div>
            <span>Type your name then press login</span>.
            <input type="text" v-model="newUser" class='border-2 rounded mt-[1rem] border-[gray] p-[1rem]'>
            <button class="p-[1.5rem] rounded bg-red-400 my-[1rem]">Login</button>
          </div>
        </form>
      </transition>
    </div>

    <div v-if="store.state.useUser.isAuthenticated">
      <div>
        <vueXStatemanagementIsAuthenticated />
      </div>
    </div>

  </div>
</template>

<script setup>
import vueXStatemanagementIsAuthenticated from './vueXStatemanagementIsAuthenticated.vue'
import { ref, computed } from 'vue';
import { useStore } from '@/store/store'
const store = useStore()
const { state, getters } = useStore()
const isLogin = ref(true)
const newUser = ref('');


const subForm = () => {
  if (newUser.value == '' || null) {
    alert('pls type your name')
    return
  }
  store.dispatch('useUser/updateUser', newUser.value)
}


</script>

<style lang="scss" scoped></style>