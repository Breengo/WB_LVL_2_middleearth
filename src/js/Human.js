class Human {
  accuracy = 5;
  strength = 5;
  armor = 5;
  speed = 5;
  maxHealth = 10;
  currentHealth = 10;
  magic = false;
}

class Infantryman extends Human {
  name = "Пехотинец";
  recieverName = "Пехотинцу";
  charmedName = "Пехотинца";
  constructor() {
    super();
    this.strength = this.strength + 2;
    this.armor = this.armor + 3;
  }
}

class Cavalry extends Human {
  name = "Всадник";
  recieverName = "Всаднику";
  charmedName = "Всадника";
  constructor() {
    super();
    this.armor = this.armor = 1;
    this.speed += 5;
    this.strength += 1;
  }
}

class Sorcerer extends Human {
  name = "Колдун";
  recieverName = "Колдуну";
  charmedName = "Колдуна";
  magic = true;
}

export { Infantryman, Cavalry, Sorcerer };
