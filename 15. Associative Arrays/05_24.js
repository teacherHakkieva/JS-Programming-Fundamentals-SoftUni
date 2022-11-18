function schoolGrades(input) {
    let schoolGrades = new Map();
    for (let entry of input) {
        entry = entry.split(" ");
        let name = entry.shift();
        let grades = entry.map(Number);

        if (schoolGrades.has(name)) {
            let currentGrades = schoolGrades.get(name);
            for (const grade of grades) {
                currentGrades.push(grade)
            }
            schoolGrades.set(name, currentGrades)
        } else {
            schoolGrades.set(name, grades)
        }
    }
    for (const grade of schoolGrades) {
      
        let sum=0;
        for (const element of grade[1]) {
            sum+=element
        }
        let average=sum/grade[1].length;
     
        schoolGrades.set(grade[0], average)
    }
 
    let sortedSchoolGratdes = Array.from(schoolGrades.entries());
    sortedSchoolGratdes.sort((a, b) => a[0].localeCompare(b[0]))
    for (let key of sortedSchoolGratdes) {
        console.log(`${key[0]}: ${key[1].toFixed(2)} `);
    }

}

schoolGrades(['Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6'])