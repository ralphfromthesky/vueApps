<template>
    <div>
        <div class="flex justify-between ml-[10rem] my-[1rem]"> <span>this is your dashboard!</span>
            <span class="mx-[.5rem]">

                <span>hello {{ userInfo }}</span>
                <span>
                    <button @click="logOut" class="bg-[gray] p-[.5rem] rounded ml-[1rem] text-white">Log-out</button>
                </span>
            </span>
        </div>

        <div class=" w-[100rem] gap-[1rem] h-[40rem] flex">
            <div class="basis-1/4 border-2 flex flex-col gap-2 pl-2">
                <router-link to="/car">
                    <span>Car</span>
                </router-link>
                <router-link to="/motor">
                    <span>Motor</span>
                </router-link>
                <router-link to="/Inventory">
                    <span>Inventory</span>
                </router-link>
                <router-link to="/spareParts">
                    <span>Spare parts</span>
                </router-link>
                <router-link to="/settings">
                    <span>Settings</span>
                </router-link>
                <!-- <span>Motor</span><span>Inventory</span><span>Spare parts</span><span>Settings</span> -->
            </div>
            <div class="basis-1/2  border-2 ">
                <div class="bg-[#2DCE89] rem h-[10rem] flex justify-around items-center">
                    <div class="bg-[white] h-[5rem] rounded w-[8rem] p-1">adds: <span
                            class="bg-[red] p-[.2rem] rounded-[10rem]">100</span></div>
                    <div class="bg-[white] h-[5rem] rounded w-[8rem] p-1">income: <span
                            class="bg-[pink] p-[.2rem] rounded-[10rem]">$75</span></div>
                    <div class="bg-[white] h-[5rem] rounded w-[8rem] p-1">visitors: <span
                            class="bg-[#2ea02e] p-[.2rem] rounded-[10rem]">256</span></div>
                </div>
                <div>
                    <slot></slot>
                </div>
            </div>
            <div class="basis-1/4  border-2 border-[yellow]">right</div>
        </div>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { computed } from 'vue'
import { useStore } from '@/store/store'
const store = useStore()
const router = useRouter()


const userInfo = computed(() => store.getters['useUser/userInfo']);

const logOut = () => {
    store.commit('useUser/logOutUser')
    router.push('/vueXStatemanagement')

}

</script>

<style lang="scss" scoped></style>