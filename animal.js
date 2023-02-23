module.exports = class Animal {
    constructor(sound) {
      this.sound = sound;
    }
    speak(phrase) {
        var arrPhrase  = phrase.split(" ");
        const interleave = (arr, sou) => [].concat(...arr.map(n => [n, sou]));
        console.log(interleave(arrPhrase,this.sound).join(' '));
    }
  }