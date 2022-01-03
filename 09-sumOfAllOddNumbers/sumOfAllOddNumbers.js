function sumOfAllOddNumbers(nums) {
  let result = 0;

  for (const num of nums) {
    if (num % 2 === 1) {
      result++;
    }
  }

  return result;
}

// Do not edit this line;
module.exports = sumOfAllOddNumbers;