function titleCaseEdit(title) {
  let result = "";
  result += title.substring(0, 1).toUpperCase();

  for (let i = 1; i < title.length; i++) {
    if (title.substring(i, i + 1) === " ") {
      result += (" " + title.substring(i + 1, i + 2).toUpperCase());
      i++;
    } else {
      result += title.substring(i, i + 1);
    }
  } 

  return result;
}

// Do not edit this line;
module.exports = titleCaseEdit;