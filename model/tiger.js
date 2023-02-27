const Animal = require('./animal');
const AnimalSound = require('./animalSound');

module.exports = class Tiger extends Animal {
    constructor() {
      super(AnimalSound.TIGER);
    }
  }
