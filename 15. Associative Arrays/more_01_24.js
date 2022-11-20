function GarageArray(input) {
            found = garages.find(g => g.garageNumber === garageNumber);
        }
        found.carInfo.push(carInfo);
    }
    let output = '';
    garages.forEach(garage => {
        output += `Garage № ${garage.garageNumber}\n`;
        for (let currCar of garage.carInfo) {
            currCar = currCar.replace(/: /g, ' - ');
            output += `--- ${currCar}\n`;
        }
    });
   
}