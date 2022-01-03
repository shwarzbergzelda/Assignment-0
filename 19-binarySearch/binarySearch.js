class MySolution {
  constructor() {
    this.flag = false; // this is optional to use;
  }

  binarySearch(nums, target) {
    let midpoint = Math.floor(nums.length / 2);

    if (nums[midpoint] === target) return true;
    if (nums.length === 0) return false;

    if (nums[midpoint] > target) {
      return this.binarySearch(nums.slice(0, midpoint), target);
    } else if (nums[midpoint] < target) {
      return this.binarySearch(nums.slice(midpoint + 1), target);
    }
  }
}

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;