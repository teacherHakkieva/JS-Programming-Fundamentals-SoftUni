function mergeArrays(arr1, arr2) {
  let arr3 = [];
  for (let i = 0; i < arr1.length; i++) {
    let count = 2 + i;
    if (count % 2 == 0) {
      let sum = Number(arr1[i]) + Number(arr2[i]);
      arr3[i] = sum;
    } else {
      arr3[i] = arr1[i] + arr2[i];
    }
  }
  console.log(arr3.join(" - "));
}
mergeArrays(["5", "15", "23", "56", "35"], ["17", "22", "87", "36", "11"]);
mergeArrays(["13", "12312", "5", "77", "4"], ["22", "333", "5", "122", "44"]);
