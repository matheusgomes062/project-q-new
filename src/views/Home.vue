<template>
  <div id="main">
    <div class="breadcrumbs">
      <h5 v-if="window.width >= 966" class="fontBreadcrumb">Home</h5>
      <h5 v-if="window.width >= 966" class="bar">/</h5>
      <h5 class="mobileBreadcrumb" style="display: flex; justify-content: center;">
        <img
          v-if="window.width < 966"
          src="@/assets/chevron-left-solid.svg"
          alt="leftArrow"
          class="smallIcons"
          style="margin-right: 5px;"
        />
        <h4 v-if="window.width >= 966" class="fontBreadcrumb">Minha conta</h4>
        <h2 v-if="window.width < 966" class="fontBreadcrumb">Minha conta</h2>
      </h5>
      <h5 v-if="window.width >= 966" class="bar">/</h5>
      <h5 v-if="window.width >= 966" style="color: grey; margin-left: 5px;">Bolsas favoritas</h5>
    </div>
    <h1 class="fontHome">Bolsas favoritas</h1>
    <p
      class="homDescription"
    >Adicione os cursos e faculdades do seu interesse e receba atualizações com as melhores ofertas disponíveis</p>
    <Semesters v-on:semesterFilter="emitFilterSemester($event)" />
    <AddScholarship :winWidth="window.width" :semesterFilterProp="semesterFilter" />
  </div>
</template>

<script>
import Semesters from "@/components/Semesters.vue";
import AddScholarship from "@/components/AddScholarship.vue";

export default {
  name: "home",
  components: {
    Semesters,
    AddScholarship
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

<style scoped>
#main {
  margin: 0 15vw;
}
.fontBreadcrumb {
  color: #007a8d;
  font-weight: 700;
  margin: 20px 0 40px 0;
  cursor: pointer;
}

.fontHome {
  font-weight: bold;
}

.homDescription {
  margin-top: 10px;
}

.breadcrumbs {
  display: flex;
  flex-direction: row;
  text-align: center;
  align-items: baseline;
}

.bar {
  margin: 0 5px;
}

/* MOBILE */
@media (max-width: 966px) {
  .smallIcons {
    width: 10px;
    margin: 0px;
    padding: 0px;
  }

  .mobileBreadcrumb {
    display: flex;
    justify-content: center;
    padding: 30px 0 40px;
  }

  .fontBreadcrumb {
    margin: 0px;
  }

  #main {
    margin: 0 5vw;
  }
}
</style>
