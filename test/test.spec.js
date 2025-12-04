const assert = require('assert');
const { sum } = require('../src/index');

describe('sum', () => {
  it('adds numbers', () => {
    assert.strictEqual(sum(2,3), 5);
  });
});
