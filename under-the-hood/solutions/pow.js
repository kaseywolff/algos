/** Write a function that calculates x^y, where x is given as the base and y is given as the power.
 *
 * Example:
 * pow(2,4) => 2^4 = 16
 * Rational: 2 * 2 * 2 * 2 = 16
 *
 * Extension: Use recursion
 */

// TIME COMPLEXITY O(n)

function pow(base, power) {
  if (power === 0) return 1;

  let result = base;
  for (let i = 1; i < power; i++) {
    result *= base;
  };

  return result;
};


/**
 * Extension: Use recursion to solve the problem in O(n) time complexity -> Linear time complexity
 */

// TIME COMPLEXITY O(n)

function powRecurse(base, power) {
  if (power === 0) return 1;
  if (power === 1) return base;

  return base * powRecurse(base, power - 1);
}

module.exports = { pow, powRecurse };