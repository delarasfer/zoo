const inherits = require( 'inherits' );
const AnimalFunc = require('./animalFunc');
const AnimalSound = require('../animalSound');

inherits( TigerFunc, AnimalFunc );
function TigerFunc() {
  AnimalFunc.call(this,  AnimalSound.TIGER );
}
  module.exports = TigerFunc;