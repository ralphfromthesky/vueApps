<template>
  <div>
    <h1>hello {{ name }} a.k.a {{ heroName }}</h1>

    <div>
      <i class="pi pi-check"></i>
      <i class="pi pi-times"></i>
      <span class="pi pi-search"></span>
      <span class="pi pi-user"></span>
    </div>
  </div>
</template>

<script>
export default {
  props: ["name", "heroName"],
};
</script>

<style></style>
