function cutReverse(text) {
    let firstHalf = text
      .split("")
      .slice(0, text.length / 2)
      .reverse()
      .join("");
    console.log(firstHalf);
    let nextHalf = text
      .split("")
      .slice(text.length / 2, text.length)
      .reverse()
      .join("");
    console.log(nextHalf);
  }
  cutReverse("tluciffiDsIsihTgnizamAoSsIsihT");
  