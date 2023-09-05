let arr = [90, 78, 5, 34, 66, 44];

function reverseArr(array, start, end) {
  if (start <= end) {
    let temp = array[start];
    array[start] = array[end];
    array[end] = temp;
    reverseArr(array, start + 1, end - 1);
  }
}

console.log("old =>", arr);
reverseArr(arr, 0, arr.length - 1);
console.log("reverse =>", arr);
