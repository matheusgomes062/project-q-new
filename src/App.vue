<template>
  <div id="app">
    <TheHeader :winWidth="windowSize" />
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
      },
      windowSize: {
        large: false,
        medium: false,
        small: false
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
      this.handleWidth(this.window.width);
    },
    handleWidth(size) {
      if (size > 1200) {
        this.windowSize.large = true;
        this.windowSize.medium = false;
        this.windowSize.small = false;
      } else if (size <= 1200) {
        this.windowSize.large = false;
        this.windowSize.medium = false;
        this.windowSize.small = true;
      }
      return;
    }
  }
};
</script>
