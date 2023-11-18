<template>
  <div>
    <div class="homeContainer">
      <div class="imageContainer">
        <img src="../images/myPhoto.jpg" alt="" />
      </div>
      <div class="descriptionContainer">
        <h2>About Me:</h2>
        <h3>
          Hello there im Ralph, and I'm a passionate Vue.js developer with a
          creative and detail-oriented approach to crafting user-friendly and
          visually appealing web applications. My journey in the world of web
          development has equipped me with a strong foundation in Vue.js,
          enabling me to build interactive and responsive solutions for diverse
          client needs. I thrive on tackling challenges and turning ideas into
          dynamic, efficient, and engaging digital experiences.
          <iframe
          width="100%"
          height="166"
          scrolling="no"
          frameborder="no"
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/255203570&color=%23ff5500&auto_play=false&hide_related=true&show_comments=true&show_user=true&show_reposts=false&show_teaser=false"
        >
        </iframe>
        </h3>
      </div>
      <div class="divs">

      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
img {
  height: 40vh;
}
.homeContainer {
  display: flex;
  width: 50vw;
  border-radius: 20px;
  box-shadow: 10px 10px 30px #bebebe, -10px -10px 20px #ffffff;
}
.descriptionContainer {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  flex-direction: column;
}
h3 {
  line-height: 2;
}
h2 {
  font-size: 40px;
  font-weight: 800;
}
</style>
