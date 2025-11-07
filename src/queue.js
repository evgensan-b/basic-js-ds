// const { NotImplementedError } = require('../lib/errors');
const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  getUnderlyingList() {
    // Remove line below and write your code here
    if (!this.head) {
      return null;
    }

    let current = this.head;
    const result = { value: current.value, next: null };
    let resultCurrent = result;
    
    current = current.next;
    while (current) {
      resultCurrent.next = { value: current.value, next: null };
      resultCurrent = resultCurrent.next;
      current = current.next;
    }
    
    return result;
  }

  enqueue(value) {
    // Remove line below and write your code here
    const newNode = new ListNode(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  dequeue() {
    // Remove line below and write your code here
    if (!this.head) {
      return undefined;
    }

    const dequeuedValue = this.head.value;
    this.head = this.head.next;

    if (!this.head) {
      this.tail = null;
    }

    return dequeuedValue;
  }
}

module.exports = {
  Queue
};
