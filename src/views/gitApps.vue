<template>
  <div class="mainContainer">
    <h1>Git Apps</h1>
    <div class="formInput">
      <form @submit.prevent="searchRepository">
        <input type="text" v-model="gitName" class="border-2 border-[red]" />
        <button class="bg-[gray] p-[.5rem] rounded my-[1rem]">Search</button>
      </form>
      <ul v-for="repo in gitRepoName" :key="repo.id">
        <li>
        {{ repo.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

import { computed, ref } from "vue";
import axios from 'axios';
export default {
  name: "gitApps",
  setup() {
    const gitName = ref("");
    const gitApi = computed(() => `https://api.github.com/users/${gitName.value}/repos`)
    const gitRepoName = ref([]);
    
    
    const searchRepository = async () => {
      if (gitName.value.trim() === "") {
        alert("input github name");
      } else {
        try {
            const response = await axios.get(gitApi.value)
            console.log(response)
            gitRepoName.value = response.data;
            console.log(gitRepoName.value)
        } catch (error) {
            console.log(`this is the error: ${error}`)
        }
    }
    };
    return {
      gitName,
      gitApi,
      searchRepository,
      gitRepoName
    };
  },
};
</script>

<style lang="scss" scoped></style>
