const Animal = require('./animal');
const AnimalSound = require('./animalSound');

module.exports = class Lion extends Animal {
    constructor() {
      super(AnimalSound.LION);
    }
  }