import { Elve } from "./Elve";
import { Cavalry, Infantryman, Sorcerer } from "./Human";
import { HeavyOrc, LightOrc } from "./Orc";

const getRandomSolider = (race) => {
  let random = Math.round(Math.random() * 10);
  if (race === 0) {
    if (random < 4) {
      return new Infantryman();
    }
    if (random < 7) {
      return new Cavalry();
    }
    if (random < 10) {
      return new Elve();
    } else return new Sorcerer();
  }
  if (race === 1) {
    if (random < 7) {
      return new Elve();
    }
    if (random < 8) {
      return new Infantryman();
    }
    if (random < 10) {
      return new Cavalry();
    } else return new Sorcerer();
  }
  if (race === 2) {
    if (random < 5) {
      return new LightOrc();
    }
    if (random < 10) {
      return new HeavyOrc();
    } else return new Sorcerer();
  }
};

export default getRandomSolider;
