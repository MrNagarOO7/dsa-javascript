class List {
  constructor(value) {
    this.head = {
      val: value,
      next: null,
    };
    this.tail = this.head;
    this.size = 1;
  }

  addNode(value) {
    let newOb = {
      val: value,
      next: null,
    };
    this.tail.next = newOb;
    this.tail = newOb; // Refernce memory wiil be same tail & newOb
    ++this.size;
  }

  insertNode(index, value) {
    let counter = 1;
    let currentNode = this.head;
    while (counter < index - 1) {
      currentNode = currentNode.next;
      ++counter;
    }
    let nextNode = currentNode.next;

    currentNode.next = {
      val: value,
      next: nextNode,
    };
    this.size++;
  }

  searchNodeByValue(value) {
    let currentNode = this.head;
    let counter = 1;
    while (counter < this.size) {
      if (currentNode.val === value) {
        console.log("Element on ", counter);
        break;
      } else {
        currentNode = currentNode.next;
      }
      counter++;
    }
    if (counter >= this.size) console.log("No element found");
  }

  display() {
    let counter = 0;
    let currentNode = this.head;
    while (counter < this.size) {
      console.log(currentNode);
      currentNode = currentNode.next;
      ++counter;
    }
  }

  deleteNode(nodeNum) {
    let currentNode = this.head;
    let counter = 1;

    if (nodeNum === 1) {
      this.head = this.head.next;
      --this.size;
    } else {
      if (nodeNum <= this.size) {
        while (counter < nodeNum - 1) {
          currentNode = currentNode.next;
          ++counter;
        }
        let nextNode = currentNode.next.next;
        currentNode.next = nextNode;
        --this.size;
      } else {
        console.log("Check Node number");
      }
    }
  }
}

let list = new List(10);
list.addNode(13);
list.addNode(25);
list.addNode(30);
list.addNode(47);
list.addNode(59);
list.deleteNode(1);
list.insertNode(2, 99);
list.display();
list.searchNodeByValue(13);
