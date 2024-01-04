<template>
  <div class="sidebar">
    <div class="sidebarBx">
      <i class="bx bx-menu" id="sidebarIcon" @click="$emit('slideThis')"></i>
    </div>
    <div class="sideBarIcon">
      <router-link to="/home">
        <i class="bx bx-home"></i>
      </router-link>
      <router-link to="/todoAndSaved"><i class="bx bx-edit"></i></router-link>
      <router-link to="/calculator">
        <i class="bx bx-calculator"></i>
      </router-link>
      <router-link to="/weather"
        ><i class="bx bxs-cloud-lightning"></i
      ></router-link>
      <router-link to="/music"> <i class="bx bxl-deezer"></i> </router-link>
      <router-link to="/nameVar"><i class='bx bxs-calendar-exclamation' ></i></router-link>
      <router-link to="/quizz"> <i class="bx bx-task"></i> </router-link>
      <router-link to="/timer"><i class="bx bxs-watch"></i> </router-link>
      <router-link to="/vuex"><i class='bx bxs-castle'></i></router-link>
      <router-link to="/ghub"><i class='bx bxl-github'></i></router-link>
    </div>
  </div>
</template>

<script>
export default {  
  name: "sidebar",
  emits: ["slideThis"],
  setup() {
    return {};
  },
};
</script>

<style scoped>
.bx {
  font-size: 50px;
}
.bx-menu {
  border: 2px solid black;
  border-radius: 5px;
  margin-top: 10%;
}

.sidebar {
  height: 100vh;

  background-color: white;
  width: 4vw;
  box-shadow:  17px 17px 15px #868686,
             -17px -17px 15px #ffffff;  
             
}
.sidebarBx {
  display: flex;
  justify-content: center;
}
.sideBarIcon {
  width: 100%;
  height: 93%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}
@media screen and (max-width: 430px) {
  .sidebar {
    width: 14vw;
    }
}
</style>