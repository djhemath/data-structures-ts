import Node from './common/singly-linked-node';

export class LinkedList {
  public head: Node;

  constructor(initialValue: any) {
    this.head = new Node(initialValue);
  }

  print() {
    console.log(JSON.stringify(this, null, 2));
  }
}
