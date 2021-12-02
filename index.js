const TESTS = require('./tests');

/**
 * Returns an array that does not have any duplicates
 * and is sorted in the order of decreasing amount of duplicates.
 * If two numbers have the same amount of duplicates,
 * the number that appeared earlier in `source` array
 * is to be kept before.
 *
 * @param {Array<Number>} source
 *
 * @returns {Array<Number>}
 */
function compute(source) {
  var mp = new Map();

  for (let i = 0; i < source.length; i++) {
    if (mp.has(source[i])) mp.set(source[i], mp.get(source[i]) + 1);
    else mp.set(source[i], 1);
  }

  //console.log(mp);
  const map2 = [...mp.entries()].sort((a, b) => b[1] - a[1]);

  const ans = [];

  for (let i = 0; i < map2.length; i++) {
    ans.push(map2[i][0]);
  }
  return ans;
}

function runTests() {
  TESTS.forEach((test, index) => {
    const passed =
      JSON.stringify(compute(test.source)) === JSON.stringify(test.answer);

    console.log(`Test #${index + 1}:`, passed ? 'passed' : 'failed');
  });
}

runTests();
