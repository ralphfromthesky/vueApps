// store.js
import axios from 'axios';
import { ref } from 'vue';
import { createStore } from 'vuex';

export default createStore({

  state: {
    posts: [],
  },
  mutations: {
    setPosts(state, posts) {
      state.posts = posts;
    },
  },
  actions: {

async fetchPosts({ commit }) {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    console.log(response)
    const posts = response.data;
    commit('setPosts', posts);
    console.log(posts);
  } catch (error) {
    console.error('Error fetching posts:', error);
  }
}

  },
  getters: {
    getPosts: (state) => state.posts,
  },
});


