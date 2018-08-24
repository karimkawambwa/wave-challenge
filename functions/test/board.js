const assert = require('assert');

const board = require('../board');

describe('Board', function() {
  describe('winining horizontal input', function() {
    it('should return true since x is winning at top', function() {
      let result = board._won(['x','x','x',' ',' ',' ',' ',' ',' '], 'x');
      assert.equal(true, result);
    });
    it('should return true since x is winning at bottom', function() {
      let result = board._won([' ',' ',' ',' ',' ',' ','x','x','x'], 'x');
      assert.equal(true, result);
    });
    it('should return true since x is winning in the middle', function() {
      let result = board._won([' ',' ',' ','x','x','x',' ',' ',' '], 'x');
      assert.equal(true, result);
    });
  });
  describe('winining vertical input', function() {
    it('should return true since x is vertical at left', function() {
      let result = board._won(['x','x',' ','x',' ',' ','x',' ',' '], 'x');
      assert.equal(true, result);
    });
    it('should return true since x is winning at center', function() {
      let result = board._won([' ','x',' ',' ','x',' ',' ','x',' '], 'x');
      assert.equal(true, result);
    });
    it('should return true since x is winning in the right', function() {
      let result = board._won([' ',' ','x',' ','x','x',' ',' ','x'], 'x');
      assert.equal(true, result);
    });
  });
});