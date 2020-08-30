<template>
  <div class="semester">
    <div class="semesterContainer">
      <div :class="{item1}" @click.self="onClick($event)" id="item1" value="1">Todos os semestres</div>
      <div :class="{item2}" @click.self="onClick($event)" id="item2" value="2">2º semestre de 2019</div>
      <div :class="{item3}" @click.self="onClick($event)" id="item3" value="3">1º semestre de 2020</div>
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
      picked: 0,
      value: {
        type: Boolean,
        default: false
      },
      item1: true,
      item2: false,
      item3: false
    };
  },
  methods: {
    // TODO MAKE IT MORE EFFICIENT
    onClick(event) {
      let el = event.target.id;
      let value;
      if (el === "item1") {
        this.item1 = true;
        this.item2 = false;
        this.item3 = false;
        value = 1;
      } else if (el === "item2") {
        this.item1 = false;
        this.item2 = true;
        this.item3 = false;
        value = 2;
      } else if (el === "item3") {
        this.item1 = false;
        this.item2 = false;
        this.item3 = true;
        value = 3;
      }
      console.log(value);
      this.$emit("semesterFilter", value);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../styles/components/Semesters.scss";
</style>
