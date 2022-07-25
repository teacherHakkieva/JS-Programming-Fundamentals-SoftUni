function equalSums(arr) {
  let hasEqaulSum = false;
  for (let i = 0; i < arr.length; i++) {
    let leftSum = 0;
    let rightSum = 0;
    for (let j = i - 1; j >= 0; j--) {
      leftSum += arr[j];
    }
    for (let num = i + 1; num < arr.length; num++) {
      rightSum += arr[num];
    }
    if (leftSum === rightSum) {
      console.log(i);
      hasEqaulSum = true;
    }
  }
  if (!hasEqaulSum) {
    console.log("no");
  }
}
equalSums([1, 2, 3, 3]);
equalSums([1, 2]);
equalSums([1]);
equalSums([1, 2, 3]);
