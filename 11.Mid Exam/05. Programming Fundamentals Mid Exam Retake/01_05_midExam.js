function bonusScoringSystem(input) {
    let countStudent=Number(input[0]);
    let countLectures=Number(input[1]);
    let addBonus=Number(input[2]);
    let maxStudent=0;
    let studentAttendances=0;
    for (let i = 3; i < input.length; i++) {
        let student=Number(input[i]);
        let totalBonus=student/countLectures*(5+addBonus);
        if (maxStudent<totalBonus) {
            maxStudent=totalBonus;
            studentAttendances=student;
        }
    }
    console.log(`Max Bonus: ${Math.ceil(maxStudent)}.`);
    console.log(`The student has attended ${studentAttendances} lectures.`);
}
bonusScoringSystem([
    '5',  '25', '30',
    '12', '19', '24',
    '16', '20'
  ]
  );
  bonusScoringSystem([
    '10', '30', '14', '8',
    '23', '27', '28', '15',
    '17', '25', '26', '5',
    '18'
  ]
  )
