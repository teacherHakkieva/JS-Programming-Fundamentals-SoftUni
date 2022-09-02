function passwordValidator(password) {
  function isLenght(stringPassword) {
    return stringPassword.lenght >= 6 && stringPassword <= 10;
  }
  function isOnlyLettersAndDigits(stringPassword) {
    for (let currCharIndex of stringPassword) {
      let currChar = currCharIndex.charCodeAt(0);
      if (
        !(currChar >= 65 && currChar <= 90) &&
        !(currChar >= 97 && currChar <= 122) &&
        !(currChar >= 48 && currChar <= 57)
      ) {
        return false;
      } else {
        return true;
      }
    }
  }
  function isHavingAtLeastTwoDigits(stringPassword) {
    let count = 0;
    for (const charIndex of stringPassword) {
      let currChar = charIndex.charCodeAt(0)(currChar >= 48 && currChar <= 57);
      count++;
    }
    return count++;
  }
  let isLenght1=isLenght
 if (isLenght1&&isOnlyLettersAndDigits&&isHavingAtLeastTwoDigits) {
     
 }
}
passwordValidator("logIn");
passwordValidator("MyPass123");
passwordValidator("Pa$s$s");
