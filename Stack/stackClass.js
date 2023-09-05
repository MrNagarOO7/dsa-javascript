class Stack {
  items = [];
  currentSize;
  maxSize;
  constructor(size) {
    this.maxSize = size;
    this.currentSize = 0;
  }

  push(value) {
    if (this.currentSize >= this.maxSize) {
      console.log("Stack is full");
    } else {
      this.items[this.currentSize++] = value;
    }
  }

  pop() {
    if (this.currentSize <= 0) {
      console.log("Stack is empty");
    } else {
      let popedItem = this.items[--this.currentSize];
      this.items.length = this.currentSize;
      return popedItem;
    }
  }

  display() {
    console.log(this.items.join(", "));
  }
}

st = new Stack(5);
st.push(45);
st.push(45);
st.push(45);
st.push(45);
st.push(45);
st.display();
st.pop();
st.display();
