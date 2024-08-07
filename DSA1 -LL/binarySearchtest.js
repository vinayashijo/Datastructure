
function binarySearch(arr,target)
{
    let left ,right

    left = 0;
    right =arr.length  -1;
    while( left <= right)
    {
        const mid = Math.floor((left+right) / 2)
        if(arr[mid]  === target)
        {
            return 1
        }
        else if(arr[mid]  < target) 
        {
            left = mid+1
        }
        else
        {
            right  = mid-1
        }
        
    }
    return -1
}

const sortedArray = [1,2,3,4,5,6,7,8,9]

// binarySearch(arr,target)
console.log(binarySearch(sortedArray,7))
console.log(binarySearch(sortedArray,17))
console.log(binarySearch(sortedArray,3))
