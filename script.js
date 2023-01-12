function letterCombinations(digits) {
  if (!digits) return [];
  let map = {
    '2': 'abc',
    '3': 'def',
    '4': 'ghi',
    '5': 'jkl',
    '6': 'mno',
    '7': 'pqrs',
    '8': 'tuv',
    '9': 'wxyz'
  };
  let result = [''];
  for (let i = 0; i < digits.length; i++) {
    let temp = [];
    let letters = map[digits[i]];
    for (let j = 0; j < letters.length; j++) {
      for (let k = 0; k < result.length; k++) {
        temp.push(result[k] + letters[j]);
      }
    }
    result = temp;
  }
  return result.sort();
}

module.exports = letterCombinations;
