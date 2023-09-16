import { armiesComposition, eventColor } from "./data";
import { renderArmiesCounter, hideArmiesCounter } from "./renderArmiesCounter";
import renderArmyLists from "./renderArmyList";

const addEvent = (str, armyNum) => {
  const p = document.createElement("p");
  p.innerText = str;
  p.classList.add(`${eventColor[armyNum]}_event`);
  eventList.appendChild(p);
  eventList.scrollTo(0, eventList.scrollHeight);
};

const makeMove = (unitNumber) => {
  if (armiesComposition[0].length > 0 && armiesComposition[1].length > 0) {
    // Смотрим чей первый ход
    let firstMover = 0;
    let secondMover = 1;
    if (
      armiesComposition[0][unitNumber] &&
      armiesComposition[1][unitNumber] &&
      armiesComposition[0][unitNumber].speed <
        armiesComposition[1][unitNumber].speed
    ) {
      firstMover = 1;
      secondMover = 0;
    }

    // Определяем цель атаки
    if (armiesComposition[firstMover].length > unitNumber) {
      const random =
        Math.round(Math.random() * 1000) %
        armiesComposition[secondMover].length;

      const attacker = armiesComposition[firstMover][unitNumber];
      const defender = armiesComposition[secondMover][random];

      // Проверяем попали ли атакующий
      const isHitted = Math.round(Math.random() * 10) <= attacker.accuracy;
      if (isHitted) {
        if (attacker.magic) {
          armiesComposition[secondMover].splice(random, 1);
          armiesComposition[firstMover].push(defender);
          addEvent(`Колдун перманил ${defender.charmedName}`, firstMover);
        } else {
          const damage = (attacker.strength / 10) * defender.armor;
          armiesComposition[secondMover][random].currentHealth = (
            defender.currentHealth - damage
          ).toFixed(2);
          addEvent(
            `${attacker.name} нанёс ${damage} урона ${defender.recieverName}`,
            firstMover
          );
          if (defender.currentHealth <= 0) {
            armiesComposition[secondMover].splice(random, 1);
            addEvent(`${defender.name} умер`, secondMover);
          }
        }
      }
    }
    // Те же действия но для второй армии
    if (armiesComposition[secondMover].length > unitNumber) {
      const random =
        Math.round(Math.random() * 1000) % armiesComposition[firstMover].length;

      const attacker = armiesComposition[secondMover][unitNumber];
      const defender = armiesComposition[firstMover][random];

      const isHitted = Math.round(Math.random() * 10) <= attacker.accuracy;
      if (isHitted) {
        if (attacker.magic) {
          armiesComposition[firstMover].splice(random, 1);
          armiesComposition[secondMover].push(defender);
          addEvent(`Колдун перманил ${defender.charmedName}`, secondMover);
        } else {
          const damage = (attacker.strength / 10) * defender.armor;
          armiesComposition[firstMover][random].currentHealth = (
            defender.currentHealth - damage
          ).toFixed(2);
          addEvent(
            `${attacker.name} нанёс ${damage} урона ${defender.recieverName}`,
            secondMover
          );
          if (defender.currentHealth <= 0) {
            armiesComposition[firstMover].splice(random, 1);
            addEvent(`${defender.name} умер`, firstMover);
          }
        }
      }
    }
    renderArmiesCounter();
    renderArmyLists();
    if (armiesComposition[0].length === 0) {
      addEvent("Победила синяя армия", 2);
      return hideArmiesCounter();
    }
    if (armiesComposition[1].length === 0) {
      addEvent("Победила красная армия", 2);
      return hideArmiesCounter();
    }
  }
};

export default makeMove;
