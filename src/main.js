import "./style.css";
import getRandomSolider from "./js/getRandomSolider";
import makeMove from "./js/makeMove";
import {
  armiesComposition,
  armyRaces,
  changeArmiesComposition,
} from "./js/data";
import renderArmyLists from "./js/renderArmyList";

const racePickers = document.querySelectorAll(".race_picker");

const rerenderRace = (index) => {
  racePickers[index].querySelector("h2").innerText = races[armyRaces[index]];
};

racePickers.forEach((picker, index) => {
  const arrows = picker.querySelectorAll("span");

  arrows[0].addEventListener("click", () => {
    if (armyRaces[index] === 0) {
      armyRaces[index] = 2;
    } else armyRaces[index] -= 1;
    rerenderRace(index);
  });
  arrows[1].addEventListener("click", () => {
    if (armyRaces[index] === 2) {
      armyRaces[index] = 0;
    } else armyRaces[index] += 1;
    rerenderRace(index);
  });
});

const gatherBtn = document.querySelector("#gatherArmies");
gatherBtn.addEventListener("click", () => {
  let armiesQuantity = [];
  armiesQuantity[0] = parseInt(document.querySelector("#army1Quantity").value);
  armiesQuantity[1] = parseInt(document.querySelector("#army2Quantity").value);
  armiesQuantity = armiesQuantity.map((quantity) =>
    isNaN(quantity) ? 10 : quantity
  );
  let number = 1;
  changeArmiesComposition([[], []]);
  for (let i = 0; i < armiesQuantity[0]; i++) {
    const solider = getRandomSolider(armyRaces[0]);
    solider.name = `${solider.name} ${number}`;
    solider.recieverName = `${solider.recieverName} ${number}`;
    armiesComposition[0].push(solider);
    number++;
  }
  for (let i = 0; i < armiesQuantity[1]; i++) {
    const solider = getRandomSolider(armyRaces[1]);
    solider.name = `${solider.name} ${number}`;
    solider.recieverName = `${solider.recieverName} ${number}`;
    armiesComposition[1].push(solider);
    number++;
  }
  renderArmyLists();
});

document.querySelector("#makeMove").addEventListener("click", () => {
  const redQuantity = armiesComposition[0].length;
  const blueQuantity = armiesComposition[1].length;
  const maxLength = redQuantity > blueQuantity ? redQuantity : blueQuantity;
  for (let i = 0; i < maxLength; i++) {
    if (armiesComposition[0].length > 0 && armiesComposition[1].length > 0)
      makeMove(i);
  }
});

document.querySelector("#endFight").addEventListener("click", () => {
  while (armiesComposition[0].length > 0 && armiesComposition[1].length > 0) {
    const redQuantity = armiesComposition[0].length;
    const blueQuantity = armiesComposition[1].length;
    const maxLength = redQuantity > blueQuantity ? redQuantity : blueQuantity;
    for (let i = 0; i < maxLength; i++) {
      if (armiesComposition[0].length > 0 && armiesComposition[1].length > 0)
        makeMove(i);
    }
  }
});

let isPlaying = false;

const tryMove = () => {
  if (
    armiesComposition[0].length > 0 &&
    armiesComposition[1].length > 0 &&
    isPlaying
  ) {
    const redQuantity = armiesComposition[0].length;
    const blueQuantity = armiesComposition[1].length;
    const maxLength = redQuantity > blueQuantity ? redQuantity : blueQuantity;
    for (let i = 0; i < maxLength; i++) {
      if (armiesComposition[0].length > 0 && armiesComposition[1].length > 0)
        makeMove(i);
    }
    setTimeout(tryMove, 500);
  }
};

const autoFightBtn = document.querySelector("#autoFight");

autoFightBtn.addEventListener("click", () => {
  if (
    !isPlaying &&
    armiesComposition[0].length > 0 &&
    armiesComposition[1].length > 0
  ) {
    isPlaying = true;
    autoFightBtn.innerText = "Остановить бой";
    setTimeout(tryMove, 500);
  } else {
    autoFightBtn.innerText = "Автоматический бой";
    isPlaying = false;
  }
});
