function meeting(input) {
    let obj = {};
    for (let element of input) {
        element = element.split(" ");
       let weekday=element[0];
       let person=element[1];
        if (!obj.hasOwnProperty(weekday)) {
            console.log(`Scheduled for ${weekday}`);
            obj[weekday] = person;
        } else {
            console.log(`Conflict on ${weekday}!`);
        }
    }
    for (let day in obj) {
       console.log(`${day} -> ${obj[day]}`);
    }
}
meeting(['Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim'])