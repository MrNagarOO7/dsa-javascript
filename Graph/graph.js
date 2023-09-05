class Graph {
  constructor() {
    this.data = {};
  }

  addVertex(vertex) {
    if (!this.data[vertex]) {
      this.data[vertex] = [];
    }
  }

  addEdge(v1, v2) {
    if (!this.data[v1]) this.addVertex(v1);
    if (!this.data[v2]) this.addVertex(v2);

    if (this.data[v1].indexOf(v2) === -1) {
      this.data[v1].push(v2);
    }
    if (this.data[v2].indexOf(v1) === -1) {
      this.data[v2].push(v1);
    }
  }

  removeEdge(v1, v2) {
    let v2Index = this.data[v1].indexOf(v2);
    let v1Index = this.data[v2].indexOf(v1);
    if (v2Index !== -1) {
      this.data[v1].splice(v2Index, 1);
    }
    if (v1Index !== -1) {
      this.data[v2].splice(v1Index, 1);
    }
  }

  removeVertext(v1) {
    if (!this.data[v1]) {
      console.log("vertex not found");
      return;
    }
    [...this.data[v1]].forEach((v2) => {
      this.removeEdge(v1, v2);
    });
    delete this.data[v1];
  }
}

let graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "C");
graph.addEdge("B", "D");

console.log(graph.data);

// graph.removeEdge("B", "D");

// console.log(graph.data);

graph.removeVertext("A");

console.log(graph.data);
