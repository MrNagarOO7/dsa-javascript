// In Map key can be boolean, string, number
// In object key can be only string

let data = new Map([[true, "nagar"]]);
data.set(1, "yash");
data.set([1, 2, 3], "Jaja");

console.log(data);
console.log(data.size);
console.log(data.has(1));
console.log(data.get(true));
// data.clear();
// console.log(data);
for (x of data) {
  console.log(x);
}
data.delete(true);
console.log(data);
