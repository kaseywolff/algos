/*

Write a function that returns an array containing the numbers 1 to NUM.

Put "fizz" in place of numbers divisble by 3 but not by 5,
"buzz" in place of numbers divisble by 5 but not by 3,
and "fizzbuzz" in place of numbers divisble by both 3 and 5.

fizzbuzz(16);
-> [1, 2, 'fizz', 4, 'buzz', 'fizz', 7, 8, 'fizz', 'buzz',
11, 'fizz', 13, 14, 'fizzbuzz', 16]

*/

// TIME COMPLEXITY: O(n)

const fizzbuzz = num => {
  // declare empty results array
  const results = [];
  
  // iterate starting at 1, ending at num
  for (let i = 1; i <= num; i++) {
    // initialize empty string to add 'fizz' and/or 'buzz' to
    let str = '';
    // concatenate fizz if divisible by 3
    if (i % 3 === 0) {
      str += 'fizz';
    };
    // concatenate buzz if divisible by 5
    if (i % 5 === 0) {
      str =+ 'buzz';
    };
    // push either string or i (number) into array
    results.push(str || i);
  }

  return results
};


/*

Extension: 
Write a function that returns an array containing the numbers 1 to NUM.

Put "fizz" in place of numbers divisble by 3 but not by 5 or 7,
"buzz" in place of numbers divisble by 5 but not by 3 or 7,
"bazz" in place of numbers divisble by 7 but not by 3 or 5,
"fizzbuzz" in place of numbers divisble by 3 and 5 but not 7,
"fizzbazz" in place of numbers divisble by 3 and 7 but not 5,
"buzzbazz" in place of numbers divisble by 5 and 7 but not 3,
and "fizzbuzzbazz" in place of numbers divisble by 3, 5, and 7.

fizzbuzzbazz(22);
-> [1, 2, 'fizz', 4, 'buzz', 'fizz', 'bazz', 8, 'fizz', 'buzz',
11, 'fizz', 13, 'bazz', 'fizzbuzz', 16, 17, 'fizz', 19, 'buzz', 'fizzbazz', 22]

*/

const fizzbuzzbazz = num => {
  
};

module.exports = {fizzbuzz, fizzbuzzbazz};