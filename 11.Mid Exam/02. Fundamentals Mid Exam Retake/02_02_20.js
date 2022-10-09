function arrayModifier(input) {
  let end = input.pop();
  let arr = input[0].split(" ").map((x) => Number(x));
  for (let i = 1; i < input.length; i++) {
    let commands = input[i].split(" ");
    let command = commands[0];

    let num1 = Number(commands[1]);
    let num2 = Number(commands[2]);
    switch (command) {
      case "swap":
        let num = arr[num1];
        arr[num1] = arr[num2];
        arr[num2] = num;
        break;
      case "multiply":
        let n1 = arr[num1];
        let n2 = arr[num2];
        let a = n1 * n2;
        arr[num1] = a;
        break;
      case "decrease":
        let arr1 = [];
        for (const el of arr) {
          arr1.push(el - 1);
        }
        arr = arr1;
        break;
    }
  }
  console.log(arr.join(", "));
}
arrayModifier([
  "23 -2 321 87 42 90 -123",
  "swap 1 3",
  "swap 3 6",
  "swap 1 0",
  "multiply 1 2",
  "multiply 2 1",
  "decrease",
  "end",
]);
arrayModifier([
  "1 2 3 4",
  "swap 0 1",
  "swap 1 2",
  "swap 2 3",
  "multiply 1 2",
  "decrease",
  "end",
]);
