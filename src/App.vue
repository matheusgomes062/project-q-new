<template>
  <div id="app">
    <TheHeader :winWidth="window.width" />
    <main id="main" :winWidth="window.width">
      <router-view />
    </main>
    <TheFooter :winWidth="window.width" />
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader.vue";
import TheFooter from "@/components/TheFooter.vue";

export default {
  components: {
    TheHeader,
    TheFooter
  },
  data() {
    return {
      window: {
        width: 0,
        height: 0
      }
    };
  },
  created() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  },
  destroyed() {
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    handleResize() {
      this.window.width = window.innerWidth;
      this.window.height = window.innerHeight;
    }
  }
};
</script>

<style lang="css">
@import url("https://fonts.googleapis.com/css?family=Montserrat:400,500,600,700,800,900&display=swap");

* {
  box-sizing: border-box;
}

body,
ul,
li,
h1,
h2,
h3,
h4,
h5,
p {
  padding: 0px;
  margin: 0px;
}

ul {
  list-style: none;
}

body {
  font-family: "Montserrat", sans-serif;
  color: #1f2d30;
  background-color: #fbfbfb;
}

a {
  color: #1f2d30;
  list-style: none;
  text-decoration: none;
}

img {
  max-width: 100%;
  display: block;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 130vh;
  font-family: "Montserrat", sans-serif;
}

#main {
  flex: 1;
  top: 75px;
}

@media (max-width: 966px) {
  nav {
    padding: 5px;
  }
}
</style>
