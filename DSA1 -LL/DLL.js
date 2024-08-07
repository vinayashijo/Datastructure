class Node
{
    constructor(value)
    {
        this.value = value;
        this.head = null;
        this.tail = null;
    }

}
class LinkedList  
{
    constructor(value)
    {//value is a node
        this.head  = null;
        this.tail  = null;
        this.size = 0;
    }
    isEmpty()
    {
        return this.size === 0
    }
    getSize()
    {
        return  this.size;
    }

    prepend(value)
    {
        const new_Node  = new Node(value)
        // console.log(new_Node)
        if(this.isEmpty())
        {
            this.head = new_Node;
            this.tail = new_Node;
        }
        else
        {
                this.head.prev = new_Node
                new_Node.next = this.head
                this.head = new_Node 
        }
        this.size++
        console.log("Prepended a node with value" , new_Node.value)
    }
    print()
    {
        let listValues =""
       if(this.isEmpty())
       {
            console.log("This Doubly linked List is empty")
       }
       else
       {
            let curr = this.head
            let prev = null;
            
            // console.log(curr.value)

            while(curr)
            {
                listValues += `${curr.value} `
                curr = curr.next
                prev = curr
            }
             console.log("Printed Forward all values :" ,listValues)
       }
    }
    append(value)
    {

        const newNode = new Node(value)

        if(this.isEmpty())
        {
            this.head = newNode
            this.tail = newNode
           
        }
        else
        {
            newNode.prev = this.tail
            this.tail.next = newNode
            this.tail = newNode
          
        }
        this.size ++;
        console.log("Appended a node with value" , newNode.value)

    }

    removeFromFront()
    {
        if(this.isEmpty())
        {
            console.log("DLL is empoty")
        }
        else
        {
            let next  = this.head.next 
            next.prev = null;

            this.head = next;

        }
        this.size --;
        console.log("Removed a node from front ")

    }
    removeFromEnd() {
        if(this.isEmpty())
        {
            console.log("DLL is empty")
        }else {

           let prevNode=  this.tail.prev 
           prevNode.next = null;
           this.tail = prevNode
           this.size --;
        }
        console.log("Removed a node from end ")

    }
    printReverse() 
    {
        if(this.isEmpty())
        {
            console.log("List is empty")
        }
        else
        {
            let curr = this.tail;
            let listValues = ""
            // console.log(listValues)
            while(curr)
            {
                // console.log(curr.value)
                listValues += `${curr.value} `
              
                curr = curr.prev
                
            }
            console.log("Reverse Printed  :", listValues)
        }
    }
}

const dll = new LinkedList()
dll.prepend(15)
dll.prepend(25)
dll.print()
dll.append(10)
dll.print()

dll.removeFromFront()
dll.print()

dll.removeFromEnd()
dll.print()

dll.printReverse()

