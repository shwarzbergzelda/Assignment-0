function countOfAllNumbersSmallerThanTarget(nums, target) {
  let result = 0;

  for (const num of nums) {
    if (num < target) {
      result++;
    }
  }
  
  return result;
}

// Do not edit this line;
module.exports = countOfAllNumbersSmallerThanTarget;