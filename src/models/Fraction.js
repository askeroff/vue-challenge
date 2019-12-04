import Stack from './Stack';
import Queue from './Queue';

export default class FractionModel {
  sign = '+';
  static precedence = {
    '+': 1,
    '-': 1,
    '*': 2,
    '/': 2
  };

  constructor(num, den, key) {
    this.key = key;
    this.num = num;
    this.den = den;
  }

  static getCommonDenominator(fractions) {
    let result = 1;
    fractions.forEach(item => {
      result *= item.den;
    });
    return result;
  }

  static getInput(fractions) {
    const operators = fractions.map(item => item.sign);
    operators.shift();
    let result = [];
    for (let i = 0; i < fractions.length; i++) {
      result.push(fractions[i]);
      if (i < fractions.length - 1) {
        result.push(operators[i]);
      }
    }
    return result;
  }

  static add(frac1, frac2) {
    let common = frac1.den * frac2.den;
    let first = (common / frac1.den) * frac1.num;
    let second = (common / frac2.den) * frac2.num;
    let num = first + second;
    return new FractionModel(num.toString(), common.toString());
  }

  static subtract(frac1, frac2) {
    let common = frac1.den * frac2.den;
    let first = (common / frac1.den) * frac1.num;
    let second = (common / frac2.den) * frac2.num;
    let num = first - second;
    return new FractionModel(num.toString(), common.toString());
  }

  static multiply(frac1, frac2) {
    let num = frac1.num * frac2.num;
    let den = frac1.den * frac2.den;
    return new FractionModel(num.toString(), den.toString());
  }

  static divide(frac1, frac2) {
    let num = frac1.num * frac2.den;
    let den = frac1.den * frac2.num;
    return new FractionModel(num.toString(), den.toString());
  }

  static parseOutput(output) {
    const stack = new Stack();
    const operations = {
      '+': FractionModel.add,
      '-': FractionModel.subtract,
      '*': FractionModel.multiply,
      '/': FractionModel.divide
    };
    output.forEach(item => {
      // eslint-disable-next-line
      //   debugger;
      if (typeof item !== 'string') {
        stack.push(item);
        return;
      }
      let second = stack.pop();
      let first = stack.pop();
      let result = operations[item](first, second);
      stack.push(result);
    });
    return stack;
  }

  static reduceFraction(num, den) {
    var gcd = function gcd(num, den) {
      return +den ? gcd(+den, +num % +den) : +num;
    };
    gcd = gcd(num, den);
    return [num / gcd, den / gcd];
  }

  static calcNumerator(fractions) {
    // eslint-disable-next-line
    console.log(fractions, 'hey there');
    const output = new Queue();
    const stack = new Stack();
    const precedence = FractionModel.precedence;
    const input = FractionModel.getInput(fractions);
    // debugger;
    input.forEach(item => {
      // eslint-disable-next-line
      //   debugger;
      if (typeof item !== 'string') {
        output.enqueue(item);
        return;
      }
      if (stack.isEmpty()) {
        stack.push(item);
        return;
      }
      const lastOperator = stack.last();
      if (precedence[lastOperator] > precedence[item]) {
        output.enqueue(stack.pop());
      }
      stack.push(item);
    });

    while (!stack.isEmpty()) {
      output.enqueue(stack.pop());
    }
    const parsed = FractionModel.parseOutput(output.items);
    const answer = parsed.pop();
    // eslint-disable-next-line
    console.log(answer, 'output bitch');
    return answer;
  }
}
