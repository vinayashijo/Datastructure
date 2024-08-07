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

console.log(linearSearch([1,2,3,4,7,5,6,8],17))
