function animalFunc(sound) {
    this.sound = sound;
  }
  animalFunc.prototype.speak = function(phrase){
    var arrPhrase  = phrase.split(" ");
    const interleave = (arr, sou) => ([].concat(...arr.map(n => [n, sou]))).join(' ');
    console.log(interleave(arrPhrase, this.sound));
  }
  module.exports = animalFunc;