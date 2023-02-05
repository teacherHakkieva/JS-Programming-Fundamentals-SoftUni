function travelTime(input) {
  let travel = {};
  for (let el of input) {
    let element = el.split(" > ");
    let country = element[0];
    let town = element[1];
    let cost = +element[2];
    let news = { town, cost };

    if (!travel.hasOwnProperty(country)) {
      travel[country] = new Set();
      for (let el in news) {
        travel[country].add(news);
      }
    } else {
      console.log(travel[country]);
      if (!travel.hasOwnProperty(town)) {
        for (let el in news) {
          travel[country].add(news);
        }
      } else {
        console.log(travel[cost]);
        if (!travel.hasOwnProperty(cost)) {
          if (travel([country][1]) > cost) {
            travel[country][1] = cost;
          }
        }
      }
    }
  }

  let sorted = Object.entries(travel).sort();
 
  for (let [item,looks] of sorted) {
    looks = Array.from(looks)
    for (let www of looks) {
      console.log(item,'->',www.town,"->",www.cost);
    }
  }
}

travelTime([
  "Bulgaria > Sofia > 500",
  "Bulgaria > Sopot > 800",
  "France > Paris > 2000",
  "Albania > Tirana > 1000",
  "Bulgaria > Sofia > 200",
]);
