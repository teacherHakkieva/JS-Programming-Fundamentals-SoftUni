function stringSubstring(findWord,sentence) {
   let word=findWord.toLowerCase();
  sentence=sentence.toLowerCase();
  if (sentence.includes(word)) {
      console.log(findWord);
  }else{
      console.log(`${findWord} not found!`);
  }
}
stringSubstring('Best',
'JavaScript is the best programming language'
)