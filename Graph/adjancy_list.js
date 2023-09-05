// Generate object of node as key and value is connected nodes
let data = {
  a: ["b", "c"],
  b: ["a", "c", "d"],
  c: ["a", "b"],
  d: ["b"],
};

console.log("Connected nodes to a");
console.log(data.a);
