function countOfAllBooleans(arr) {
  let result = 0;

  for (const element of arr) {
    if (element === true || element === false) {
      result++;
    }
  }

  return result;
}

// Do not edit this line;
module.exports = countOfAllBooleans;