//new
// Recursive Fibanocci series
// given n , find the nth element of fibanocci number (adding up 2 nos)

// 1. Fibonacci series uisng recursion..
//////// 3rd element - > 1st + 2nd
function fibonacci(n)
{
    //base condition
    if(n<=1)
    {
        return 1
    }
    else
    {
        return fibonacci(n-2) +fibonacci(n-1)
    }
}

console.log(fibonacci(5))