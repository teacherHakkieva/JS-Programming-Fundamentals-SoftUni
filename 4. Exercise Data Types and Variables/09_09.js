function gladiatorExpenses(lost, helmetPrice, swordPrice, shiedPrice, armorPrice) {
    let countHelmet = 0;
    let countSword = 0;
    let countShield = 0;
    let countArmor = 0;
    let expenses = 0;
    for (let i = 1; i <= lost; i++) {
        if (i % 2 == 0) {
            countHelmet++;
        }
        if (i % 3 == 0) {
            countSword++;
        }
        if (i % 2 == 0 && i % 3 == 0) {
            countShield++;
        if (countShield % 2 == 0 && countShield != 0) {
            countArmor++;
        }}
    }
    expenses = helmetPrice * countHelmet + swordPrice * countSword + shiedPrice * countShield + armorPrice * countArmor;
    console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);
}
gladiatorExpenses(7, 2, 3, 4, 5);
gladiatorExpenses(23, 12.50, 21.50, 40, 200);
