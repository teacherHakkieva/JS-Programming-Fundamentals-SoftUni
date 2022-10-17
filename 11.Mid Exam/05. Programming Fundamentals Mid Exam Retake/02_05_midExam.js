function muOnline(input) {
    let arr=input.split('|')
    let health=100;
    let bitcoins=0;
    for (let i = 0; i < arr.length; i++) {
        let rooms=arr[i].split(' ');
        let command=rooms[0];
        let amount=+rooms[1];
       if (command==='potion') {
           if (health<100) {
              health+=amount;
              let oldAmount=amount;
              if (health>=100) {
                  amount=oldAmount-(health-100);
                  health=100;
              } 
              console.log(`You healed for ${amount} hp.`);
              console.log(`Current health: ${health} hp.`);
           }
       }else if (command==='chest') {
           bitcoins+=amount;
           console.log(`You found ${amount} bitcoins.`);
       }else{
        if (health>0) {
            health-=amount;
            if (health<=0) {
                console.log(`You died! Killed by ${command}.`);
            console.log(`Best room: ${i+1}`);
            return
            }
            console.log(`You slayed ${command}.`);
        }else{
            console.log(`You died! Killed by ${command}.`);
            console.log(`Best room: ${i+1}`);
            return;
        }
       }        
    }
    console.log(`You've made it!`);
    console.log(`Bitcoins: ${bitcoins}`);
    console.log(`Health: ${health}`);
}
//muOnline("rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000");
muOnline("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110")