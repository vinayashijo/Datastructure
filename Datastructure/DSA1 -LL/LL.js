
class Node
{
    constructor(value)
    {
        this.value = value;
        this.next = null;  //any node adding last will be null
    }
}
class LinkedList 
{
    constructor()
    {   
        this.head  =null
        this.size  = 0
    }
    isEmpty()
    {
        return this.size===0;
    }
    getSize()
    {
        return this.size
    }

    prepend(value)
    {
        const newNode = new Node(value)
        if(this.isEmpty())
        {
            this.head  = newNode 
        }
        else
        {
            newNode.next  = this.head
            this.head  = newNode
        }
        
        this.size ++ ;
    }

    print()
    {
        if(this.isEmpty())
        {
            console.log("list is empty")
        }
        else
        {
            let curr = this.head
            let listValues =""

            while(curr) // curr has value and not null
            {
                listValues += `${curr.value} `
                // console.log("curr",curr.value)
                curr = curr.next
                // console.log(curr.value)

            }
            console.log(listValues)
        }

    }
    append(value)
    {
        let node  = new Node(value)
        if(this.isEmpty())
        {
            this.head = node
        }
        else
        {
            let prev = this.head

            while(prev.next)
            {
                prev  = prev.next

            } //here i will get last node whereprev.next = null, 
        
            prev.next = node  //so last nodes next should be new node
        }

        this.size++
    }
    // if its index 2 then traverse till 1 means 0th index and 1st index 
    //then in 1st index point ,first point new node to curr.next , then point 1st node to new node value ,
    insertAtIndex(value,index)  
    {
        let node  = new Node(value)
        if(this.isEmpty())
        {
            this.head = node
        } 
        else {

           let curr  = this.head

            for(let i=0;i<index-1;i++)
            {
                curr =  curr.next;
                
            } //now here this point we will get the position where to insert

            node.next = curr.next
           curr.next = node;
            this.size++
        }
       
    }
    removeAValue(value)
    {
        if(this.isEmpty())
        {
            console.log("This LL doesnt exists")
        }
        else
        {
            let curr = this.head
            let prev;
            //  let prev = curr
            // while(curr)
            // {
            //     curr  = curr.next
            //     if(curr.value  == value)
            //     {
            //         prev.next = curr.next
            //         break;
            //     }
            //     prev  = prev.next
            // }

            while(curr.value!= value){
                prev = curr;
                curr = curr.next
            }
            prev.next = curr.next;
            this.size--;
        }
    }
    removeFromAnIndex(index)
    {
        if(this.isEmpty())
        {
            console.log("This LL doesnt exists")
        }
        else
        {
            let curr = this.head
            let prev;
            for(let i=0;i<index;i++)
            {
                prev = curr;
                curr = curr.next
            }
            prev.next = curr.next;
            this.size--;
        }
    }
    searchAValue(value)
    {
        let index = -1
        if(this.isEmpty())
        {
            console.log("List doesnt exists")
        }
        else
        {
            let curr = this.head
            index = 0
            let prev;
            while(curr.value!=value)
            {
                prev  = curr
                curr = curr.next
                index  ++;
            }

            console.log(`You searched a value ${curr.value} at index ${index}`)
        }
    }
    removeDuplicates()
    {
        if(this.isEmpty())
        {
            console.log("This List is Empty")
        }
        else
        {
            let curr = this.head;
            let result = new Set() ;
           
            let prev;
            while(curr)
            {
                if(!result.has(curr.value))
                {
                    result.add(curr.value)
                }
                else
                {   
                    prev.next = curr.next
                    this.size--;
                }
                prev = curr;
                curr = curr.next
                
            }
            console.log(result.values())
        }
    }
    arrayToLinkedList(arr)
    {
        let node;
        let curr;
        for(let i=0;i<arr.length;i++)
        {
            node = new Node(arr[i])
            if(this.isEmpty())
            {
                this.head = node
                curr = this.head
            }
            else
            {
                curr.next  = node
                curr = curr.next;
            }

           // curr = curr.next;
            this.size++;

        }
    }
    reverseALinkedList()
    {
        if(this.isEmpty())
        {
            console.log("List is Empty")
        }
        else
        {
            let curr = this.head
            let prev = null;

            while(curr)
            {
                let nextNode = curr.next;
                curr.next  = prev;

                prev = curr;
                curr = nextNode
            }
            this.head = prev;
        }
    }
}

const list = new LinkedList()
console.log("linked list is Empty" , list.isEmpty() )
console.log("linked list size" , list.getSize() )

 list.prepend(10)
 list.prepend(20)
 list.prepend(30)
 list.print()

list.append(40)
list.append(50)
list.append(60)
list.print()

list.insertAtIndex(25,2)
list.print()

list.removeAValue(25)
list.print()

list.removeFromAnIndex(1)
list.print()

list.append(35)
list.print()

list.searchAValue(30)

list.append(35)
list.prepend(20)
list.prepend(20)

list.print();

list.removeDuplicates()
list.print();

// let arr=[50,60,70]
// arrToLList = new LinkedList()
// arrToLList.arrayToLinkedList(arr)
// arrToLList.print();


list.reverseALinkedList()
list.print()



