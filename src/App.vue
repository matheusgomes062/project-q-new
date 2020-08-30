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
import TheHeader from "@/components/Header/TheHeader.vue";
import TheFooter from "@/components/Footer/TheFooter.vue";

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
