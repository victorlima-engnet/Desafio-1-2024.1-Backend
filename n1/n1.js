function palindrome(str) {
  const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");

  const reversedStr = cleanStr.split("").reverse().join("");

  return cleanStr === reversedStr;
}

console.log(palindrome("A man, a plan, a canal. Panama")); 
