class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    append(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
    }

    prepend(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } 
        else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
    }

    delete(data) {
        if (!this.head) return;

        let current = this.head;
        while (current) {
            if (current.data === data) {
                if (current.prev) {
                    current.prev.next = current.next;
                } else {
                    this.head = current.next;
                }

                if (current.next) {
                    current.next.prev = current.prev;
                } else {
                    this.tail = current.prev;
                }

                current = null;
                return;
            }
            current = current.next;
        }
    }

    display() {
        let current = this.head;
        let result = '';
        while (current) {
            result += current.data + ' ';
            current = current.next;
        }
        console.log(result.trim());
    }
}

// Example usage:
const dll = new DoublyLinkedList();
dll.append(1);
dll.append(2);
dll.append(3);
dll.prepend(0);
dll.display();  // Output: 0 1 2 3
dll.delete(2);
dll.display();  // Output: 0 1 3
