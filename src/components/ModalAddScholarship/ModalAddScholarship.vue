<template>
  <section class="modal" v-if="modal" @click="fecharModal">
    <div class="closeModalContainer" @click="fecharModal">
      <img src="@/assets/times-solid.svg" alt="closeModal" @click="fecharModal" />
    </div>
    <div class="modalContainer">
      <section>
        <h2>Adicionar bolsa</h2>
        <span>Filtre e adicione as bolsas de seu interesse.</span>
      </section>
      <div v-if="winWidth >= 966" class="options">
        <div class="containerModal">
          <span>SELECIONE SUA CIDADE</span>
          <select class="select" v-model="citySelected">
            <option disabled value>Escolha uma cidade</option>
            <option v-for="option in cities" :key="option">{{ option }}</option>
          </select>
          <span style="margin-bottom: 20px;">COMO VOCÊ QUER ESTUDAR?</span>
          <div class="checkboxContainer">
            <div>
              <input type="checkbox" id="presencial" value="Presencial" v-model="kind" />
              <label for="presencial">Presencial</label>
            </div>
            <div>
              <input type="checkbox" id="distancia" value="EaD" v-model="kind" />
              <label for="distancia">A distância</label>
            </div>
          </div>
        </div>
        <div class="containerModal">
          <span>SELECIONE O CURSO DE SUA PREFERÊNCIA</span>
          <select v-model="courseSelected">
            <option disabled value>Escolha um curso</option>
            <option v-for="option in courses" :key="option.id">
              {{
              option
              }}
            </option>
          </select>
          <span>ATÉ QUANTO PODE PAGAR?</span>
          <h4>{{ sliderValue | numeroPreco }}</h4>
          <div class="slideContainer">
            <input
              type="range"
              min="1"
              max="10000"
              value="10000"
              id="priceRange"
              v-model="sliderValue"
            />
          </div>
        </div>
      </div>

      <section class="scholarshipListContainer">
        <div class="headerList">
          <h4>Resultado:</h4>
          <div class="orderByContainer">
            <h4 class="orderByTxt" style="margin-right: 5px;">Ordenar por</h4>
            <div v-for="orderBy in order" :key="orderBy.id" class="orderByOption">
              <h4>{{ orderBy }}</h4>
              <img src="@/assets/chevron-down-solid.svg" alt="arrowDown" id="arrowDownIcon" />
            </div>
          </div>
        </div>
        <div class="scholarshipList">
          <div v-for="(bolsa, index) in scholarships" :key="bolsa.id" class="scholarshipsListItem">
            <input
              class="checkboxList"
              type="checkbox"
              id="choose"
              :value="`${index}`"
              v-model="checkedScholarships"
            />
            <div class="imgList">
              <img :src="`${bolsa.university.logo_url}`" alt />
            </div>
            <div v-if="winWidth >= 966" class="courseTitleContainer">
              <h4>{{ bolsa.course.name }}</h4>
              <h5>{{ bolsa.course.level }}</h5>
            </div>
            <div v-if="winWidth >= 966" class="discountContainer">
              <div>
                <h4>Bolsa de</h4>
                <h3>{{ Math.round(bolsa.discount_percentage) }}%</h3>
              </div>
              <h3>R$ {{ Math.round(bolsa.price_with_discount) }}/mês</h3>
            </div>
            <div v-else class="rightInfoContainer">
              <div class="courseTitleContainer">
                <h3 class="courseTitle">{{ bolsa.course.name }}</h3>
                <h4 class="courseSubTitle">{{ bolsa.course.level }}</h4>
              </div>
              <div class="discountContainer">
                <div class="discountTitleContainer">
                  <h4 class="discountTitle">Bolsa de</h4>
                  <h3 class="money">{{ Math.round(bolsa.discount_percentage) }}%</h3>
                </div>
                <h3 class="money">R$ {{ Math.round(bolsa.price_with_discount) }}/mês</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div class="buttonsContainer">
        <div class="buttons">
          <div class="cancelBtn" @click="fecharModal">
            <h4 @click="fecharModal">Cancelar</h4>
          </div>
          <div
            class="addBtn"
            :class="{ btnDisabled: btnDisabled }"
            @click="addScholarships($event)"
          >
            <h4 :class="{ btnDisabled: btnDisabled }">Adicionar bolsa(s)</h4>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "ModalAddScholarship",
  props: {
    modal: { type: Boolean },
    data: { type: Array },
    winWidth: { type: Number }
  },
  data() {
    return {
      citySelected: "",
      courseSelected: "",
      options: [],
      cities: [],
      courses: [],
      sliderValue: "10000",
      kind: [],
      scholarships: [],
      scholarshipsAux: this.$store.state.favScholarshipsStore,
      order: ["Nome da faculdade"],
      checkedScholarships: [],
      btnDisabled: true
    };
  },
  mounted() {
    this.filterCities();
    this.filterCourses();
  },
  filters: {
    numeroPreco(valor) {
      return `R$${valor}`;
    }
  },
  methods: {
    ...mapActions(["changeFavScholarships"]),

    fecharModal({ target, currentTarget }) {
      if (target === currentTarget) {
        this.$emit("modalChange", false);
      }
    },
    filterCities() {
      let arrCity = Array.from(this.data);
      let result = [];
      arrCity.map(i => {
        result.push(i.campus.city);
      });
      this.cities = result
        .filter((este, i) => result.indexOf(este) === i)
        .sort();
    },
    filterCourses() {
      let arrCourses = Array.from(this.data);
      let result = [];
      arrCourses.map(i => {
        result.push(i.course.name);
      });
      this.courses = result
        .filter((este, i) => result.indexOf(este) === i)
        .sort();
    },
    filterAll() {
      let data = Array.from(this.data);
      let city = this.citySelected;
      let course = this.courseSelected;
      // if(this.checkBoxSelected === "")
      let kind = this.kind;
      let price = this.sliderValue;
      let resultAux = [];
      let result = [];
      data.map(i => {
        if (
          i.course.name === course &&
          i.campus.city === city &&
          i.price_with_discount <= price
        )
          resultAux.push(i);
      });
      if (kind != null) {
        resultAux.map(i => {
          kind.forEach(el => {
            if (i.course.kind === el) result.push(i);
          });
        });
        result.sort((a, b) =>
          a.university.name.localeCompare(b.university.name)
        );
        return (this.scholarships = result);
      }
    },
    addScholarships() {
      let data = this.scholarships;
      let check = Array.from(this.checkedScholarships);
      let result = [];

      data.map(i => {
        check.forEach(el => {
          if (data.indexOf(i) === parseInt(el)) result.push(i);
        });
      });
      this.btnDisabled
        ? this.return
        : this.fecharModal(event.target, event.currentTarget);
      this.$emit("favScholarships", result);

      result.forEach(el => {
        this.scholarshipsAux.push(el);
      });
      this.changeFavScholarships(this.scholarshipsAux);
    }
  },
  watch: {
    citySelected: function() {
      this.filterAll();
    },
    courseSelected: function() {
      this.filterAll();
    },
    checkBoxPresencial: function() {
      this.filterAll();
    },
    checkBoxADistancia: function() {
      this.filterAll();
    },
    sliderValue: function() {
      this.filterAll();
    },
    kind: function() {
      this.filterAll();
    },
    checkedScholarships: function() {
      this.checkedScholarships.length > 0
        ? (this.btnDisabled = false)
        : (this.btnDisabled = true);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../styles/components/modalAddScholarship.scss";
@import "../../styles/basics/buttons.scss";
</style>
