function headRecursion(value) {
  console.log(value);
  if (value > 0) {
    headRecursion(value - 1);
  }
}

function tailRecursion(value) {
  if (value > 0) {
    tailRecursion(value - 1);
  }
  console.log(value);
}

headRecursion(5);
tailRecursion(5);
