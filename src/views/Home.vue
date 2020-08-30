<template>
  <div id="main">
    <Breadcrumb />
    <h1>Bolsas favoritas</h1>
    <p>
      Adicione os cursos e faculdades do seu interesse e receba atualizações com
      as melhores ofertas.
    </p>
    <Semesters @semesterFilter="emitFilterSemester($event)" />
    <AddScholarship :winWidth="window.width" :semesterFilterProp="semesterFilter" />
  </div>
</template>

<script>
import Semesters from "@/components/Semesters/Semesters.vue";
import AddScholarship from "@/components/AddScholarship/AddScholarship.vue";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb.vue";

export default {
  name: "home",
  components: {
    Semesters,
    AddScholarship,
    Breadcrumb
  },
  data() {
    return {
      window: {
        width: 0,
        height: 0
      },
      semesterFilter: 1
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
    },
    emitFilterSemester(val) {
      this.semesterFilter = val;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../styles/views/home.scss";
</style>
