const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  const season = [
    "winter",
    "spring",
    "summer",
    "autumn",];

    if(date === undefined || date === null) {
      return 'Unable to determine the time of year!';
    }
    else if(date instanceof Date === false || Object.getOwnPropertyNames(date).length) {
      throw new Error("Invalid date!");
    }

    const month = date.getMonth();

    if(month === 0 || month === 1 || month === 11) {
      return season[0];
    }
    else if(month === 2 || month === 3 || month === 4) {
      return season[1];
    }
    else if(month === 5 || month === 6 || month === 7) {
      return season[2];
    }
    else {
      return season[3];
    }
}

module.exports = {
  getSeason
};
