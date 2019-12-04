<template>
  <div class="calculator">
    <div class="flex">
      <FractionVue v-bind:frac="fractions[0]"></FractionVue>
      <FractionWithSelectVue
        v-for="frac in fractions.slice(1)"
        v-bind:key="frac.key"
        v-bind:frac="frac"
      ></FractionWithSelectVue>
      <div class="flex answer">
        <div class="equal-sign">=</div>
        <FractionVue v-bind:disabled="true" v-bind:frac="answer"></FractionVue>
      </div>
    </div>

    <div class="flex buttons-block">
      <button v-on:click="addFraction" class="btn-primary">Add a fraction</button>
      <button v-on:click="calculate" class="btn-primary">Calculate</button>
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
      fractions: [
        new FractionModel("2", "3", 1),
        new FractionModel("1", "2", 2),
        new FractionModel("3", "4", 3),
        new FractionModel("2", "4", 4),
        new FractionModel("13", "24", 5)
      ],
      answer: new FractionModel("", "", 0)
    };
  },
  methods: {
    addFraction() {
      this.fractions.push(new FractionModel("", "", this.fractions.length + 1));
    },
    calculate() {
      const answer = FractionModel.calcNumerator(this.fractions);
      const reduced = FractionModel.reduceFraction(answer.num, answer.den);
      // eslint-disable-next-line
      console.log(reduced);
      this.answer.den = reduced[1];
      this.answer.num = reduced[0];
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

.answer {
  margin-left: 15px;
  border-bottom: 2px solid #1f1235;
  padding: 10px;
}

.equal-sign {
  margin: 0 10px;
  font-size: 2em;
}
</style>
