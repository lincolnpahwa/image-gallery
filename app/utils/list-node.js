export default class Node {
  constructor(value, index=0, prev = null, next = null) {
    this.value = value;
    this.index = index;
    this.previous = prev;
    this.next = next;
  }
}