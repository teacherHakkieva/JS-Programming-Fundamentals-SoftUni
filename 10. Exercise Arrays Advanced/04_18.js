function sorting(arr) {
  let sortArr=arr.sort((a,b)=>{
    return a-b;
  })
  let resultArr=[];
  while (sortArr.length!==0) {
    let bigNumber=sortArr.pop();
    let smallNumber=sortArr.shift();

    resultArr.push(bigNumber);
    resultArr.push(smallNumber);
  }
  console.log(resultArr.join(' '));
}

sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);
sorting([34, 2, 32, 45, 690, 6, 32, 7, 19, 47]);
