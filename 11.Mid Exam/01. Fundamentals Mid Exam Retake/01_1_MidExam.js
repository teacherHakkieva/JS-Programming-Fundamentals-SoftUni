function exam1(command) {
  let sum = 0;
  let texes = 0;
  let totalPrice = 0;
  for (const el of command) {
    if (el !== "regular" && el !== "special") {
      let value = Number(el);
      if (value > 0) {
        sum += value;
      } else {
        console.log("Invalid price!");
      }
    } else {
      if (el == "regular") {
        texes = sum * 0.2;
        totalPrice = sum + texes;
      } else if ("special") {
        texes = sum * 0.2;
        totalPrice = sum + texes - (sum + texes) * 0.1;
      }
    }
  }
  if (sum === 0) {
    console.log("Invalid order!")
   return;
  }

  console.log(`Congratulations you've just bought a new computer!`);
  console.log(`Price without taxes: ${sum.toFixed(2)}$`);
  console.log(`Taxes: ${texes.toFixed(2)}$`);
  console.log(`-----------`);
  console.log(`Total price: ${totalPrice.toFixed(2)}$`);
}
exam1(["1050", "200", "450", "2", "18.50", "16.86", "special"]);
exam1(["regular"]);
