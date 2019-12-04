<template>
  <div class="calculator">
    <div class="flex">
      <FractionVue v-bind:frac="fractions[0]"></FractionVue>
      <FractionWithSelectVue
        v-for="frac in fractions.slice(1)"
        v-bind:key="frac.key"
        v-bind:frac="frac"
      ></FractionWithSelectVue>
    </div>

    <div class="flex buttons-block">
      <button v-on:click="addFraction" class="btn-primary">Add a fraction</button>
      <button class="btn-primary">Calculate</button>
    </div>
  </div>
</template>

<script>
import FractionWithSelectVue from "./FractionWithSelect";
import FractionVue from "./Fraction";
import FractionModel from "../models/Fraction";

export default {
  name: "CalculatorVue",
  data() {
    return {
      fractions: [new FractionModel("", "", 1), new FractionModel("", "", 2)]
    };
  },
  methods: {
    addFraction() {
      this.fractions.push(new FractionModel("", "", this.fractions.length + 1));
    }
  },
  components: {
    FractionVue,
    FractionWithSelectVue
  }
};
</script>

<style scoped>
.buttons-block button + button {
  margin-left: 10px;
}
</style>
