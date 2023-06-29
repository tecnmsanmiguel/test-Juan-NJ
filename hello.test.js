const hello = require('./hello');

test('outputs the correct string', () => {
  expect(hello()).not.toBe("Hello world!");
});
