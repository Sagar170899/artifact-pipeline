const assert = require('assert');
const { add } = require('../src/index.js');
describe('Addition Function', () => {
    it('should add two numbers correctly and return the value 5', () => {
        assert.strictEqual(add(2, 3), 5);
    });
    
    it('should add negative numbers correctly', () => {
        assert.strictEqual(add(-1, -2), -3);
    });

    it('should add zero correctly', () => {
        assert.strictEqual(add(0, 0), 0);
    });
});