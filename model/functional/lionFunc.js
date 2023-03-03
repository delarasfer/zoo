const inherits = require( 'inherits' );
const AnimalFunc = require('./animalFunc');
const AnimalSound = require('../animalSound');

inherits( LionFunc, AnimalFunc );
function LionFunc() {
    AnimalFunc.call( this, AnimalSound.LION );
  }
  module.exports = LionFunc;