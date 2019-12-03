<template>
  <div class="calculator">
    <div class="flex">
      <div>
        <div class="input_fraction_wrapper">
          <input type="text" class="input_fraction" />
        </div>
        <div class="input_fraction_wrapper">
          <input type="text" class="input_fraction" />
        </div>
      </div>

      <div class="select_wrapper">
        <select name="operators" id="operators">
          <option
            v-for="operator in operators"
            v-bind:key="operator"
            v-bind:value="operator"
          >{{operator}}</option>
        </select>
      </div>

      <div>
        <div class="input_fraction_wrapper">
          <input type="text" class="input_fraction" />
        </div>
        <div class="input_fraction_wrapper">
          <input type="text" class="input_fraction" />
        </div>
      </div>
    </div>

    <button class="btn-primary">Add a fraction</button>
  </div>
</template>

<script>
export default {
  name: "CalculatorVue",
  data() {
    return { operators: ["+", "-", "*", "/"] };
  }
};
</script>

<style scoped>
.input_fraction_wrapper {
  width: 60px;
  padding: 10px 0;
}

.input_fraction_wrapper + .input_fraction_wrapper {
  border-top: 2px solid #1f1235;
}

.input_fraction {
  width: 100%;
}

.select_wrapper {
  margin: 0 30px;
}

.select_wrapper select {
  width: 60px;
  outline: 0;
}
</style>