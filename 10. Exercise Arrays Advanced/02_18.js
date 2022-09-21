function distinctArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    let el = arr[i];

    for (let j = i + 1; j < arr.length; j++) {
      let fineEl = arr[j];
      if (el == arr[j + 1]) {
        arr.splice(j + 1, 1);
      }
      if (el == fineEl) {
        let fineInd = arr.lastIndexOf(fineEl);
        arr.splice(fineInd, 1);
      }
    }
    if (el == arr[i + 1]) {
      arr.splice(i + 1, 1);
    }
  }
  console.log(arr.join(" "));
}
distinctArray([1, 1, 1, 1, 1, 1]);
distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2]);
distinctArray([20, 8, 12, 13, 4, 4, 8, 5]);
