export default class FractionModel {
    constructor(num, den) {
        this.key = new Date().getTime();
        this.num = num;
        this.den = den;
    }
}
