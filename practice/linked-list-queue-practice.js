// Basic implementation of Nodes and Linked List for you to use

class SinglyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor(head = null) {
        this.head = head;
        this.length = 0;
    }

    addToTail(val) {
        let newNode = new SinglyLinkedNode(val);
        this.length++;
        if (!this.head) {
            this.head = newNode;
            return this.head;
        }

        let curr = this.head;
        while (curr.next) {
            curr = curr.next;
        }

        curr.next = newNode;
        return this.head;
    }

    addToHead(val) {
        // Add node of val to head of linked list
        const node = new SinglyLinkedNode(val);
        // Your code here
        node.next = this.head;
        this.head = node;
        this.length++;
        return this;
        // Write your hypothesis on the time complexity of this method here
        //time: O(1)
        //space: O(1)
    }

    listLength() {
        // Returns the length of the list
        // Implement in O(n) and in O(1) time complexity

        // Your code here
        return this.length;
    }

    sumOfNodes() {
        // Returns the sum of the values of all the nodes
        if (!this.head) return null;
        else if (!this.head.next) return this.head.value;
        else {
            let curr = this.head;
            let sum = 0;
            while (curr) {
                sum += curr.value;
                curr = curr.next;
            }
            return sum;
        }
        // Your code here

        // Write your hypothesis on the time complexity of this method here
    }

    averageValue() {
        // Returns the average value of all the nodes
        return this.sumOfNodes() / this.length;
        // Your code here

        // Write your hypothesis on the time complexity of this method here
    }

    findNthNode(n) {
        // Returns the node at the nth index from the head
        let counter = 0;
        if (!this.head) return null;
        let curr = this.head;
        while (counter < n) {
            curr = curr.next;
            counter++;
        }
        return curr;
        // Your code here

        // Write your hypothesis on the time complexity of this method here
    }

    findMid() {
        // Returns the middle node
        let mid = Math.floor(this.length / 2);
        if (this.length % 2 === 0) mid = Math.floor((this.length - 1) / 2);
        return this.findNthNode(mid);
        // Implement this as a singly linked list then as a doubly linked list
            // How do the implementation for singly and doubly vary if at all?

        // Your code here

        // Write your hypothesis on the time complexity of this method here
    }


    reverse() {
        // Returns a new reversed version of the linked list
        // Try implementing it by returning a new linked list then returning
        // the original linked list reversed in place
            // Does the time complexity change? How about space complexity?

        // Your code here
        const reversed = new SinglyLinkedList();
        let curr = this.head
        while (curr.next) {

            reversed.addToHead(curr);
            curr = curr.next;

            if (reversed.length === 1)
            reversed.head.next = null
            } else {

            }


        // for (let i = this.length - 1; i >= 0; i--) {
        //     let last = this.findNthNode(i);
        //     if (reversed.length === 0)
        //     reversed.addToHead(last);
        //}
        Write your hypothesis on the time complexity of this method here
    }

    reverseInPlace() {
        // Reverses the linked list in-place

        // Your code here

        // Write your hypothesis on the time complexity of this method here
    }

}

class DoublyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor(head = null) {
        this.head = head;
        this.tail = head;
    }

    addToTail(val) {
        let newNode = new DoublyLinkedNode(val);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            return this.head;
        }

        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;

        return this.head;
    }

    findMid() {
        // Returns the middle node
        // Implement this as a singly linked list then as a doubly linked list
            // How do the implementation for singly and doubly vary if at all?

        // Your code here

        // Write your hypothesis on the time complexity of this method here
    }

    reverse() {
        // Returns a new reversed version of the linked list

        // Your code here

        // Write your hypothesis on the time complexity of this method here
    }

    reverseInPlace() {
        // Reverses the linked list in-place

        // Your code here

        // Write your hypothesis on the time complexity of this method here
    }

}

module.exports = {
    SinglyLinkedNode,
    SinglyLinkedList,
    DoublyLinkedNode,
    DoublyLinkedList
}