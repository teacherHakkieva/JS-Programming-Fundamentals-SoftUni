function listOfProducts(arr) {
  let sortList = arr.sort((a, b) => a.localeCompare(b));
  for (let i = 0; i < sortList.length; i++) {
    console.log(`${i + 1}.${sortList[i]}`);
  }
}
listOfProducts(["Potatoes", "Tomatoes", "Onions", "Apples"]);
listOfProducts(["Watermelon", "Banana", "Apples1","App","Apples"]);
