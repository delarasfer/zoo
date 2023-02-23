const Animal = require('./animal');

module.exports = class Lion extends Animal {
    constructor() {
      super('roar');
    }
  }