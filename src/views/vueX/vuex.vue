<!-- YourComponent.vue -->
<template>
  <div>
    <div class="vuexApps">
      <div class="container">
        <h1>Posts</h1>
        <ul>
          <li v-for="post in posts" :key="post.id">
            {{ post.title }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();

    // Fetch posts when the component is mounted
    onMounted(() => {
      store.dispatch("fetchPosts");
    });

    // Use computed to access the posts from the store
    const posts = computed(() => store.getters.getPosts);

    return {
      posts,
    };
  },
};
</script>

<style scoped>
.container  {
  height: 60vh;
  border: 2px solid red;
  overflow: scroll;
  padding: 10px;
}

</style>
