function animalFunc(sound, speak) {
    this.sound = sound;
    
    this.speak = (p) => speak(p ,this.sound);
  }
  module.exports = animalFunc;