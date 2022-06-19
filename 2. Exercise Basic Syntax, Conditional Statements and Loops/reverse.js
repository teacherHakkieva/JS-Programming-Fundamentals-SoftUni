function reverce(string) {
    let splitString = string.split("");
    let revercedString = splitString.reverse();
    let joinedString = revercedString.join(``)
    console.log(joinedString);
}

reverce(`Hello`)
reverce(`SoftUni`)
reverce('1234')