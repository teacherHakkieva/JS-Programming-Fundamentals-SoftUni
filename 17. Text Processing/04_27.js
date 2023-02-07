function countStringOcc(text, word) {
  let count = 0;
  sentence = text.split(" ");
  for (let iterator of sentence) {
    if (iterator == word) {
      count++;
    }
  }
  console.log(count);
}
countStringOcc("This is a word and it also is a sentence", "is");
