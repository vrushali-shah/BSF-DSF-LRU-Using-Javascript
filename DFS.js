
//****DFS******


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

//reset the visited attribute for each Node to false
function resetNodes() {
  allNodes.forEach(node => {
    node.visited = false;
  });
}

resetNodes();

// Graph.
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

// Before the beginning, the stack should contain the start node. 
//We start from A.
stack.push(A);

let output = [];

function DFS() {
  stackLoop: while (stack.length) {
    // The top of the stack is our working node.
    let node = stack[stack.length - 1];

    // Visit the node if it's not visited yet.
    if (!node.visited) {
      node.visited = true;
      output.push(node);
    }

    // Get next node to visit.
    for (let n of node.childNodes) {
      if (!n.visited) {
        // Found the node, just go to the DFS
        // loop for it, pushing it onto the stack.
        stack.push(n);
        continue stackLoop;
      }
    }

    // If we reach here, all child nodes were visited,
    // so just pop the node from the stack.
    stack.pop();
  }
}

DFS();

// DFS: [ 'A', 'B', 'E', 'G', 'F', 'C', 'H', 'D' ]
console.log('DFS:', output.map(n => n.name));
