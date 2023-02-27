module.exports = class Animal {
    constructor(sound) {
      this.sound = sound;
    }
    speak(phrase) {
        var arrPhrase  = phrase.split(" ");
        const interleave = (arr, sou) => ([].concat(...arr.map(n => [n, sou]))).join(' ');
        const res = interleave(arrPhrase,this.sound);
        console.log(res);
        return res;
    }
  }