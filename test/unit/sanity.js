const test = require('tape');
const helpers = require('../helpers/createDanceAPI');

test('sanity', async t => {
  const nativeAPI = await helpers.createDanceAPI();
  nativeAPI.play({
    bpm: 120,
  });

  // TODO: more tests!
  t.end();

  nativeAPI.reset();
});
