class Node {
    constructor(val){
        this.val = val;
        this.next =null
    }

}

class LinkedList {
    constructor () {
        this.head = null,
        this.tail=null
        this.length = 0
    }



PushManager(val) {
    const newNode = new Node(val)

    if(!this.head){
        this.head = newNode;
        this.tail=this.head
    }else{
        console.log("this", this)
        this.tail.next = newNode;
        console.log("this after update next", this)
        this.tail =newNode
        console.log("this updating tail", this)
    }
    this.length ++

    return this
}
pop(){
    if(!this.head) return undefined

    let current = this.head
    let newTail = current
    while(current.next){
        newTail=current
        current = current.next
    }
    this.tail = newTail
    this.tail.next = null
    this.length--

    if(this.length === 0){
        this.head = null
        this.tail = null
    }
    return current
}


unshift(val){
    const newNode = new Node(val)
    if(!this.head){
        this.head = newNode;
        this.tail = this.head
    }else{
        newNode.next = this.head
        this.head = newNode
    }
    this.length ++
    return this++
}
}



const linkedlist = new LinkedList()
LinkedList.push(8)
LinkedList.push(12)
LinkedList.push(10)

console.log("--------------")
// LinkedList.pop()

LinkedList.unshift(100)
