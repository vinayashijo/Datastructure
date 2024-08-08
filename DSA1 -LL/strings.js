let str = "  JavaScript String Functions  ";

// Removing whitespace from both ends
console.log(str.trim()); // Output: "JavaScript String Functions"

// Converting to uppercase
console.log(str.toUpperCase()); // Output: "  JAVASCRIPT STRING FUNCTIONS  "

// Replacing part of the string
console.log(str.replace("String", "Methods")); // Output: "  JavaScript Methods Functions  "

// Splitting the string into an array
let words = str.trim().split(" ");
console.log(words); // Output: [ 'JavaScript', 'String', 'Functions' ]

// Checking if the string starts with "Java"
console.log(str.trim().startsWith("Java")); // Output: true
