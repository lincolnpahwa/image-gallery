export default class Node {
  constructor(value, prev = null, next = null) {
    this.value = value;
    this.previous = prev;
    this.next = next;
  }
}