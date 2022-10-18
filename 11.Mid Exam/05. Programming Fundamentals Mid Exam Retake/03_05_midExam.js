function inventory(input) {
    let journal =input[0].split(', ');
    let end=input.pop();
  
    for (let i = 1; i < input.length; i++) {
       let commands=input[i].split(' - ');
        let command=commands[0];
        let item=commands[1];
        let isInventory=journal.includes(item);
       if (command==='Collect') {
           if (isInventory === false) {
               journal.push(item)
           }
       } else if(command==='Drop'){
        if (isInventory === true) {
            journal.splice(journal.indexOf(item),1);
        }
       }else if(command==='Combine Items'){
       let items= item.split(':');
        let oldElement=items[0];
        let newElement=items[1];
        let isInventory=journal.includes(oldElement);
if (isInventory===true) {
    journal.splice(journal.indexOf(oldElement)+1,0,newElement);
    
}
       }
       else if (command==='Renew') {
        if (isInventory === true) {
            journal.splice(journal.indexOf(item),1);
            journal.push(item);
        }   
       }
    }
    console.log(journal.join(', '));
}
inventory([
    'Iron, Sword',
  'Drop - Bronze',
  'Combine Items - Sword:Bow',
  'Renew - Iron',
  'Craft!'

  ]);