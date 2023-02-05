function arenaTier(input) {
  let list = {};
  let skills = 0;
  while (input[0] !== "Ave Cesar") {
    let [gladiator, technique, skill] = input.shift().split(" -> ");
    if (skill == undefined) {
      let command = gladiator.split(" vs ");
      let gladiator1 = command[0];
      let gladiator2 = command[1];
      if (list.hasOwnProperty(gladiator1) && list.hasOwnProperty(gladiator2)) {
        for (let key in list[gladiator1]) {
          for (let keys in list[gladiator2]) {
            if (key == keys) {
              if (list[gladiator1][key] > list[gladiator2][keys]) {
                delete list[gladiator2][keys];
              } else {
                delete list[gladiator1][key];
              }
            }
          }
        }
      }
      continue;
    }
    skill = +skill;
    if (!list[gladiator]) {
      list[gladiator] = {};
    }
    if (!list[gladiator][technique]) {
      list[gladiator][technique] = skill;
    }
  }
  let gladiatorSkills = {};
  for (let gladiator in list) {
    let tehno = Object.entries(list);
    for (let [key, values] of tehno) {
      let nowlist = Object.entries(values);
      skills = 0;
      for (let keys of nowlist) {
        skills += keys[1];
      }
      gladiatorSkills[key] = skills;
    }
  }
  let newSkillsSort = Object.entries(gladiatorSkills).sort(
    (a, b) => b[1] - a[1]
  );
  for (let [name, skills] of newSkillsSort) {
    if (skills !== 0) {
      console.log(`${name}: ${skills} skill`);
      let tehno = Object.entries(list);
      for (let findName of tehno) {
        if (name === findName[0]) {
          let nowlist = Object.entries(findName[1]).sort(
            (a, b) => b[1] - a[1] || a[0].localeCompare(b[0])
          );
          for (let values of nowlist) {
            console.log(`- ${values[0]} <!> ${values[1]}`);
          }
        }
      }
    }
  }
}

arenaTier([
  "Peter -> Duck -> 400",
  "Julius -> Shield -> 150",
  "Gladius -> Heal -> 200",
  "Gladius -> Support -> 250",
  "Gladius -> Shield -> 250",
  "Peter vs Gladius",
  "Gladius vs Julius",
  "Gladius vs Maximilian",
  "Ave Cesar",
]);
