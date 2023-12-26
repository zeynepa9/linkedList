function LinkedList() {
    this.head = null;
    this.size = 0;
  }
  

function Node(value) {
    this.value = value;
    this.next = null;
  }
  
// Define the append function for the LinkedList class
LinkedList.prototype.append = function(value) {
    // Create a new node with the given value
    var newNode = new Node(value);
  
    // If the list is empty (head is null), set the new node as the head of the list
    if (this.head === null) {
      this.head = newNode;
    } else {
      // If the list is not empty, iterate to the end of the list
      var current = this.head;
      while (current.next) {
        // Move to the next node until reaching the last node
        current = current.next;
      }
  
      // Set the next property of the last node to the new node
      current.next = newNode;
    }
  
    // Increment the size of the list
    this.size++;
  };
  

  // Define the prepend function for the LinkedList class
LinkedList.prototype.prepend = function(value) {
    // Create a new node with the given value
    var newNode = new Node(value);
  
    // If the list is empty (head is null), set the new node as the head of the list
    if (this.head === null) {
      this.head = newNode;
    } else {
      // If the list is not empty, set the new node's next to the current head
      newNode.next = this.head;
     
       // Then set the new node as the new head of the list
       this.head = newNode;

     
    }
  
    // Increment the size of the list
    this.size++;
  };
  

 
// Define the getSize method for the LinkedList class
LinkedList.prototype.getSize = function() {
  return this.size;
};



  // Define the getHead function for the LinkedList class
  LinkedList.prototype.getHead = function() {
    // Return the head (first node) in the list
        return this.head;
  
};



  // Define the getTail function for the LinkedList class
  LinkedList.prototype.getTail = function() {
    // Return the tail (last node) in the list
     // If the list is empty, return null
     if (this.head === null) {
        return null;
    }
      // If the list is not empty, iterate to the end of the list
      var current = this.head;
      while (current.next) {
        // Move to the next node until reaching the last node
        current = current.next;
      }
      return current;
  
};

// Define the at function for the LinkedList class
LinkedList.prototype.at = function(index) {
    // Check if index is out of bounds
    if (index < 0 || index >= this.size) {
        return null; // Return null if the index is invalid
    }

    // Start from the head of the list
    var current = this.head;
    var count = 0; // Initialize a counter

    // Iterate through the list until the index is reached
    while (count < index) {
        current = current.next;
        count++;
    }

    // Return the node at the given index
    return current;
};




  // Define the pop function for the LinkedList class
  LinkedList.prototype.pop = function() {
    // Remove the tail (last element) in the list
     // If the list is empty, return null
     if (this.head === null) {
        return null;
    }
      
      // If the list contains only one node, remove it and return its value
      if (this.head.next === null) {
        var removedValue = this.head.value;
        this.head = null;
        this.size--;
        return removedValue;
    }

      // If the list contains more than one node
      var current = this.head;
      var previous = null;
      while (current.next) {
          previous = current;
          current = current.next;
      }

    // Remove the last node
    previous.next = null;
    this.size--;
    return current.value; // Return the value of the removed node
  
};



// Define the contains function for the LinkedList class
LinkedList.prototype.contains = function(value) {
    // Start from the head of the list
    var current = this.head;

    // Iterate through the list
    while (current) {
        // Check if the current node contains the value
        if (current.value === value) {
            return true; // Value found, return true
        }
        // Move to the next node
        current = current.next;
    }

    // Value not found in the list, return false
    return false;
};


// Define the find function for the LinkedList class
LinkedList.prototype.find = function(value) {
    // Start from the head of the list
    var current = this.head;
    var index = 0; // Initialize an index counter

    // Iterate through the list
    while (current) {
        // Check if the current node contains the value
        if (current.value === value) {
            return index; // Value found, return the index
        }
        // Move to the next node and increment the index
        current = current.next;
        index++;
    }

    // Value not found in the list, return null
    return null;
};


// Define the toString function for the LinkedList class
LinkedList.prototype.toString = function() {
    // Start from the head of the list
    var current = this.head;
    var result = ''; // Initialize an empty string to accumulate the results

    // Iterate through the list
    while (current) {
        // Append the current value to the result string
        result += `( ${current.value} ) -> `;
        // Move to the next node
        current = current.next;
    }

    // Append 'null' at the end of the string to indicate the end of the list
    result += 'null';
    return result;
};


// Define the insertAt function for the LinkedList class
LinkedList.prototype.insertAt = function(value, index) {
    // Create a new node with the given value
    var newNode = new Node(value);

    // Check if the index is out of bounds
    if (index < 0 || index > this.size) {
        return false; // Invalid index, insertion not possible
    }

    // Special case: inserting at the head (beginning) of the list
    if (index === 0) {
        newNode.next = this.head;
        this.head = newNode;
    } else {
        // Find the position to insert the new node
        var current = this.head;
        var previous = null;
        var count = 0;

        // Iterate to the desired index or the end of the list
        while (count < index) {
            previous = current;
            current = current.next;
            count++;
        }

        // Insert the new node
        newNode.next = current;
        previous.next = newNode;
    }

    // Increment the size of the list
    this.size++;
    return true; // Successful insertion
};



// Define the removeAt function for the LinkedList class
LinkedList.prototype.removeAt = function(index) {
    // Check if the index is out of bounds
    if (index < 0 || index >= this.size) {
        return null; // Invalid index, removal not possible
    }

    // Start from the head of the list
    var current = this.head;

    // Special case: removing the head (first node) of the list
    if (index === 0) {
        this.head = current.next;
    } else {
        var previous = null;
        var count = 0;

        // Iterate to the desired index
        while (count < index) {
            previous = current;
            current = current.next;
            count++;
        }

        // Remove the node by skipping it in the list
        previous.next = current.next;
    }

    // Decrement the size of the list
    this.size--;
    return current.value; // Return the value of the removed node
};



const myList = new LinkedList();
myList.append(10);
myList.append(20);
myList.append(30);
myList.prepend(5);
console.log(myList.toString()); 
console.log(myList.getSize()); //4
console.log(myList.at(1));
console.log(myList.contains(10));
console.log(myList.find(5)); 
console.log(myList.getHead()); 
console.log(myList.getTail()); 
console.log(myList.pop()); 
console.log(myList.toString()); 
console.log(myList.insertAt(7, 1));
console.log(myList.toString()); 
console.log(myList.removeAt(2));
console.log(myList.toString()); 



