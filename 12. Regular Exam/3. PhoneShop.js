function solve3(input) {
    let arr = input.shift().split(", ");
    input.pop();
    let isPhone = false;
    for (let i = 0; i < input.length; i++) {
        let commands = input[i].split(' - ');
        let command = commands[0];
        let phone1 = commands[1];
        isPhone = arr.includes(phone1);
        if (command == "Add") {
            if (!isPhone) {
                arr.push(phone1);
            }
        } else if (command == "Remove") {
            if (isPhone) {
                arr.splice(arr.indexOf(phone1), 1)
            }
        } else if (command == "Bonus phone") {
            let pp = phone1.split(':');
            let p1 = pp[0];
            let p2 = pp[1];
            isPhone = arr.includes(p1);
            if (isPhone) {
                arr.splice(arr.indexOf(p1) + 1, 0, p2)
            }
        } else if (command == "Last") {
            let lastEl = phone1;
            if (isPhone) {
                arr.splice(arr.indexOf(phone1), 1);
                arr.push(phone1);
            }
        }
    }
    console.log(arr.join(", "));
}
solve3(["HuaweiP20, XiaomiNote",
    "Remove - Samsung",
    "Bonus phone - XiaomiNote:Iphone5",
    "End"]);
solve3(["SamsungA50, MotorolaG5, HuaweiP10",
    "Last - SamsungA50",
    "Add - MotorolaG5",
    "End"]);