const assert = require('chai').assert;
const app = require('../app');

describe('App', function() {
  it('sayHello should return Hello', function() {
    assert.equal(app.sayHello(), 'Hello');
  })

  it('sayHello should return type string', function() {
    assert.typeOf(app.sayHello(), 'string');
  })

  it('addNumbers should be above 5', function() {
    let result = app.addNumbers(5, 5);
    assert.isAbove(result, 5);
  })
});