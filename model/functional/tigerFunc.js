const AnimalFunc = require('./animalFunc');
const AnimalSound = require('../animalSound');

function TigerFunc(speak) {
    this.animal = new AnimalFunc(AnimalSound.TIGER, speak);
    this.speak = (p) => this.animal.speak(p);
  }
  module.exports = TigerFunc;