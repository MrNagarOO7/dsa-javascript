let str = "yash-ngr";
let strArray = str.split("");

let stack = [];
let currentSize = stack.length;
let maxSize = strArray.length;

function pushStack(value) {
  if (currentSize >= maxSize) {
    console.log("Stack is full");
  } else {
    stack[currentSize++] = value;
  }
}

function popStack() {
  if (currentSize <= 0) {
    console.log("Stack is empty");
  } else {
    let popedItem = stack[--currentSize];
    stack.length = currentSize;
    return popedItem;
  }
}

function reverseString(stringArray) {
  for (let i = 0; i < stringArray.length; i++) {
    pushStack(stringArray[i]);
  }
  for (let i = 0; i < stringArray.length; i++) {
    stringArray[i] = popStack();
  }
}

console.log(str);
reverseString(strArray);
console.log(strArray.join(""));
