function getFibonacci(number) {
  if (number < 2) return number;
  else return getFibonacci(number - 1) + getFibonacci(number - 2);
}

console.log(getFibonacci(6));

//0, 1, 1, 2, 3, 5, 8, 13, 21, 38
