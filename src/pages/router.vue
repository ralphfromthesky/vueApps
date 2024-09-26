<template>
  <div>
    <h1>this is the router demo</h1>

    <div class="flex gap-1 main">
      <div class="border-2 border-[blue]" @click="router.push('/home')">
        useRouter

        <div>
          const router = useRouter(); router.push('/home') <br />
          router.replace('/profile');
          <br />
          router.go(-1); // Go back one page
          <br />
          router.back();
          <br />
          router.beforeEach((to, from, next) => { <br> // perform some checks <br> next();
          });
        </div>
      </div>
      <div class="border-2 border-[red]">
        useRoute

        <div>
          const route = useRoute() <br />
          console.log(route.path); // Output: "/about"
          <br />
          console.log(route.params.id); // If URL is "/user/123", output: 123
          <br />
          console.log(route.query.page); // If URL is "/posts?page=2", output: 2
          <br />
          console.log(route.name); // If route name is "about", output: "about"
          <br />

          console.log(route.meta.requiresAuth); // Access custom route metadata
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import { useRoute } from "vue-router";

const router = useRouter();
const route = useRoute();

const goto = () => {};
onMounted(() => {
  if (route.path === "/thisRouter") {
    alert("route.path === /thisRouter");
  }
});
</script>

<style scoped>
.main {
    display: grid;
    width: 3rem;
    gap: 1rem;
    grid-template-columns: repeat(1fr);
}
</style>
