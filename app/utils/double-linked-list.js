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
    let node = new Node(data, this.numberOfValues);
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


  getByIndex(index) {
    let current = this.head;
    let counter = 0;
    while (counter < index) {
      current = current.next;
      counter++;
    }
    return current;
  }
}