const assert = require('assert');

const CountStream = require('./countstream');
const fs = require('fs');

const countStream = new CountStream('book');

let passed = 0;

countStream.on('total', (count) => {
  assert.equal(count, 4);
  passed++;
});

fs.createReadStream('./test.txt').pipe(countStream);

process.on('exit', () => {
  console.log('Assertoins passed:', passed);
});
