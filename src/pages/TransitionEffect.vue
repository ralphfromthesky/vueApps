<template>
  <div>
    <div>keepalive</div>
    <button @click="fetch">fetch</button>
  </div>
</template>

<script setup>

fetch('https://graph.facebook.com/v12.0/search?q=your_search_query&type=page&access_token=YOUR_ACCESS_TOKEN')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));

</script>

<style lang="scss" scoped></style>
