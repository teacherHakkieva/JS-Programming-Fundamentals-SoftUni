function solve3(input) {
    let arr = input.shift().split(' ');
    input.pop();
    let count = 0;
    let result=[];
    for (let i = 0; i < input.length; i++) {
        let command = input[i].split(' ');
        let index1 = +command[0];
        let index2 = +command[1];
        count++;
        if (index1 < 0 || index2 < 0 || index1 >= arr.length || index2 >= arr.length|| index1 === index2) {
            console.log(`Invalid input! Adding additional elements to the board`);
            arr.splice(arr[arr.length / 2], 0, `-${count}a`, `-${count}a`);
        } else if (arr[index1] === arr[index2]) {
            console.log(`Congrats! You have found matching elements - ${arr[index1]}!`);
            result=arr.filter(x=>x!==arr[index1]);
            arr=result;

        } else if (arr[index1] !== arr[index2]) {
            console.log(`Try again!`);
        }
        if (arr.length === 0) {
            console.log(`You have won in ${count} turns!`);
            break;;
        }
    }
    if (arr.length > 0) {
        console.log("Sorry you lose :(");
        console.log(arr.join(' '));
    }
}
solve3( [
    "1 1 2 2 3 3 4 4 5 5", 
    "1 0",
    "-1 0",
    "1 0", 
    "1 0", 
    "1 0", 
    "end"
    ]
);
solve3([
    "a 2 4 a 2 4",
    "4 0",
    "0 2",
    "0 1",
    "0 1",
    "end"
]
)