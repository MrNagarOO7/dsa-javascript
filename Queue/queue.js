let queue = [];
let current = queue.length;
let maxSize = 5;

function enqueue(value) {
  if (current >= maxSize) {
    console.log("Queue is full.");
  } else {
    queue[current++] = value;
  }
}

function dequeue() {
  if (isEmptyQueue()) {
    console.log("Queue is empty.");
  } else {
    for (let i = 0; i < queue.length - 1; i++) {
      queue[i] = queue[i + 1];
    }
    queue.length = --current;
  }
}

function frontqueue() {
  if (isEmptyQueue()) {
    console.log("Queue is empty.");
  } else {
    console.log("Front :-", queue[0]);
  }
}

function isEmptyQueue() {
  return current <= 0;
}

function rearqueue() {
  if (isEmptyQueue()) {
    console.log("Queue is empty.");
  } else {
    console.log("Rear :-", queue[current - 1]);
  }
}

function dispay() {
  console.log(queue);
}

enqueue(1);
enqueue(2);
frontqueue();
enqueue(3);
enqueue(4);
enqueue(5);
rearqueue();
enqueue(6);
dispay();
dequeue();
frontqueue();
dispay();
dequeue();
dispay();
dequeue();
dequeue();
dequeue();
dispay();
dequeue();
frontqueue();
