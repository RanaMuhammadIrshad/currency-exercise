"use strict";

/* 
## Create an array called myArr containing the following values: 5.99, 3.45
## Create a function addCurrency. 
The function will:
- add a € symbol after the array value (e.g 5.99€). 
- store the value into a new array.
- return the new array. */

const myArr = [5.99, 3.56];

const addCurrency = function (arr, cur) {
  let myArray = [];

  for (let i = 0; i < arr.length; i++) {
    if (cur === "€") {
      myArray.push(arr[i] + "€");
    } else if (cur === "$") {
      myArray.push("$" + arr[i]);
    }
  }
  return myArray;
};

const returnedArr = addCurrency(myArr, "$");
// const returnedArr = addCurrency(myArr, "€");
console.log(returnedArr);

/* ## Once you are done, create a new function called printPrices.
printPrices takes the returnArr as a parameter and dynamically prints out the following messages:
 - "price 1 is 5.99€"
 - "price 2 is 3.45€" */

const printPrices = function (retArr) {
  for (let i = 0; i < retArr.length; i++) {
    let myString = "";
    myString = `price ${i + 1} is ${retArr[i]}`;
    console.log(myString);
  }
};

printPrices(returnedArr);

/* 

# BONUS
## Let's improve the implementation above by making sure that
- the user can pass either a "$" or a "€" as currency symbol ( "$" comes BEFORE the amount whereas the "€" comes at the end ). */

// BONUS is implemented in above codes to make it all together dynamic
