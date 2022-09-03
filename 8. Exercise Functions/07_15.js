function matrix(n) {
  for (let i = 0; i < n; i++) {
    let result = "";
    for (let j = 0; j < n; j++) {
      result += ` ${n}`;
      if (j === n - 1) {
        console.log(result);
      }
    }
  }
}
matrix(7);
