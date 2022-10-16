const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(direct=true) {
    this.direct = direct;
  }
  
  encrypt(message, key) {
    if ((arguments.length < 2) || (arguments[0] == undefined) || (arguments[0] == undefined)) throw "Incorrect arguments!";
  
    message = message.toUpperCase();
    key = key.toUpperCase();
    console.log(key);
  
    let result = "";
    let j = 0;
    for (let i = 0; i < message.length; i++){
      if (this.isLetter(message[i])) {
        let ordChar = ((message[i].charCodeAt(0) - "A".charCodeAt(0)) + (key[j].charCodeAt(0) - "A".charCodeAt(0))) % 26 + "A".charCodeAt(0);
        let char = String.fromCharCode(ordChar);
        result += char;
        j += 1;
        if (j === key.length) j = 0;
      } else {
        result += message[i];
      }
    }
    console.log(result);

    if (this.direct === false) result = this.reverseString(result);
    return result;
  }
  
  decrypt(message, key) {
    if ((arguments.length < 2) || (arguments[0] == undefined) || (arguments[0] == undefined)) throw "Incorrect arguments!";

    message = message.toUpperCase();
    key = key.toUpperCase();
    console.log(key);
  
    let result = "";
    let j = 0;
    for (let i = 0; i < message.length; i++){
      if (this.isLetter(message[i])) {
        let ordChar = ((message[i].charCodeAt(0) - "A".charCodeAt(0)) - (key[j].charCodeAt(0) - "A".charCodeAt(0)));
        if (ordChar < 0) ordChar = 26 + ordChar;
        console.log(message[i].charCodeAt(0) - "A".charCodeAt(0), (key[j].charCodeAt(0) - "A".charCodeAt(0)), ordChar);
        let char = String.fromCharCode(ordChar + "A".charCodeAt(0));
        result += char;
        j += 1;
        if (j === key.length) j = 0;
      } else {
        result += message[i];
      }
    }
    
    if (this.direct === false) result = this.reverseString(result);
    console.log(result);
    return result;
  }
  
  isLetter(str) {
    return str.length === 1 && str.match(/[A-Z]/i);
  }

  reverseString(str) {
    return str.split("").reverse().join("");  
  }
}

module.exports = {
  VigenereCipheringMachine
};
