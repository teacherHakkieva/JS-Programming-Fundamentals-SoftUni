function lastKNumberSequence(n, k) {
  let arr = [1];
  let sum = 0;
  for (let i = 1; i < n; i++) {
    let star = i - k;
    if (star < 0) {
      star = 0;
    }
    let line = arr.slice(star, i);
    for (let j = 0; j < line.length; j++) {
      sum += line[j];
    }
    arr.push(sum);
    sum = 0;
  }
  console.log(arr.join(" "));
}
lastKNumberSequence(6, 3);
lastKNumberSequence(8, 2);
