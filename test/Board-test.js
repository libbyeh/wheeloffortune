const chai = require('chai');
const expect = chai.expect;
const Board = require('../board.js');
const spies = require('chai-spies');
chai.use(spies);

global.domUpdates = require('../domUpdates.js');
chai.spy.on(global.domUpdates, [], () => true);

describe ('Board', function() {
  
  it('should return true', function() {
    expect(true).to.equal(true);
  })


});