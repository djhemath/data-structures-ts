export default class SinglyLinkedNode {
  public value: any;
  public next: (SinglyLinkedNode | null) = null;

  constructor(value: any) {
    this.value = value;
  }
}