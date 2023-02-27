const AnimalFunc = require('./animalFunc');
const AnimalSound = require('../animalSound');

function LionFunc(speak) {
    this.animal = new AnimalFunc(AnimalSound.LION, speak);
    this.speak = (p) => this.animal.speak(p);
  }
  module.exports = LionFunc;