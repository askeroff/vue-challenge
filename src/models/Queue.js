export default class Queue {
  // Array is used to implement a Queue
  constructor() {
    this.items = [];
  }
  enqueue(item) {
    this.items.push(item);
  }
  dequeue() {
    if (this.items.length > 0) {
      return this.items.shift();
    }
    return null;
  }
  front() {
    return this.items[0];
  }

  isEmpty() {
    return this.items.length === 0;
  }
}
