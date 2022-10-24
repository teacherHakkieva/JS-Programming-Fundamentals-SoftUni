function personInfo(firstName, lastName, age) {
    let person = {};
    person.firstName = firstName;
    person.lastName = lastName;
    person.age=age
    return person;
  }
  
printPersonInfo('Peter', 'Pan', '20');
printPersonInfo("George", "Smith", "18");