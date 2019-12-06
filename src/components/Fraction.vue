<template>
  <div>
    <div class="input_fraction_wrapper">
      <input
        type="text"
        v-model="fractionModel.num"
        v-bind:disabled="disabled"
        v-on:change="handleChange()"
        v-bind:class="{error_input: fractionModel.error}"
        value="fractionModel.num"
        name="num"
        class="input_fraction"
      />
    </div>
    <div class="input_fraction_wrapper">
      <input
        type="text"
        v-bind:disabled="disabled"
        v-model="fractionModel.den"
        v-on:change="handleChange()"
        v-bind:class="{error_input: fractionModel.error}"
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
      frac: FractionModel,
      disabled: Boolean,
      calculate: Function
    },
    data() {
      return {
        fractionModel: this.frac
      };
    },
    methods: {
      handleChange() {
        let allNumbers = !isNaN(+this.fractionModel.den) && +!isNaN(this.fractionModel.num);
        this.fractionModel.error = +this.fractionModel.den === 0 || !allNumbers;
        if (this.fractionModel.error) {
          alert('Fraction invalid');
          return;
        }
        this.calculate();
      }
    }
  };
</script>

<style>
  .error_input {
    border: 1px solid red;
  }
</style>
