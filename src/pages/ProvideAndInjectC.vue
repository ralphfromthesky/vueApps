<template>
  <div>
    <h1>
      this is the provide and inject, this is from Component-C {{ username }}
    </h1>

    <h1>
      this is the anotherUsername using provide and injec, this is form ComponentC
      {{ anotherUsername }}
    </h1>
    <h1>this is provide and inject passing data from child to parent component {{ myName }}</h1>
    <button class="btn btn-primary"> component C</button>
    <h1 :style="{ color: themeColor }">this is provide and inject using style color</h1>
    <h1 :style="{ backgroundColor: backGroundColor }">this is provide and inject using style backround color</h1>
    <h1 :style="{ border: border }"> this style uses border</h1>
    <div v-for="name in person" :key="name">
      <h1>
        {{ name }}
      </h1>
    </div>

  </div>
</template>

<script>
export default {
  // this inject is to render data from child component to parent components
  inject: ["username", "anotherUsername", "myName", 'themeColor', 'backGroundColor', 'border', 'person'],
};
</script>

<style></style>
