const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let arr1 = s1.split('');
  let arr2 = s2.split('');   
  // let intersection = arr1.filter(x => arr2.includes(x));
  
  // return intersection.length;
  counter = 0;
  for (item of arr1) {
    if (arr2.includes(item)) {
      counter += 1;
      pos = arr2.indexOf(item);
      arr2.splice(pos, 1);
    }
  }
  return counter;
} 

module.exports = {
  getCommonCharacterCount
};
