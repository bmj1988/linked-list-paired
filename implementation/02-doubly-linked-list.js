// Node class is implemented for you, no need to look for bugs here!
class DoublyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    addToHead(val) {
        // There are bugs in this method! Fix them!!!

        // Add node of val to head of linked list
        let newNode = new DoublyLinkedNode(val);

        if (this.length >= 1) {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        } else {
            this.head = newNode;
            this.tail = newNode;
        }

        this.length++;

        // Write your hypothesis on the time complexity of this method here
    }

    addToTail(val) {
        // Add node of val to tail of linked list
        const node = new DoublyLinkedNode(val);

        if (this.length === 0) {
            this.head = node;
            this.tail = node;
            this.length++;
            return;
        }
        let curr = this.head;
        while (curr.next) {
            curr = curr.next
        }
        curr.next = node;
        node.prev = curr;
        this.tail = node;
        this.length++;
        // Your code here

        // Write your hypothesis on the time complexity of this method here
    }

    removeFromHead() {
        // Remove node at head

        if (this.length === 0) return undefined;
        let removed = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
        // Your code here
        this.head = this.head.next;
        this.head.prev = null
        }
        this.length--;
        return removed.value;

        // Write your hypothesis on the time complexity of this method here
    }

    removeFromTail() {
        // Remove node at tail
        if (this.length === 0) return undefined;
        let removed = this.tail;
        if (this.length === 1) {
            this.head = null;
            this.tail = null
        } else {
        this.tail = this.tail.prev;
        this.tail.next = null;
        }
        this.length--;
        return removed.value;
        // Your code here

        // Write your hypothesis on the time complexity of this method here
    }

    peekAtHead() {
        // Return value of head node
        if (this.length === 0) return undefined;
        return this.head.value;
        // Your code here

        // Write your hypothesis on the time complexity of this method here
    }

    peekAtTail() {
        // Return value of tail node
        if ( this.length === 0) return undefined;
        return this.tail.value;
        // Your code here

        // Write your hypothesis on the time complexity of this method here
    }
}

module.exports = {
    DoublyLinkedList,
    DoublyLinkedNode
}