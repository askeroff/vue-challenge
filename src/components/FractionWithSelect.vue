<template>
  <div class="flex">
    <div class="select_wrapper">
      <select v-model="frac.sign" name="operators" id="operators">
        <option
          v-for="operator in operators"
          v-bind:key="operator"
          v-bind:value="operator"
        >{{operator}}</option>
      </select>
    </div>

    <FractionVue v-bind:frac="frac"></FractionVue>
  </div>
</template>

<script>
import FractionModel from "../models/Fraction";
import FractionVue from "./Fraction";
export default {
  name: "FractionWithSelectVue",
  props: {
    frac: FractionModel
  },
  components: {
    FractionVue
  },
  data() {
    return {
      operators: ["+", "-", "*", "/"]
    };
  }
};
</script>
