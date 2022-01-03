function sumOfNumsWithinARange(nums, start, end) {
  const startIndex = nums.indexOf(start);
  const endIndex = nums.indexOf(end);
  let result = 0;

  if (startIndex === -1) return 0;
  if (endIndex === -1) {
    return nums.length - startIndex;
  }

  for (let i = startIndex; i <= endIndex; i++) {
    result++;
  }

  return result;
}

// Do not edit this line;
module.exports = sumOfNumsWithinARange;