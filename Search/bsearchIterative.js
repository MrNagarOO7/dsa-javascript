let array = [5, 7, 12, 25, 45, 67];
let search = 6;
let start = 0;
let end = array.length - 1;
let found = false;

while (start <= end) {
  let mid = Math.floor((start + end) / 2);
  if (array[mid] == search) {
    console.log("Element on ", mid);
    found = true;
    break;
  } else if (search > array[mid]) {
    start = mid + 1;
  } else {
    end = mid - 1;
  }
}

if (!found) console.log("Element not found");
