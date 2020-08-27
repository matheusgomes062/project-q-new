<template>
  <div class="semester">
    <div class="semesterContainer">
      <div
        class="item"
        :class="{ item1 }"
        @click="toggleSwitch($event)"
        id="item1"
        value="1"
      >
        Todos os semestres
      </div>
      <div
        class="item"
        :class="{ item2 }"
        @click="toggleSwitch($event)"
        id="item2"
        value="2"
      >
        2º semestre de 2019
      </div>
      <div
        class="item"
        :class="{ item3 }"
        @click="toggleSwitch($event)"
        id="item3"
        value="3"
      >
        1º semestre de 2020
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Semesters",
  data() {
    return {
      selected: false,
      selectedItem: true,
      picked: "",
      item1: true,
      item2: false,
      item3: false
    };
  },
  methods: {
    toggleSwitch(val) {
      let el = val.target.id;
      if (el === "item1") {
        this.item1 = true;
        this.item2 = false;
        this.item3 = false;
        this.$emit("semesterFilter", 1);
      } else if (el === "item2") {
        this.item1 = false;
        this.item2 = true;
        this.item3 = false;
        this.$emit("semesterFilter", 2);
      } else if (el === "item3") {
        this.item1 = false;
        this.item2 = false;
        this.item3 = true;
        this.$emit("semesterFilter", 3);
      }
    }
  }
};
</script>

<style lang="css">
@import "./styles/SemestersStyle.css";
</style>
