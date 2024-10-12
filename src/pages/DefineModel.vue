<template>
  <div>
    <div>
      <span class="text-[1.5rem]">defineAsyncComponent</span><br /><br />
      is a built-in utility in Vue 3 that allows you to dynamically load
      components only when they are needed, which is helpful for code-splitting
      and improving the initial load time of your application. It is used to
      define asynchronous components, meaning the component is loaded lazily,
      typically when the user navigates to the part of the application that
      requires it.
      <br />
      <button
        @click="active = !active"
        class="mt-[2rem] border-2 border-[gray] p-2 rounded-[.2rem]"
      >
        Show Child
      </button>
      <br />
      <br />
      <!-- Use <Suspense> to handle the loading and error state when async component loads -->
      <Suspense>
        <template #default>
          <DefineChild v-if="active" />
        </template>
        <template #fallback>
          <div>Loading...</div>
        </template>
      </Suspense>
    </div>
  </div>
</template>

<script setup>
import { defineAsyncComponent, ref } from "vue";
const active = ref(false);

const DefineChild = defineAsyncComponent({
  loader: () => import("@/pages/DefineModelChild.vue"),
  delay: 5000, // Delay showing the loading state by 5 seconds
  timeout: 5000, // Fail after 5 seconds if component doesn’t load
  errorComponent: () => import("@/page/Component3.vue"), // Component to show on error
  suspense: true // Use with <Suspense> to handle loading and error states
});
</script>

<style lang="scss" scoped></style>
