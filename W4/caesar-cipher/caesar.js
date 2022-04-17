/**
ASCII table quick notes:
a: 97
z: 122
 */

/**
 * this function reduces the step to a min of 0 and a max of 26
 * @param {integer} value 
 * @returns {integer} sum
 */
const reduce26 = function(value) {
  let sum = value;
  if (sum > 0){
    while (sum > 26) {
      sum = sum % 26;
    }
    return sum;
  }
  if (sum < 0) {
    sum = sum + 2 * -sum;
    while (sum > 26) {
      sum = sum % 26;
    }
    sum = sum * -1;
    return sum;
  }
}

/**
 * this function returns the final position of the character after the cipher
 * @param {int} initial_position 
 * @param {int} value 
 * @returns {int} final_position
 */
const shift = function(initial_position, value) {
  let step = reduce26(value);
  let temp = initial_position + step;
  if (temp < 97) {
    const difference = 97 - temp;
    final_position = 123 - difference;
    return final_position;
  }
  if (temp > 122) {
    const difference = temp - 122;
    final_position = 96 + difference;
    return final_position;
  }
  return temp;
}
/**
 * this function encrypts the plaintext using a cipher key
 * @param {string} plaintext 
 * @param {int} key 
 * @returns {string} final_result
 */
const encrypt = function(plaintext, key) {
  //if no change needed:
  if (key === 0) return plaintext;
  //create an array with all characters
  let plaintextArray = plaintext.split("");
  
  for (let x = 0; x < plaintextArray.length; x++) {
    if (plaintextArray[x] !== ' '){
      let temp = plaintextArray[x];
      let temp_int = temp.charCodeAt(0)
      let temp_int1 = shift(temp_int, key)
      let temp_after = String.fromCharCode(temp_int1)
      plaintextArray[x] = temp_after
    }
  }
  final_result = plaintextArray.join('');
  return final_result;
};
module.exports = { encrypt };