const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let i = 0;
  let result = '';
  while (i < str.length) {
      let count = 1;
      while ((i+1 < str.length) && (str[i] === str[i+1])) {
          count += 1;
          i += 1;
      }
      if (count == 1) {
          result += str[i];
      } else {
          result += count;
          result += str[i];
      }
      i += 1;
  }
  return result;
}

module.exports = {
  encodeLine
};
