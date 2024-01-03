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

  public append(value: any): boolean {
    if(this.head === null) {
      return false;
    }

    const newNode = new Node(value);

    if(this.tail !== null) {
      this.tail.next = newNode;
      this.tail = newNode;

      this.incrementLength();
      return true;
    } else {
      return false;
    }
  }

  public remove(index: number) {
    if(!this.head) {
      return false;
    }

    // First element
    if(index === 0) {
      this.head = this.head.next;
      this.decrementLength();
      return true;
    }

    let counter = 0;
    let currentNode: (Node | null) = this.head;
    let previousElement :(Node | null) = null;

    while(currentNode) {
      if((counter === index) && previousElement) {
        previousElement.next = currentNode.next;

        // Last element
        if(index === (this.length-1)) {
          this.tail = previousElement;
        }

        this.decrementLength();
        return true;
      }

      counter += 1;
      previousElement = currentNode;
      currentNode = currentNode.next;
    }

    return false;
  }

  public print() {
    console.log(JSON.stringify(this, null, 2));
  }

  public printAsPictorial() {
    let currentNode = this.head;

    if(!currentNode) {
      return '[]';
    }

    let result = '[ ';

    while(currentNode) {
      result += `${currentNode.value}`;
      currentNode = currentNode?.next;
      if(currentNode?.value) {
        result += ` -> `;
      }
    }

    result += ' ]';
    result += ` (${this.length})`;

    console.log(result);
  }
}
