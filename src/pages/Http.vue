<template>
<div class="http">
    <HttpPostRequest/>
    <HttpGetRequest/>
</div>

</template>

<script>
import HttpGetRequest from "./HttpGetRequest.vue";
import HttpPostRequest from "./HttpPostRequest.vue";
export default {
  name: "http",
  components: {
    HttpPostRequest,
    HttpGetRequest,
  },
  data() {
    return {};
  },
};
</script>


<style scoped>
.http {
  padding: 0 15%;
  overflow: hidden;
  height: 65vh;
  border: 2px solid rgb(82, 79, 79);
  overflow: scroll;
}
</style>
