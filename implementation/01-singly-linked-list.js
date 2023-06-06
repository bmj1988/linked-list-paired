// Node class is implemented for you, no need to look for bugs here!
class SinglyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
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

    addToTail(val) {
        // There are bugs in this method! Fix them!!!

        // Add node of val to tail of linked list
        let newNode = new SinglyLinkedNode(val);

        if (!this.head) {
            this.head = newNode;
            this.length++;
            return this;
        }
        else {
        let curr = this.head;
        while (curr.next) {
            curr = curr.next;
        }
        curr.next = newNode;
        this.length++;

        return this;
    }

        // Write your hypothesis on the time complexity of this method here
        //time: O(n)
        //space: O(n)
    }

    removeFromHead() {
        // Remove node at head
        if (this.length === 0) return undefined;
        const next = this.head.next;
        const removed = this.head;
        this.head = next;
        this.length--;
        // Your code here
        return removed;
        // Write your hypothesis on the time complexity of this method here
        //time: O(1)
    }

    removeFromTail() {
        // Remove node at tail
        if (this.length === 0) return undefined;

        if (this.length === 1) {
            let removed = this.head;
            this.head = null;
            this.length--;
            return removed;
        }

        let curr = this.head;
        while (curr.next.next) {
            curr = curr.next;
        }
        //console.log('###', curr);
        let removed = curr.next;
        curr.next = null;
        this.length--;
        // Your code here
        return removed;
        // Write your hypothesis on the time complexity of this method here

    }

    peekAtHead() {
        // Return the value of head node
        if (this.length === 0) return undefined;
        return this.head.value;
        // Your code here

        // Write your hypothesis on the time complexity of this method here
    }

    print() {
        // Print out the linked list
        let curr = this.head;
        while (curr) {
            console.log(curr.value);
            curr = curr.next
        }
        // Your code here
        return;
        // Write your hypothesis on the time complexity of this method here
    }
}

module.exports = {
    SinglyLinkedList,
    SinglyLinkedNode
}