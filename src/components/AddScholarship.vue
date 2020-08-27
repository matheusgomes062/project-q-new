<template>
  <div class="addScholarshipContainer">
    <div class="masterModal" @click="modal = true">
      <img src="@/assets/mais.svg" alt="addScholarshipIcon" class="plusIcon" />
      <section class="addScholarshipTxt">
        <h3>Adicionar Bolsa</h3>
        <h4 class="addScholarshipTxt">
          Clique para adicionar bolsas de cursos do seu interesse
        </h4>
      </section>
    </div>
    <ModalAddScholarship
      v-if="modal"
      :modal="modal"
      :data="scholarships"
      :winWidth="winWidth"
      v-on:modalChange="updateModal"
      v-on:favScholarships="addFavScholarships($event)"
    ></ModalAddScholarship>
    <ShowcaseItem
      v-for="(fav, index) in this.$store.state.favScholarshipsStore"
      :key="fav.id"
      :winWidth="winWidth"
      :propFavorites="favScholarships"
      :favIndex="index"
      :semesterFilter="semesterFilterProp"
    ></ShowcaseItem>
  </div>
</template>

<script>
import ModalAddScholarship from "@/components/ModalAddScholarship.vue";
import ShowcaseItem from "@/components/ShowcaseItem.vue";
import { mapActions } from "vuex";

import { api } from "@/services.js";

export default {
  name: "AddScholarship",
  components: {
    ModalAddScholarship,
    ShowcaseItem
  },
  props: {
    semesterFilterProp: { type: Number, default: 1 },
    winWidth: { type: Number }
  },
  data() {
    return {
      fetchBolsa: false,
      modal: false,
      scholarships: [],
      favScholarships: [],
      showAll: false,
      showSecond: false,
      showFirst: false
    };
  },
  async mounted() {
    await this.fetchScholarships();
    // this.filterScholarships();
  },
  methods: {
    ...mapActions(["changeFavScholarships"]),

    fetchScholarships() {
      api.get("/scholarships").then(response => {
        this.scholarships = response.data;
      });
    },
    updateModal() {
      this.modal = false;
    },
    addFavScholarships(favScholarships) {
      this.favScholarships = favScholarships;

      this.changeFavScholarships(favScholarships);
    }
  }
};
</script>

<style lang="css">
@import "./styles/AddScholarshipStyle.css";
</style>
