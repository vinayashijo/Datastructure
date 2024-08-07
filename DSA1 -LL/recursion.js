// 1. Calculate the nth Fibonacci number:..3rd element - > 1st + 2nd
function fibonacci(n)
{
    //base condition
    if(n<=1)
    {
        return n;
    }
    else
    {
        return fibonacci(n-2) + fibonacci(n-1)
    }
}
// 2. Calculate the nth Factorial :..
function Factorial(n)
{
    //base condition
    if(n<=1)
    {
        return 1;
    }
    else
    {
        return Factorial(n-1) * n
    }
}

//3. Sum of all elements in array
function SumofArr(arr, n) {
    // base condition
    if (n <= 0) {
        return 0;
    }
    return arr[n - 1] + SumofArr(arr, n - 1);
}

//3. binarySearch using recursion on sorted Array
function binarySearch(arr, target,  low  = 0 , high =arr.length) 
{
   if(low<high)
   {
        const mid = Math.floor((low+high )/2)

        if(arr[mid]  === target )
        {
            return mid
        }
        else if( arr[mid] > target)
        {
           // high = mid-1
           return binarySearch(arr ,target ,low,mid-1 )
        }
        else //if( arr[mid] < target)
        {
            // low = mid+1
            return binarySearch(arr ,target , mid+1,high )
        }
       
   }
}
//4. ReverseAString..
function ReverseAString(str,n)
{
    //concept is return each character h first then remove h from string and use recursion 
    if(str === "")
    {
        return "";
    }
    else
    {
        const updatedStr  = str.substr(1,str.length)  //takes string from 1 means (2nd onwards) till last 
        // console.log(updatedStr)
        return  ReverseAString(updatedStr) + str.charAt(0)
    }
}

const x =10
const y =3

console.log(`Fibonacci of ${x} is ${ fibonacci(x)} `)
console.log(`Factorial of ${y} is ${ Factorial(y)} `)

// sum array:
let arr = [1, 2, 3, 4, 5];
let n = arr.length;
console.log(`SumofArr of ${arr} is ${SumofArr(arr, n)} `); // Output: 15

binarySearch(arr , 4)
const str = "Vinaya"
console.log(`Reversed Str is : ${ReverseAString( str, str.length )} `)
