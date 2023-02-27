function speakFunc(phrase, sound){
    var arrPhrase  = phrase.split(" ");
    const interleave = (arr, sou) => ([].concat(...arr.map(n => [n, sou]))).join(' ');
    console.log(interleave(arrPhrase, sound));
  }
  module.exports = speakFunc;