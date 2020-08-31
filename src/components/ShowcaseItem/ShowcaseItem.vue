<template>
  <div
    class="showcaseContainer"
    v-show="
      showAll ||
        (favorites[favIndex].es2019 && es2019) ||
        (favorites[favIndex].es2020 && es2020)
    "
  >
    <div class="showcaseItem">
      <section class="showcaseInfo">
        <div class="imgContainer">
          <img :src="`${favorites[favIndex].university.logo_url}`" alt="universityImg" />
        </div>
        <section>
          <h4>{{ favorites[favIndex].university.name }}</h4>
          <h4>{{ favorites[favIndex].course.name }}</h4>
          <div class="scoreContainer">
            <h2>{{ favorites[favIndex].university.score }}</h2>
            <img src="@/assets/stars2.png" alt="4 out 5 stars" class="stars" />
          </div>
        </section>
      </section>
      <section class="showcaseInfo">
        <div class="courseTurn">
          <h3>{{ favorites[favIndex].course.kind.toUpperCase() }}</h3>
          <h2 style="margin: -5px 5px">.</h2>
          <h3>{{ favorites[favIndex].course.shift.toUpperCase() }}</h3>
        </div>
        <h4 class="classStart">Início das aulas em: {{ favorites[favIndex].start_date }}</h4>
      </section>
      <section class="showcaseInfo">
        <h5 class="queroBolsaDiscount">Mensalidade com o Quero Bolsa:</h5>
        <h4
          style="font-weight: 500; text-decoration: line-through;"
        >{{ Math.round(favorites[favIndex].full_price) | numeroPreco }}</h4>
        <div class="discountTxt">
          <h1>
            {{
            Math.round(favorites[favIndex].price_with_discount) | numeroPreco
            }}
          </h1>
          <h4>/mês</h4>
        </div>
      </section>
      <div class="showcaseButtonsContainer">
        <div>
          <div class="cancelBtn cancelBtnShowcase" @click="popItem(favIndex)">
            <h4 v-if="winWidth.large">Excluir</h4>
            <h3 v-else>Excluir</h3>
          </div>
          <div
            class="addBtn addBtnShowcase"
            :class="[
              favorites[favIndex].enabled
                ? { btnDisabled: btnDisabled }
                : { btnDisabled: (btnDisabled = true) }
            ]"
          >
            <h4 v-if="btnDisabled && winWidth.large">Indisponível</h4>
            <h4 v-if="!btnDisabled && winWidth.large">Ver oferta</h4>
            <h3 v-if="btnDisabled && !winWidth.large">Indisponível</h3>
            <h3 v-if="!btnDisabled && !winWidth.large">Ver oferta</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "ShowcaseItem",
  props: {
    propFavorites: { type: Array },
    favIndex: { type: Number },
    semesterFilter: { type: Number },
    winWidth: { type: Object }
  },
  data() {
    return {
      btnDisabled: false,
      favorites: this.$store.state.favScholarshipsStore,
      showAll: true,
      es2019: false,
      es2020: false
    };
  },
  mounted() {
    // started using vuex
    // this.favorites.forEach((el, index) => {
    //   return (this.favIndex = this.favorites);
    // });
    // this.favorites = JSON.parse(localStorage.getItem("favScholarshipsLS"));
    this.semesterFilterTranslate();
  },
  filters: {
    numeroPreco(valor) {
      return `R$${valor}`;
    }
  },
  methods: {
    ...mapActions(["changeFavScholarships"]),

    popItem(index) {
      this.favorites.splice(index, 1);
      this.changeFavScholarships(this.favorites);
    },
    semesterFilterTranslate() {
      let enroll = this.favorites[this.favIndex].enrollment_semester;
      if (this.semesterFilter === 1) {
        this.showAll = true;
      } else if (this.semesterFilter === 2) {
        this.showAll = false;
        if (enroll.indexOf("2019") !== -1)
          this.favorites[this.favIndex].es2019 = true;
        this.all = false;
        this.es2019 = true;
        this.es2020 = false;
      } else if (this.semesterFilter === 3) {
        this.showAll = false;
        if (enroll.indexOf("2020") !== -1)
          this.favorites[this.favIndex].es2020 = true;
        this.all = false;
        this.es2019 = false;
        this.es2020 = true;
      }
    }
  },
  watch: {
    semesterFilter: function() {
      this.semesterFilterTranslate();
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../styles/components/showcaseItem.scss";
</style>
