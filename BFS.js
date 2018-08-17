
//***BFS*****

class Node {
  constructor(name, childNodes) {
    this.name = name;
    this.childNodes = childNodes;
    this.visited = false;
  }
}

// Nodes.
let A = new Node('A');
let B = new Node('B');
let C = new Node('C');
let D = new Node('D');
let E = new Node('E');
let F = new Node('F');
let G = new Node('G');
let H = new Node('H');

let allNodes = [A, B, C, D, E, F, G, H];

function resetNodes() {
  allNodes.forEach(node => {
    node.visited = false;
  });
}

resetNodes();

// Graph 1.
A.childNodes = [B, D, G];
B.childNodes = [E, F];
C.childNodes = [F, H];
D.childNodes = [A, F];
E.childNodes = [B, G];
F.childNodes = [B, C, D];
G.childNodes = [A, E];
H.childNodes = [C];


// DFS maintains an explicit stack of working nodes.

let stack = [];

// Before the beginning, the stack should contain
// the start node. We start from A.
stack.push(A);

let output = [];

// Clear visited flag.
resetNodes();
output = [];

// BFS maintains a queue of working nodes.

let queue = [];

// Enqueue the start node, A.
queue.unshift(A);

function BFS() {
  queueLoop: while (queue.length) {
    // Get the next queued node to work on.
    let node = queue.shift();

    // Visit the node if it's not visited yet.
    if (!node.visited) {
      node.visited = true;
      output.push(node);
    }

    // Visit all direct child nodes, and enqueue them.
    for (let n of node.childNodes) {
      if (!n.visited) {
        n.visited = true;
        output.push(n);
        queue.unshift(n);
      }
    }

    // Go to the next node from the queue
    // on the following iteration.
  }
}

BFS();

// BFS: [ 'A', 'B', 'D', 'G', 'E', 'F', 'C', 'H' ]
console.log('BFS:', output.map(n => n.name));