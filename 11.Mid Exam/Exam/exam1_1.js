function solve1(input) {
    let arr = input;
    let sum = 0;
    let ofTexas = 0;
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === "special") {
          if (sum===0) {
              console.log(`Invalid order!`);
              return;
          }
        ofTexas = sum * 0.2;
        total = sum + ofTexas - (sum + ofTexas) * 0.1;
        console.log(`Congratulations you've just bought a new computer!`);
        console.log(`Price without taxes: ${sum.toFixed(2)}$`);
        console.log(`Taxes: ${ofTexas.toFixed(2)}$`);
        console.log(`-----------`);
        console.log(`Total price: ${total.toFixed(2)}$`);
        return;
      } else if (arr[i] === "regular") {
          if (sum===0) {
              console.log(`Invalid order!`);
              return;
          }
          ofTexas = sum * 0.2;
          total=sum+ofTexas;
        console.log(`Congratulations you've just bought a new computer!`);
        console.log(`Price without taxes: ${sum.toFixed(2)}$`);
        console.log(`Taxes: ${ofTexas.toFixed(2)}$`);
        console.log(`-----------`);
        console.log(`Total price: ${total.toFixed(2)}$`);
        return;
      }
      let texas = +arr[i];
      if (texas > 0) {
        sum += texas;
      } else if (texas == 0) {
        console.log(`Invalid order!`);
      } else if (texas < 0) {
        console.log(`Invalid price!`);
      }
    }
  }
  solve1(["1050", "200", "450", "2", "18.50", "16.86", "special"]);
  solve1([
    "1023",
    "15",
    "-20",
    "-5.50",
    "450",
    "20",
    "17.66",
    "19.30",
    "regular",
  ]);
  