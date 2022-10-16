const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
 function createDreamTeam(arr) {
  if(Array.isArray(arr)) {
  let result = '';
  const currentArr = arr.map(x => {
    if(typeof x === 'string') {
      for(let i = 0; i < x.length; i++)
      if(x[i] === " ") {
      }
      else{return x.slice(i, i + 1).toUpperCase();}
      
    }
  })
  currentArr.sort();
  return result = currentArr.join("");
  }
  else{ return false;}
}

module.exports = {
  createDreamTeam
};
