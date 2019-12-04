<template>
  <div>
    <div class="input_fraction_wrapper">
      <input
        type="text"
        v-model="fractionModel.num"
        value="fractionModel.num"
        name="num"
        class="input_fraction"
      />
    </div>
    <div class="input_fraction_wrapper">
      <input
        type="text"
        v-model="fractionModel.den"
        value="fractionModel.den"
        name="den"
        class="input_fraction"
      />
    </div>
  </div>
</template>

<script>
import FractionModel from "../models/Fraction";
export default {
  name: "FractionVue",
  props: {
    frac: FractionModel
  },
  data() {
    return {
      fractionModel: this.frac
    };
  }
};
</script>