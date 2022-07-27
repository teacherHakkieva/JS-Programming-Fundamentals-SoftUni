function magicSum(array, magicNumber) {
  for (let i = 0; i < array.length - 1; i++) {
    let currEle = array[i];
    for (let j = i + 1; j < array.length; j++) {
      let nextEle = array[j];
      let sum = currEle + nextEle;
      if (sum === magicNumber) {
        console.log(`${currEle} ${nextEle}`);
      }
    }
  }
}
magicSum([1, 7, 6, 2, 19, 23], 8);
