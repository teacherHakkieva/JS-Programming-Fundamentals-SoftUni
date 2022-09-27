function gladiatorInventory(input) {
    let result=input[0].split(' ');
   for (let i = 1; i < input.length; i++) {
       let commands=input[i].split(' ');
       let command=commands[0]
       let equipment=commands[1];
       let isEquipment= result.includes(equipment);
       let index=result.indexOf(equipment)
       if (command==='Buy') {
             if (isEquipment==false) {
              result.push(equipment);
          }
       }else if(command=='Trash'){
            if (isEquipment== true) {
                index=result.indexOf(equipment)
            result.splice(index,1)
        }
       }else if (command=='Repair') {
           if (isEquipment==true) {
            result.splice(index,1)
            result.push(equipment)
           }
       }else if (command=='Upgrade') {
          let newEquipment= equipment.split('-');
           let first=newEquipment[0];
           let second=newEquipment[1]
           isEquipment= result.includes(first);
           if (isEquipment == true) {
            let   newIndex=result.indexOf(first)
               result.splice(newIndex+1,0,`${first}:${second}`)
           }
       }
   }
   console.log(result.join(' '));
}
gladiatorInventory(['SWORD Shield Spear',
'Buy Bag',
'Trash Shield',
'Repair Spear',
'Upgrade SWORD-Steel']
);
gladiatorInventory(['SWORD Shield Spear',
'Trash Bow',
'Repair Shield',
'Upgrade Helmet-V']
);
