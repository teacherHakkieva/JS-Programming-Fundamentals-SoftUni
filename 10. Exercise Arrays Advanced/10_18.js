function buildAWall(input) {
  let use = 195;
  let sum = 0;
  let allSum=0;
  let arr = input.map((x) => Number(x));
  let arrLine1 = [];
  for (let index = 0; index < 30; index++) {
    sum = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < 30) sum += use;
      arr[i] += 1;
    }
    if (sum !== 0) {
      arrLine1.push(sum);
    }
  }
for (const el of arrLine1) {
    allSum+=el;
}
  console.log(arrLine1.join(", "));
  console.log(`${allSum*1900} pesos`);
}
buildAWall([21, 25, 28]);
buildAWall([17]);
buildAWall([17, 22, 17, 19, 17])

