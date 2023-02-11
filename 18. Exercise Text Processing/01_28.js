function revealWord(wword, text) {
  let words = wword.split(", ");
  words.forEach((word) => {
    let astrix = "*".repeat(word.length);
    text = text.replace(astrix, word);
  });
  console.log(text);
}
revealWord(
  "great",
  "softuni is ***** place for learning new programming languages"
);
revealWord(
  "great, learning",
  "softuni is ***** place for ******** new programming languages"
);
