function countOfAllBooleansAndStrings(arr) {
  let result = 0;

  for (const element of arr) {
    if (typeof(element) === 'boolean' || typeof(element) === 'string') {
      result++;
    }
  }

  return result;
}

// Do not edit this line;
module.exports = countOfAllBooleansAndStrings;