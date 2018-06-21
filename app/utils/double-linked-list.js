import Node from './list-node';

export default class DoubleLinkedList {
  constructor(arr) {
    this.head = null;
    this.tail = null;
    this.numberOfValues = 0;
    this.initialize(arr);
  }

  initialize(arr) {

    for (let s of arr) {
      this.add(s);
    }

  }

  add(data) {
    let node = new Node(data);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      node.previous = this.tail;
      this.tail.next = node;
      this.tail = node;
    }
    this.numberOfValues++;
  }

  length() {
    return this.numberOfValues;
  }

  forEach(fn) {
    let current = this.head;
    while (current) {
      if (fn) {
        fn(current);
      }
      current = current.next;
    }
  }

  findByValue(value) {
    let current = this.head;
    while (current) {
      if (current.value.localeCompare(value) === 0) {
        return current;
      }
      current = current.next;
    }
    return null;
  }
}