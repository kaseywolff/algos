/*

Write a function called commonElements that takes in any number of arrays in the 
argument. The arrays may contain both numbers and strings. It should return a new array
with all the common elements (both numbers and/or strings) from the given input. 
If there are no common numbers/strings, return "Nothing in Common!"
Assume there are no duplicates within the array.


ex: 
arr1 = [2, 10,'cat', 3, 99, 2000, 'dog', 'lion'];
arr2 = [3, 7, 2, 2000, 1, 'dog', 'cat'];
arr3 = [2, 100, 2000, 'dog', 3, 'lion'];

commonElements(arr1, arr2, arr3) -> [2, 3, 2000, 'dog']
*/

// TIME COMPLEXITY O(n^[2 || 3])

const commonElements = (...args) => {
  return arrs.reduce((acc, currArr) => {
    return acc.filter(el => curArr.includes(el));
  });
};




/*
** Extension **
Refactor your function to have O(n) time complexity.
*/

const commonElementsOptimized = (...args) => {
  // instantiate empty cache
  const memory = {};
  // loop over array of arrays
  for (let i = 0; i < args.length; i++) {
    const innerObj = {};
    const currentArr = args[i];
    // iterate over each individual array
    for (let j = 0; j < currentArr.length; j++) {
      const currentArrItem = currentArr[j];
      // this if/ else factors in if the obj already has current item as a key so as not to increment a duplicate item that is present in the current array (i.e. [1, 2, 1, 3] -> 1 occurs twice, don't want to count it twice)
      if(!innerObj[currentArrItem]) {
        innerObj[currentArrItem] = true;
      } else {
        // if we've seen the item, skip the rest of the loop
        continue;
      }

      // if currentArrItem doesn't exist in memory, add it and set value to 1 or increment value
      (!memory[currentArrItem]) ? memory[currentArrItem] = 1 : memory[currentArrItem] += 1;
    }
  };
  // loop through memory keys
  const common = Object.keys(memory)
    // filter out values that exist in all the arrays (key will have value that equals length of args)
    .filter(item => memory[item] === args.length)
    // map through the filtered object keys and parse it into the correct data type (if key is stringified number, return number)
    .map(item => isNaN(Number(item)) ? item : Number(item));
  
  // if the common array is empty, return 'nothing in common', else return common array
  return(!common.length) ? 'Nothing in common!' : common;
};

module.exports = {commonElements, commonElementsOptimized} 