# Algorithms using Javascript

## Problem Statement
Implement LRU Cache, Depth-first Search and Breadth-first Search in Javascript.
 
## Implementation
	1. Breadth-first Search
	- BFS is a traversing algorithm where you should start traversing from a selected node (source or starting node) 
    and traverse the graph layerwise thus exploring the neighbour nodes. 
	- We start from a node and visit all the nodes connected to the start node.
	- Then we start from the next visited node.
	- Repeatt the procedure until all the nodes are visited.
	- The first node that is visited completes its traversal first. 
	- Hence its implementation requires Queue data structure.
	
	
	2. Depth-first Search
	- The DFS algorithm is a recursive algorithm that uses the idea of backtracking. 
	- It involves exhaustive searches of all the nodes by going ahead, if possible, else by backtracking.
	- The idea is to keep moving in one direction until a dead-end is reached. 
    Dead-end is the node that has no next node or has all the nodes that are visited. 
	- Once a dead-end is reached, we backtrack.
	- The node that is visited first is visited last.
	- Hence its implementation requires Stack data structure.
	
	
	3. Least Recently Used (LRU) Cache
	- LRU is a page replacement policy, the page that is used least recently will be replaced.
	- This cache algorithm keeps recently used items near the top of cache. 
	- Whenever a new item is accessed, the LRU places it at the top of the cache. 
	- When the cache limit has been reached, items that have been accessed less recently will be removed starting 
    from the bottom of the cache. This strategy is called LRU paging.
	
	
## How to open the file:

Open the .js file on notepad or any other IDE like Visual Studio Copy paste the code into repl.it and hit the run button.
You can then see the output on console.


## References:

https://www.ics.uci.edu/~eppstein/161/960215.html
https://www.geeksforgeeks.org/breadth-first-traversal-for-a-graph/
http://www.radford.edu/~nokie/classes/360/graphs-bfs-dfs-algs.html
https://www.npmjs.com/package/lru-cache http://www.cnblogs.com/Liok3187/p/4575757.html https://discuss.leetcode.com/topic/68175/js-implementation-with-very-detailed-explanation-easy-to-understand
http://searchstorage.techtarget.com/definition/cache-algorithm



## Author
- Vrushali Shah
