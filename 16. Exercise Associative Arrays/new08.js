function travelTime(input) {
  let countryList = {};
  for (let dest of input) {
    let [name, city, price] = dest.split(" > ");
    price = Number(price);

    if (!countryList[name]) {
      countryList[name] = {};
    }
    if (!countryList[name][city]) {
      countryList[name][city] = price;
    } else {
      countryList[name][city] = Math.min(countryList[name][city], price);
    }
  }
  let arrList = Object.entries(countryList).sort((a, b) => {
    return a[0].localeCompare(b[0]);
  });
  for (let country of arrList) {
    let name = country.shift();
    let cityList = Object.entries(country[0]).sort((a, b) => {
      return a[1] - b[1];
    });
    let result = [];
    for (let city of cityList) {
      result.push(city.join(" -> "));
    }
    console.log(`${name} -> ${result.join(" ")}`);
  }
}
travelTime([
    "Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200",
  ]);