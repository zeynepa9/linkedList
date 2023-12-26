# LinkedList 

## Overview

This project implements a basic LinkedList data structure in JavaScript. It includes various methods to manipulate and interact with the linked list, such as adding, removing, and searching for nodes.

## Features

- `append(value)`: Adds a new node with the specified value to the end of the list.
- `prepend(value)`: Adds a new node with the specified value to the beginning of the list.
- `size()`: Returns the total number of nodes in the list.
- `getHead()`: Returns the first node of the list.
- `getTail()`: Returns the last node of the list.
- `at(index)`: Returns the node at the specified index.
- `pop()`: Removes the last node from the list.
- `contains(value)`: Checks if a node with the specified value exists in the list.
- `find(value)`: Returns the index of the node containing the specified value, or `null` if not found.
- `toString()`: Returns a string representation of the linked list.
- `insertAt(value, index)`: Inserts a new node with the provided value at the specified index.
- `removeAt(index)`: Removes the node at the specified index.

## Usage

To use the LinkedList, first create an instance of the LinkedList class:

```javascript
var myList = new LinkedList();

myList.append(10);
myList.prepend(5);
console.log(myList.toString()); // Outputs: ( 5 ) -> ( 10 ) -> null


This project is for educational purposes and is a part of the Odin Project curriculum.