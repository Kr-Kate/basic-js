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
  if(!(Array.isArray(arr))) {
    throw new Error ('\'arr\' parameter must be an instance of the Array!');
  }
  else if(arr.length === 0) {
    return [];
  }
  else{
    let result = [];
    if(Array.isArray(arr[0])) {
        for(let i = 0; i < arr.length; i++) {
          let currentArr = [];
          for(let g = 0; g <arr[i].length; g++) {
            if(typeof arr[i][g] === "number") {
              currentArr.push(arr[i][g]);
            }
            else {
              myFilter(arr[i][g], g, arr[i], currentArr);
            }
          }
          result.push(currentArr);
        }
        
      }
    else {
      for(let i = 0; i < arr.length; i++) {
        if(!(typeof arr[i] === "string")) {
          result.push(arr[i]);
        }
        else if(arr[i] === "--discard-next") {
          i++;
        }
        else {
          if(typeof arr[i] === "string") {
            if(arr[i] === "--discard-prev" && arr[i - 2] === "--discard-next") {

            }
            else if(arr[i] === "--discard-prev" || arr[i] === "--double-next" || arr[i] === "--double-prev"){
              myFilter(arr[i], i, arr, result);
            }
            else{
              result.push(arr[i]);
            }
          }
        }
      }
    }
    return result;
  }
}

function myFilter (x, ind, firstArr, modifArr) {
    switch(x) {
    case "--discard-prev":
      if(!(modifArr.length === 0)) {
        modifArr.pop();
      }
    break;
    case "--double-next":
      if(firstArr.length > ind + 1) {
        modifArr.push(firstArr[ind + 1]);
      }
      break;
    case "--double-prev":
      if(modifArr[ind - 1] == undefined) {
        break;
      }
      if(!(modifArr.length === 0)) {
        modifArr.push(modifArr[ind - 1]);
      }
      
      break;
  }
}

module.exports = {
  transform
};
