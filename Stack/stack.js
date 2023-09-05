let stack = [];
let currentSize = stack.length;
let maxSize = 5;

function pushStack(value) {
  if (currentSize >= maxSize) {
    console.log("Stack is full");
  } else {
    stack[currentSize++] = value;
    console.log("Stack ==>", stack);
  }
}

function popStack() {
  if (currentSize <= 0) {
    console.log("Stack is empty");
  } else {
    stack.length = --currentSize;
    console.log("Stack ==>", stack);
  }
}

pushStack(10);
pushStack(20);
pushStack(30);
pushStack(40);
pushStack(50);
pushStack(60);
popStack();
popStack();
popStack();
popStack();
popStack();
popStack();
