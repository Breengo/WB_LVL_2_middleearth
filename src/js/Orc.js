class Orc {
  accuracy = 4;
  strength = 6;
  armor = 5;
  speed = 3;
  maxHealth = 10;
  currentHealth = 10;
}

class LightOrc extends Orc {
  name = "Лёгкий орк";
  recieverName = "Лёгкому орку";
  charmedName = "Лёгкого орка";
  constructor() {
    super();
    this.accuracy = this.accuracy + 1;
    this.speed = this.speed + 4;
  }
}

class HeavyOrc extends Orc {
  name = "Тяжелый орк";
  recieverName = "Тяжелому орку";
  charmedName = "Тяжелого орка";
  constructor() {
    super();
    this.armor = this.armor + 1;
    this.strength = this.strength + 4;
    this.speed = this.speed - 2;
  }
}

export { LightOrc, HeavyOrc };
