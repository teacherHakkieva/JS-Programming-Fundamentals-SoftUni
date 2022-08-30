function charactersInRange(char1, char2) {
  let start = Math.min(char1.charCodeAt(0),char2.charCodeAt(0));
  let end = Math.max(char1.charCodeAt(0),char2.charCodeAt(0));
  let charInRangeArr = [];
  for (let i = start + 1; i < end; i++) {
      charInRangeArr.push(String.fromCharCode(i));
  }
  console.log(charInRangeArr.join(" "));
}
charactersInRange("a", "d");
