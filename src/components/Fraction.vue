<template>
    <div class="flex">
        <div class="select_wrapper">
            <select name="operators" id="operators">
                <option
                        v-for="operator in operators"
                        v-bind:key="operator"
                        v-bind:value="operator"
                >{{operator}}
                </option>
            </select>
        </div>

        <div>
            <div class="input_fraction_wrapper">
                <input type="text" v-model="fractionModel.num" value="fractionModel.num" name="num"
                       class="input_fraction"/>
            </div>
            <div class="input_fraction_wrapper">
                <input type="text" v-model="fractionModel.den" value="fractionModel.den" name="den"
                       class="input_fraction"/>
            </div>
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
                operators: ["+", "-", "*", "/"],
                fractionModel: this.frac
            };
        }
    };
</script>
