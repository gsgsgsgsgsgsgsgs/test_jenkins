const calculator = require('./calculator')

test('string with a single number should result in the number itself', () => {
    expect(calculator.add('2,2')).toBe(4);
  });
