function rot13(str) {
  return str
    .split("")
    .map(char => {
      const code = char.charCodeAt(0);

      if (code >= 65 && code <= 90) {
        return String.fromCharCode(
          code < 78 ? code + 13 : code - 13
        );
      }

      return char;
    })
    .join("");
}

console.log(rot13("SERR PBQR PNZC")); // "FREE CODE CAMP"
