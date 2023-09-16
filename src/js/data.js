const races = ["Люди", "Эльфы", "Орки"];
const armyRaces = [0, 0];
let armiesComposition = [[], []];
const eventColor = ["red", "blue", "silver"];

const changeArmiesComposition = (value) => {
  armiesComposition = value;
};

export {
  races,
  armyRaces,
  armiesComposition,
  eventColor,
  changeArmiesComposition,
};
