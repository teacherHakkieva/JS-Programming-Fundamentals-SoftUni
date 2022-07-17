function addAndSubtract(arr) {
  let sumArr = 0;
  let sumArr1 = 0;
  for (let i = 0; i < arr.length; i++) {
    sumArr += arr[i];
  }
  let arr1 = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      arr[i] = arr[i] + i;
    } else {
      arr[i] = arr[i] - i;
    }
    arr1.push(arr[i]);
  }
  for (let i = 0; i < arr1.length; i++) {
    sumArr1 += arr1[i];
  }
  console.log(arr1);
  console.log(sumArr);
  console.log(sumArr1);
}
addAndSubtract([5, 15, 23, 56, 35]);
