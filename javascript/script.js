"use strict";

// Write a function reverseWords(str) that takes a string as input and returns a new string with the words reversed.

const reverseWords = (str) => {
  const string = str.split("").reverse().join("");
  console.log(string);
  console.log("--------------------------");
};
reverseWords("Vinoth");

// Write a function isAnagram(str1, str2) that takes two strings as input and returns true if they are anagrams (contain the same characters in a different order), and false otherwise.

const isAnagram = (str1, str2) => {
  let string1 = str1.split("").sort().join("");
  let string2 = str2.split("").sort().join("");
  if (string1 === string2) {
    return true;
  } else {
    return false;
  }
};
console.log(isAnagram("abcd", "dacb"));
console.log("--------------------------");

// Write a function truncateString(str, num) that takes a string and a number as input and returns a truncated version of the string if it is longer than the specified number of characters, adding an ellipsis ("...") to the end.

const truncateString = (str, num) => {
  if (str.length <= num) {
    return str;
  }
  return str.slice(0, num) + "...";
};

console.log(truncateString("vinoth kumar", 8));
console.log("--------------------------");

// Write a function sumArray(arr) that takes an array of numbers as input and returns the sum of all the numbers.

const sumArray = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += i;
  }
  console.log(sum);
};
sumArray([1, 2, 3, 4, 5, 6, 7]);
console.log("--------------------------");

// Write a function capitalizeLongWords(str, num) that takes a string and a number as input and returns a new string with all words longer than the specified number of characters capitalized.
// Write a function getDistinctValues(arr) that takes an array as input and returns a new array with only the distinct values (removing any duplicates).

const getDistinctValues = (arr) => {
  const array = [...new Set(arr)];
  console.log(array);
};
getDistinctValues([1, 1, 2, 3, 4, 4, 5, 6, 6]);

console.log("--------------------------");

// Write a function isArmstrongNumber(num) that takes a number as input and returns true if it is an Armstrong number, and false otherwise. An Armstrong number is a number that is equal to the sum of its own digits each raised to the power of the number of digits.
function isArmstrongNumber(number) {
  const digits = number.toString().split("");
  const order = digits.length;
  const sum = digits.reduce(
    (acc, digit) => acc + Math.pow(parseInt(digit), order),
    0
  );

  if (sum === number) {
    console.log("true");
  } else {
    console.log("false");
  }
}

isArmstrongNumber(9474);
isArmstrongNumber(520);
// Write a function countOccurrences(arr, target) that takes an array and a target value as input and returns the number of occurrences of the target value in the array.
// Write a function flattenObject(obj) that takes an object with nested objects as input and returns a flattened object with nested keys combined using dot notation.
// Write a function calculateAverage(arr) that takes an array of numbers as input and returns the average (mean) value of the numbers.
