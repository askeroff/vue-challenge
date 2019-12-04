export default class Stack {
  // Array is used to implement stack
  constructor() {
    this.items = [];
  }

  push(item) {
    this.items.push(item);
  }
  pop() {
    if (this.items.length > 0) {
      return this.items.pop();
    }
    return null;
  }
  last() {
    return this.items[this.items.length - 1];
  }
  isEmpty() {
    return this.items.length === 0;
  }
}
