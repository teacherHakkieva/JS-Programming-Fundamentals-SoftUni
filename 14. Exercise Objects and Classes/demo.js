class Laptop {
    constructor(info,quality){
        this.info=info;
        this.quality=quality;
    }
   
    isOn = false;
   
    turnOn(isOn) {
      if (isOn == false) {
        isOn = true;
        this.quality--;
        return isOn;
      }
    }
   
    turnOff(isOn) {
      if (isOn === true) {
        isOn = false;
        this.quality--;
        return isOn;
      }
    }
   
    showInfo() {
      let textJSON = JSON.stringify(this.info);
      console.log(textJSON);
    } // This method works!
   
   
   
   
    price() {
      let currentPrice = Number(800 - info.age * 2 + quality * 0.5);
      return currentPrice;
    }
  }
   
  let info = { producer: "Dell", age: 2, brand: "XPS" };
  let laptop = new Laptop(info, 10);
  laptop.turnOn();
  console.log(laptop.showInfo());
  laptop.turnOff();
  console.log(laptop.quality);
  laptop.turnOn();
  console.log(laptop.isOn);
  console.log(laptop.price);
   