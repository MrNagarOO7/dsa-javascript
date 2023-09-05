class Queue {
  constructor(size) {
    this.max = size;
    this.array = new Array(size);
    this.rear = -1; // where item added
    this.front = -1; // where item removed
  }

  enqueue(val) {
    if ((this.rear + 1) % this.max == this.front) {
      console.log("The Circular Queue is full. ==", val);
    } else if (this.front == -1) {
      this.front = 0;
      this.rear = 0;
      this.array[this.rear] = val;
    } else {
      this.rear = (this.rear + 1) % this.max;
      this.array[this.rear] = val;
    }
  }

  dequeue() {
    if (this.front == -1) {
      console.log("Queue is empty");
      return;
    } else if (this.front == this.rear) {
      this.array[this.front] = null;
      this.rear = -1;
      this.front = -1;
    } else {
      this.array[this.front] = null;
      this.front = (this.front + 1) % this.max;
    }
  }

  display() {
    console.log(this.array);
  }
}

let que = new Queue(5);

que.enqueue(1);
que.display();
que.enqueue(2);
que.display();
que.enqueue(3);
que.display();
que.enqueue(4);
que.display();
que.enqueue(5);
que.display();
que.enqueue(6);
que.display();
que.dequeue();
que.display();
que.enqueue(6);
que.display();
que.enqueue(7);
que.display();
que.dequeue();
que.dequeue();
que.display();
que.dequeue();
que.dequeue();
que.display();
que.dequeue();
que.display();
que.dequeue();
que.display();
