function blackFrog(input) {
  let day = +input[0];
  let dailyPlunder = +input[1];
  let expectedPlunder = +input[2];
  let totalPlunder = 0;
  for (let i = 1; i <= day; i++) {
    totalPlunder += dailyPlunder;
    if (i % 3 === 0) {
      totalPlunder += dailyPlunder / 2;
    } 
    if (i % 5 === 0) {
      totalPlunder -= totalPlunder * 0.30;
    }
  }
  if (totalPlunder >= expectedPlunder) {
    console.log(`Ahoy! ${totalPlunder.toFixed(2)} plunder gained.`);
  } else {
    let percentage = totalPlunder / (expectedPlunder / 100);
    console.log(`Collected only ${percentage.toFixed(2)}% of the plunder.`);
  }
}
blackFrog(["5", "40", "100"]);
blackFrog(["10", "20", "380"]);
