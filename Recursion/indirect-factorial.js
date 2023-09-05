function getFactorial(number) {
  if (number === 1) return 1;
  else return number * callFactorial(number - 1);
}

function callFactorial(value) {
  return getFactorial(value);
}

console.log(getFactorial(5));

// Indirect recursion where recursion via another function call in main function
