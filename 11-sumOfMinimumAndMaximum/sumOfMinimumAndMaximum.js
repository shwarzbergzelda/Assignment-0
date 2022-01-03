function sumOfMinimumAndMaximum(nums) {
  let max = nums[0];
  let min = nums[0];

  for (const num of nums) {
    if (num > max) {
      max = num;
    } else if (num < min) {
      min = num;
    }
  }

  return max + min;
}

// Do not edit this line;
module.exports = sumOfMinimumAndMaximum;