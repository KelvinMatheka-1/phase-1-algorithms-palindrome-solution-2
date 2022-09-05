function isPalindrome(word) {
  for (let firstLetter = 0; firstLetter < word.length / 2; firstLetter++)
  {
    const lastLetter = word.length - 1 - firstLetter;
  
  if (word[firstLetter] !== word[lastLetter]) {
    return false;
  }
  return true;
}}

/* 
  1.find word with less than 2 letters
  2. increment firstWord
  3. return true if firstWord matches lastWord
*/

/*

palindrome words are characters that read the same backward as forward hereby, we need to return true if the word is less than 2 letters, i achieve
that by looping through the string using the for loop.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
