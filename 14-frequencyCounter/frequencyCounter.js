function frequencyCounter(word) {
  let map = new Object();
  
  for (let i = 0; i < word.length; i++) {
    let currLetter = word.substring(i, i + 1);
    if (!map.hasOwnProperty(currLetter)) {
      map[currLetter] = 1;
    } else {
      let currLetterCount = map[currLetter] + 1;
      map[currLetter] = currLetterCount;
    }
  }

  return map;
}

// Do not edit this line;
module.exports = frequencyCounter;