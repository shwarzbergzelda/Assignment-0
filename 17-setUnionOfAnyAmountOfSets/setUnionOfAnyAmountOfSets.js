function setUnionOfAnyAmountOfSets(...args) {
  const set = new Set();

  for (const arg of args)  {
    for (const val of arg) {
      set.add(val);
    }
  }

  return set;
}

// Do not edit this line;
module.exports = setUnionOfAnyAmountOfSets;