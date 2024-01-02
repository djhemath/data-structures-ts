import Node from './common/singly-linked-node';

export class LinkedList {
  public head: Node | null = null;
  public tail: Node | null = null;
  public length: number = 0;

  constructor(initialValue: any) {
    this.head = new Node(initialValue);
    this.tail = this.head;

    this.incrementLength();
  }

  private incrementLength() {
    this.length += 1;
  }

  private decrementLength() {
    this.length -= 1;
  }
}
