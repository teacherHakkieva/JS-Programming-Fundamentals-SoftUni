function guineaPig(input) {
  let food = input[0] * 1000;
  let hay = input[1] * 1000;
  let cover = input[2] * 1000;
  let weight = input[3] * 1000;
  for (let index = 1; index <= 30; index++) {
    if (food > 0) {
      food -= 300;
      if (index % 2 === 0) {
        hay -= food * 0.05;
      } if (index % 3 === 0) {
        cover -= weight / 3;
      }
    }else{
        console.log(`Merry must go to the pet store!`);
        return;
    }
  }
  if (food<=0||hay<=0||cover<=0) {
    console.log(`Merry must go to the pet store!`);
    return;
  }
  console.log(`Everything is fine! Puppy is happy! Food: ${(food/1000).toFixed(2)}, Hay: ${(hay/1000).toFixed(2)}, Cover: ${(cover/1000).toFixed(2)}.`);
}
//guineaPig(["10", "5", "5.2", "1"]);
//guineaPig(["1", "1.5", "3", "1.5"]);
guineaPig(["9", "5", "5.2", "1"]);
