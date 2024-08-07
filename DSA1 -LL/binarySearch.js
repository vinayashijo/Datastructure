
//array should be sorted before passing
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return mid; // Return the index of the target element
        } 
        else if (arr[mid] < target) {
            left = mid + 1;
        } 
        else {
            right = mid - 1;
        }
    }

    return -1; // Return -1 if the target element is not found
}

// Example usage:
const sortedArray = [10, 20, 30, 40, 50];
let target = 30
console.log(`Searched Element ${target} in array : ${sortedArray} is at position : ${binarySearch(sortedArray, target)} `);
target = 60
console.log(`Searched Element ${target} in array : ${sortedArray} is at position : ${binarySearch(sortedArray, target)} `); 
 // Output: 2
// console.log(binarySearch(sortedArray, 60)); // Output: -1


