function linearSearch(arr,target)
{
    for(i=0;i<arr.length-1;i++)
    {
        if (arr[i] === target)
        {
            return 1
            break;
        }
    }
    return -1
}

const arr = [30,20,10,45]
const target = 30
console.log(`Searched using linear Search Element ${target} in array ${arr} is at position : ${linearSearch(arr,target)}`)
