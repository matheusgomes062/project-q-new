<template>
  <div id="main">
    <Breadcrumb />
    <h1>Bolsas favoritas</h1>
    <p>
      Adicione os cursos e faculdades do seu interesse e receba atualizações com
      as melhores ofertas.
    </p>
    <Semesters @semesterFilter="emitFilterSemester($event)" />
    <AddScholarship :winWidth="winWidth" :semesterFilterProp="semesterFilter" />
  </div>
</template>

<script>
import Semesters from "@/components/Semesters/Semesters.vue";
import AddScholarship from "@/components/AddScholarship/AddScholarship.vue";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb.vue";

export default {
  name: "home",
  props: {
    winWidth: { type: Object }
  },
  components: {
    Semesters,
    AddScholarship,
    Breadcrumb
  },
  data() {
    return {
      semesterFilter: 1
    };
  },
  mounted() {
    console.log(this.winWidth);
  },
  methods: {
    emitFilterSemester(val) {
      this.semesterFilter = val;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../styles/views/home.scss";
</style>
