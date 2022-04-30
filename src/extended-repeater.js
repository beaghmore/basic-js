const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let repeatTimes = 0;
  let separator = '+';
  let addition = '';
  let additionRepeatTimes = 0;
  let additionSeparator = '|';

  if (options.repeatTimes != undefined) {
      repeatTimes = options.repeatTimes;
  }
  if (options.separator != undefined) {
      separator = options.separator;
  }
  if (options.addition != undefined) {
      addition = options.addition;
  }
  if (options.addition === null) {
    addition = options.addition;
  }
  if (options.additionRepeatTimes != undefined) {
      additionRepeatTimes = options.additionRepeatTimes;
  }
  if (options.additionSeparator != undefined) {
      additionSeparator = options.additionSeparator;
  }
  
  console.log(repeatTimes, separator, addition, additionRepeatTimes, additionSeparator);

  additionRepeated = addition;
  for (i = 0; i < additionRepeatTimes-1; i++) {
      additionRepeated += additionSeparator;
      additionRepeated += addition;
  }

  str += additionRepeated;
  
  result = str;
  for (i = 0; i < repeatTimes-1; i++) {
      result += separator;
      result += str;
  }

  return result;
}

module.exports = {
  repeater
};
