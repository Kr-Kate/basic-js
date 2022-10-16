const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(string) {
  if(!(typeof string == 'string') || !(Number(string))) {
    return false;
  }
  else if(0 > Number(string) || Number(string) > 15) {
    return false;
  }
  else {
    const num = Number(string);
    return Math.ceil((Math.log(15 / num) / (0.693 / 5730)))
  }
}

module.exports = {
  dateSample
};
