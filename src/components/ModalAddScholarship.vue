<template>
  <section class="modal" v-if="modal" @click="fecharModal">
    <div class="closeModalContainer" @click="fecharModal">
      <img
        src="@/assets/times-solid.svg"
        alt="closeModal"
        class="closeModalIcon"
        @click="fecharModal"
      />
    </div>
    <div class="modalContainer">
      <section style="margin-bottom: 30px;">
        <h2>Adicionar bolsa</h2>
        <span>Filtre e adicione as bolsas de seu interesse.</span>
      </section>
      <section v-if="winWidth >= 966" class="options">
        <div class="containerModal">
          <span class="modalTitle">SELECIONE SUA CIDADE</span>
          <select class="select" v-model="citySelected">
            <option disabled value>Escolha uma cidade</option>
            <option v-for="option in cities" :key="option">{{ option }}</option>
          </select>
          <span class="modalTitle" style="margin-bottom: 20px;">COMO VOCÊ QUER ESTUDAR?</span>
          <div class="checkboxContainer">
            <div class="checkboxCenter">
              <input
                class="checkbox"
                type="checkbox"
                id="presencial"
                value="Presencial"
                v-model="kind"
                style="margin-left: 0;"
              />
              <label for="presencial">Presencial</label>
            </div>
            <div class="checkboxCenter">
              <input class="checkbox" type="checkbox" id="distancia" value="EaD" v-model="kind" />
              <label for="distancia">A distância</label>
            </div>
          </div>
        </div>
        <div class="containerModal">
          <span class="modalTitle">SELECIONE O CURSO DE SUA PREFERÊNCIA</span>
          <select class="select" v-model="courseSelected">
            <option disabled value>Escolha um curso</option>
            <option v-for="option in courses" :key="option.id">{{ option }}</option>
          </select>
          <span class="modalTitle">ATÉ QUANTO PODE PAGAR?</span>
          <h4 style="margin-bottom: 5px; font-weight: 100;">{{ sliderValue | numeroPreco}}</h4>
          <div class="slideContainer">
            <input
              type="range"
              min="1"
              max="10000"
              value="10000"
              class="slider"
              id="priceRange"
              v-model="sliderValue"
            />
          </div>
        </div>
      </section>
      <!-- MOBILE -->
      <section v-else class="options">
        <div class="containerModal">
          <span class="modalTitle">SELECIONE SUA CIDADE</span>
          <div class="selectBox">
            <select v-model="citySelected">
              <option disabled value>Escolha uma cidade</option>
              <option v-for="option in cities" :key="option">{{ option }}</option>
            </select>
          </div>
          <span class="modalTitle">SELECIONE O CURSO DE SUA PREFERÊNCIA</span>
          <div class="selectBox">
            <select v-model="courseSelected">
              <option disabled value>Escolha um curso</option>
              <option v-for="option in courses" :key="option.id">{{ option }}</option>
            </select>
          </div>
        </div>
        <div class="containerModal">
          <span class="modalTitle" style="margin-bottom: 20px;">COMO VOCÊ QUER ESTUDAR?</span>
          <div class="checkboxContainer">
            <div class="checkboxCenter">
              <input
                class="checkbox"
                type="checkbox"
                id="presencial"
                value="Presencial"
                v-model="kind"
                style="margin-left: 0;"
              />
              <label for="presencial">Presencial</label>
            </div>
            <div class="checkboxCenter">
              <input class="checkbox" type="checkbox" id="distancia" value="EaD" v-model="kind" />
              <label for="distancia">A distância</label>
            </div>
          </div>
          <span class="modalTitle">ATÉ QUANTO PODE PAGAR?</span>
          <h4 style="margin-bottom: 5px; font-weight: 100;">{{ sliderValue | numeroPreco}}</h4>
          <div class="slideContainer">
            <input
              type="range"
              min="1"
              max="10000"
              value="10000"
              class="slider"
              id="priceRange"
              v-model="sliderValue"
            />
          </div>
        </div>
      </section>
      <!-- END MOBILE -->
      <section class="scholarshipListContainer">
        <div class="headerList">
          <h4>Resultado:</h4>
          <div class="orderByContainer">
            <h4 class="orderByTxt" style="margin-right: 5px;">Ordenar por</h4>
            <div v-for="orderBy in order" :key="orderBy.id" class="orderByOption">
              <div class="containerOrderBy">
                <h4>{{orderBy}}</h4>
                <img src="@/assets/chevron-down-solid.svg" alt="arrowDown" id="arrowDownIcon" />
              </div>
            </div>
          </div>
        </div>
        <div class="scholarshipList">
          <div v-for="(bolsa,index) in scholarships" :key="bolsa.id" class="scholarshipsListItem">
            <input
              class="checkboxList"
              type="checkbox"
              id="choose"
              :value="`${index}`"
              v-model="checkedScholarships"
            />
            <div class="imgList">
              <img class="imgListItem" :src="`${bolsa.university.logo_url}`" alt />
            </div>
            <div v-if="winWidth >= 966" class="courseTitleContainer">
              <h4 class="courseTitle">{{ bolsa.course.name }}</h4>
              <h5 class="courseSubTitle">{{ bolsa.course.level }}</h5>
            </div>
            <div v-if="winWidth >= 966" class="discountContainer">
              <div class="discountTitleContainer discountTitleContainerDesktop">
                <h4 class="discountTitle">Bolsa de</h4>
                <h3 class="money">{{ Math.round(bolsa.discount_percentage) }}%</h3>
              </div>
              <h3 class="money">R$ {{ Math.round(bolsa.price_with_discount) }}/mês</h3>
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
          <div class="addBtn" :class="{btnDisabled:btnDisabled}" @click="addScholarships($event)">
            <h4
              :class="{btnDisabled:btnDisabled}"
              style="border-style: none !important"
            >Adicionar bolsa(s)</h4>
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

<style scoped lang="css">
@import "./styles/ModalAddScholarshipStyle.css";
</style>