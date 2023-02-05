function legendaryFarming(inputs) {
  let input = inputs.split(" ");
  let item = {
    Shadowmourne: 250,
    Valanyr: 250,
    Dragonwrath: 250,
  };
  let oldItem = {
    shards: 0,
    fragments: 0,
    motes: 0,
  };
  let metterItems = {};
  for (let i = 0; i < input.length; i += 2) {
    let quantity = +input[i];
    let material = input[i + 1].toLowerCase();
    if (material == "shards") {
      item.Shadowmourne -= quantity;
      if (item.Shadowmourne <= 0) {
        quantity = Math.abs(item.Shadowmourne);
        item.Shadowmourne = 0;
        oldItem[material] = quantity;
        break;
      }
      if (oldItem.hasOwnProperty(material)) {
        oldItem[material] += quantity;
      }
    } else if (material == "fragments") {
      item.Valanyr -= quantity;
      if (item.Valanyr <= 0) {
        quantity = Math.abs(item.Valanyr);
        item.Valanyr = 0;
        oldItem[material] = quantity;
        break;
      }
      if (oldItem.hasOwnProperty(material)) {
        oldItem[material] += quantity;
      }
    } else if (material == "motes") {
      item.Dragonwrath -= quantity;
      if (item.Dragonwrath <= 0) {
        quantity = Math.abs(item.Dragonwrath);
        item.Dragonwrath = 0;
        oldItem[material] = quantity;
        break;
      }
      if (oldItem.hasOwnProperty(material)) {
        oldItem[material] += quantity;
      }
    } else {
      if (metterItems.hasOwnProperty(material)) {
        metterItems[material] += quantity;
      } else {
        metterItems[material] = quantity;
      }
    }
  }

  if (item.Valanyr == 0 || item.Shadowmourne == 0 || item.Dragonwrath == 0) {
    if (item.Shadowmourne == 0) {
      console.log(`Shadowmourne obtained!`);
    }
    if (item.Valanyr == 0) {
      console.log(`Valanyr obtained!`);
    }
    if (item.Dragonwrath == 0) {
      console.log(`Dragonwrath obtained!`);
    }
    let sorted = Object.entries(oldItem).sort((a,b)=>(b[1]-a[1])||(a[0].localeCompare(b)));

    for (let [key, value] of sorted) {
      console.log(`${key}: ${value}`);
    }
    let sortedMett = Object.entries(metterItems).sort((a,b)=>a[0].localeCompare(b)||b[1]-a[1]);

    for (let [key, value] of sortedMett) {
      console.log(`${key}: ${value}`);
    }
   
  }
}

//legendaryFarming("3 Motes 5 stones 5 Shards 6 leathers 255 fragments 7 Shards");
legendaryFarming(
  "123 silver 6 shards 8 shards 5 motes 9 fangs 75 motes 103 MOTES 8 Shards 86 Motes 7 stones 19 silver"
);
