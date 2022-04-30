const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  str = String(n);
  arr = str.split('');
  max = 0;
  for (i = 0; i < arr.length; i++) {
      let temp = arr.slice();
      temp.splice(i, 1);
      let number = Number(temp.join(''));
      if (number > max) max = number;
  }
  return max;
}

module.exports = {
  deleteDigit
};
