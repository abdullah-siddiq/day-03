//Do the below programs in anonymous function & IIFE
//(a) Print odd numbers in an array
// Anonymous function
let printOddNumbers = function(arr) {
    arr.forEach(function(num) {
        if (num % 2 !== 0) {
            console.log(num);
        }
    });
};
// IIFE
(function(arr) {
    arr.forEach(function(num) {
        if (num % 2 !== 0) {
            console.log(num);
        }
    });
})([1, 2, 3, 4, 5]);


//(b)Convert all the strings to title caps in a string array

// Anonymous function
let convertToTitleCaps = function(arr) {
    return arr.map(function(str) {
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    });
};

// IIFE
let titleCapsArray = (function(arr) {
    return arr.map(function(str) {
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    });
})(["hello", "world", "javascript"]);
console.log(titleCapsArray);

//(c)Sum of all numbers in an array

