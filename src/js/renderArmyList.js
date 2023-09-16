import { armiesComposition } from "./data";

const renderArmyLists = () => {
  const armiesLists = document.querySelectorAll(".army_list");
  armiesLists.forEach((list) => (list.innerHTML = ""));
  armiesComposition[0].forEach((unit) => {
    const li = document.createElement("li");
    li.innerText = `${unit.name} - ${unit.currentHealth}ХП`;
    const span = document.createElement("span");
    li.appendChild(span);
    span.style.backgroundColor = "rgb(238, 83, 83)";
    span.style.width = `${unit.currentHealth / (unit.maxHealth / 100)}%`;
    armiesLists[0].appendChild(li);
  });
  armiesComposition[1].forEach((unit) => {
    const li = document.createElement("li");
    li.innerText = `${unit.name} - ${unit.currentHealth}ХП`;
    const span = document.createElement("span");
    li.appendChild(span);
    span.style.backgroundColor = "rgb(99, 147, 252)";
    span.style.width = `${unit.currentHealth / (unit.maxHealth / 100)}%`;
    armiesLists[1].appendChild(li);
  });
};

export default renderArmyLists;
