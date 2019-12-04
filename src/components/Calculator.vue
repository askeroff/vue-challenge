<template>
    <div class="calculator">
        <div class="flex">
            <div>
                <div class="input_fraction_wrapper">
                    <input type="text" class="input_fraction"/>
                </div>
                <div class="input_fraction_wrapper">
                    <input type="text" class="input_fraction"/>
                </div>
            </div>
            <FractionVue v-for="frac in fractions"
                         v-bind:key="frac.key" v-bind:frac="frac"></FractionVue>
        </div>

        <button class="btn-primary">Add a fraction</button>
    </div>
</template>

<script>
    import FractionVue from './Fraction';
    import FractionModel from '../models/Fraction';

    export default {
        name: "CalculatorVue",
        data() {
            return {
                fractions: [new FractionModel('1', '2')]
            }
        },
        components: {
            FractionVue
        }
    };
</script>
