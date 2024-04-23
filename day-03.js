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
console.log(printOddNumbers([1, 2, 3, 4, 5]));
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
console.log(convertToTitleCaps(["hello", "world", "javascript"]));

// IIFE
let titleCapsArray = (function(arr) {
    return arr.map(function(str) {
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    });
})(["hello", "world", "javascript"]);
console.log(titleCapsArray);

//(c)Sum of all numbers in an array
// Anonymous function
let sumArray = function(arr) {
    return arr.reduce(function(acc, num) {
        return acc + num;
    }, 0);
}; 
console.log(sumArray([1,2,3,4,5]));

// IIFE
let sum = (function(arr) {
    return arr.reduce(function(acc, num) {
        return acc + num;
    }, 0);
})([1, 2, 3, 4, 5]);
console.log(sum);

//(d)	Return all the prime numbers in an array

// Anonymous function
let getPrimeNumbers = function(arr) {
    return arr.filter(function(num) {
        if (num <= 1) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    });
};
console.log(getPrimeNumbers([2, 3, 4, 5, 6, 7, 8, 9, 10]));

// IIFE
let primeNumbers = (function(arr) {
    return arr.filter(function(num) {
        if (num <= 1) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    });
})([2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log(primeNumbers);

//(e) Return all the palindromes in an array

// Anonymous function
let getPalindromes = function(arr) {
    return arr.filter(function(str) {
        return str === str.split('').reverse().join('');
    });
};
console.log(getPalindromes(["level", "hello", "radar", "world"]));

// IIFE
let palindromes = (function(arr) {
    return arr.filter(function(str) {
        return str === str.split('').reverse().join('');
    });
})(["level", "hello", "radar", "world"]);
console.log(palindromes);

//(f) Return median of two sorted arrays of the same size.

// Anonymous function
let medianOfSortedArrays = function(arr1, arr2) {
    let mergedArray = arr1.concat(arr2);
    let sortedArray = mergedArray.sort(function(a, b) {
        return a - b;
    });
    let len = sortedArray.length;
    if (len % 2 === 0) {
        return (sortedArray[len / 2 - 1] + sortedArray[len / 2]) / 2;
    } else {
        return sortedArray[Math.floor(len / 2)];
    }
};
console.log( medianOfSortedArrays([1, 3, 5], [2, 4, 6]));

// IIFE
let median = (function(arr1, arr2) {
    let mergedArray = arr1.concat(arr2);
    let sortedArray = mergedArray.sort(function(a, b) {
        return a - b;
    });
    let len = sortedArray.length;
    if (len % 2 === 0) {
        return (sortedArray[len / 2 - 1] + sortedArray[len / 2]) / 2;
    } else {
        return sortedArray[Math.floor(len / 2)];
    }
})([1, 3, 5], [2, 4, 6]);
console.log(median);

//(g) Remove duplicates from an array

// Anonymous function
let removeDuplicates = function(arr) {
    return arr.filter(function(item, index, self) {
        return self.indexOf(item) === index;
    });
};
console.log(removeDuplicates([1, 2, 3, 3, 4, 4, 5, 5]));


// IIFE
let uniqueArray = (function(arr) {
    return arr.filter(function(item, index, self) {
        return self.indexOf(item) === index;
    });
})([1, 2, 3, 3, 4, 4, 5, 5]);
console.log(uniqueArray);

//(h) Rotate an array by k times

// Anonymous function
let rotateArray = function(arr, k) {
    let len = arr.length;
    let rotations = k % len;
    return arr.slice(rotations).concat(arr.slice(0, rotations));
};
console.log(rotateArray([1, 2, 3, 4, 5], 2));

// IIFE
let rotatedArray = (function(arr, k) {
    let len = arr.length;
    let rotations = k % len;
    return arr.slice(rotations).concat(arr.slice(0, rotations));
})([1, 2, 3, 4, 5], 2);
console.log(rotatedArray);


//  2.	Do the below programs in arrow functions.

//(a) Print odd numbers in an array

const printOddNumbers = arr => {
    arr.forEach(num => {
      if (num % 2 !== 0) {
        console.log(num);
      }
    });
  };
  console.log(printOddNumbers([1,2,3,4,5,6,7]));
  
//(b)Convert all the strings to title caps in a string array
  
const convertToTitleCaps = arr => {
    return arr.map(str => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase());
  };
  console.log(convertToTitleCaps(["hello", "world", "javascript"]))
  
//(c) Sum of all numbers in an array

const sumOfNumbers = arr => {
    return arr.reduce((acc, curr) => acc + curr, 0);
  };
console.log(sumOfNumbers([1,2,3,4,5]));
  
//(d) Return all the prime numbers in an array

const isPrime = num => {
    for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++) {
      if (num % i === 0) return false;
    }
    return num > 1;
  };
  
  const getPrimeNumbers = arr => {
    return arr.filter(num => isPrime(num));
  };
   
  console.log(getPrimeNumbers([1,2,3,4,5,6,7,8,9]));
  
//(e) Return all the palindromes in an array

const isPalindrome = str => {
    const reversed = str.split("").reverse().join("");
    return str === reversed;
  };
  
  const getPalindromes = arr => {
    return arr.filter(str => isPalindrome(str));
  };
  console.log(getPalindromes(["level", "hello", "radar", "world"]))
   
  
  


  



