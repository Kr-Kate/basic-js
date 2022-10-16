const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
 function countCats(arr) {
  let result = 0;
  if(Array.isArray(arr[0])) {
    const currentArr = arr.map(x => {
      for(let i = 0; i < x.length; i++) {
        if(x[i] === "^^") {
          result += 1;
        }
      }
    })
    return result;
  }
  else{
    return result;
  }
}

module.exports = {
  countCats
};
