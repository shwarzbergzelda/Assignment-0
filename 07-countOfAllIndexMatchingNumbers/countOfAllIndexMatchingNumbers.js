function countOfAllIndexMatchingNumbers(nums) {
  let result = 0;

  for (let i = 0; i < nums.length; i++) {
    if (i === nums[i]) {
      result++;
    }
  }

  return result;
}

// Do not edit this line;
module.exports = countOfAllIndexMatchingNumbers;