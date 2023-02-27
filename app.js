const Lion = require('./model/lion');
const Tiger = require('./model/tiger');
const LionFunc = require('./model/functional/lionFunc');
const TigerFunc = require('./model/functional/tigerFunc');
const speakFunc = require('./service/speakFunc');

console.log('----------Object Oriented----------');
  const lion1 = new Lion();
  tiger1 = new Tiger();
  lion1.speak('I\'m a lion');
  tiger1.speak('Lions suck');
  console.log('------------Functional-------------');
  const lion2 = new LionFunc(speakFunc);
  lion2.speak('I\'m a lion');
  const tiger2 = new TigerFunc(speakFunc);
  tiger2.speak('Lions suck');
 