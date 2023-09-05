let array = [5, 7, 12, 25, 45, 67];
let search = 5;

function binarySearch(data, start, end, value) {
  let mid = Math.floor((start + end) / 2);
  if (start > end) {
    console.log("Value not found");
  } else if (data[mid] === value) {
    console.log("Value at ", mid);
  } else if (value > data[mid]) {
    binarySearch(data, mid + 1, end, value);
  } else {
    binarySearch(data, start, mid - 1, value);
  }
}

binarySearch(array, 0, array.length - 1, search);
