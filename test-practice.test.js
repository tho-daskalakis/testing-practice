const practice = require('./test-practice');

test('capitalize string', () => {
  expect(practice.capitalizeString('mY strINg')).toBe('MY strINg');
});

test('reverse string', () => {
  expect(practice.reverseString('reversed?')).toBe('?desrever');
});
