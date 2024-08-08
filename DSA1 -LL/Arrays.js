const arr = [10,20,30,40,50]

arr.push(60)//add to last //o/p :[ 10, 20, 30, 40, 50, 60 ]
console.log(arr)
arr.pop() //delete last //o/p [ 10, 20, 30, 40, 50 ]
console.log(arr)
arr.unshift(5) //add to the front //o/p [ 5, 10, 20, 30, 40, 50 ]
console.log(arr)
arr.shift() //delete from beginning ,o/p:[ 10, 20, 30, 40, 50]
console.log(arr)
arr.splice(1,1) //20 removed ,[ 10, 30, 40, 50]
console.log(arr)

//filter  -into new  array - filter positive numbers only

const arr1 = [0,4,-23,3,1,2,-56,1,8,-234]
//forEach - same array chnages
console.log(arr1.forEach(y=> y *2 ))
const arry1 = arr1.filter( x=> x>0)
console.log(arry1)
//map -new Array -- square of a number
const newArr = arr1.map( x => x * x)
console.log(newArr)

//reduce result to a number mostly sum , subtraction etc.
const redArr = [34,34,34,34,343]
const sum = redArr.reduce((acc,curr) =>  acc+ curr )
console.log(sum)

//concat
const array1  = [1,2,3,4,5,6]
const array2  = [7,8,9,10,11,12]

let result = array1.concat(array2)
console.log(result)

//slice
let arrSplice = [1,2,3,4]
// let newSpliceArr =
 arrSplice.splice(1,0,9,8)
console.log("splice "  ,arrSplice )// from 2nd array element , 2 elements will be deleted and balance will be returned.

console.log(arrSplice.includes(2))
