function isPalindrome(word) {
  for (let i = 0; i < word.length / 2; i++) {
    if (
      word.substring(i, i + 1) !=
      word.substring(word.length - 1 - i, word.length - i)
    ) {
      return false;
    }
  }

  return true;
}

// Do not edit this line;
module.exports = isPalindrome;
