import { armiesComposition } from "./data";

const renderArmiesCounter = () => {
  document.querySelector("#army1Quantity").style.display = "none";
  document
    .querySelector("#redArmy")
    .querySelector(
      "h3"
    ).innerText = `Численость: ${armiesComposition[0].length}`;
  document.querySelector("#army2Quantity").style.display = "none";
  document
    .querySelector("#blueArmy")
    .querySelector(
      "h3"
    ).innerText = `Численость: ${armiesComposition[1].length}`;
};

const hideArmiesCounter = () => {
  document.querySelector("#army1Quantity").style.display = "inline";
  document
    .querySelector("#redArmy")
    .querySelector("h3").innerText = `Численость:`;
  document.querySelector("#army2Quantity").style.display = "inline";
  document
    .querySelector("#blueArmy")
    .querySelector("h3").innerText = `Численость:`;
};
export { renderArmiesCounter, hideArmiesCounter };
