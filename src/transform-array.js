const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
 function transform(arr) {
  
  if (arr === null) throw new Error('\'arr\' parameter must be an instance of the Array!');
  if (!Array.isArray(arr)) throw new Error("'arr' parameter must be an instance of the Array!");
  
  if (arr.length == 0) return [];
  result = [];
  let discardedNext = false;
  for (i = 0; i < arr.length; i++) {
      if (arr[i] === '--discard-next') {
        discardedNext = true;  
        i++;
          continue;
      }
      if (arr[i] === "--discard-prev") {
          if (discardedNext) {
              discardedNext = false;
              continue;
          } 
          result.pop();
          continue;
      }
      if (arr[i] === "--double-next") {

        if (i + 1 < arr.length) {
              result.push(arr[i + 1]);
          }
          continue;
      }
      if (arr[i] === "--double-prev") {
        if (discardedNext) {
          discardedNext = false;
          continue;
        }  
        if (i - 1 > 0) {
              result.push(arr[i - 1]);
          }
          continue;
      }

      result.push(arr[i]);
      

  }
  
  return result;
}

module.exports = {
  transform
};
