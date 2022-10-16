const { NotImplementedError } = require('../extensions/index.js');

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 * 
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 * 
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
function calculateHanoi(rings, time) {
  const result = {}
  const numOfOperations = (Math.pow(2, rings)) - 1;
  const operationsPerSec = time / 3600;
  const sec = Math.floor(numOfOperations / operationsPerSec);
  result.turns = numOfOperations;
  result.seconds = sec;
  return result;
}

module.exports = {
  calculateHanoi
};
