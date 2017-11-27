
const http = require('http');

const CountStream = require('./countstream');

const countStream = new CountStream('book');

http.get('http://www.thefreedictionary.com/book', (res) => {
  res.pipe(countStream);
});

countStream.on('total', (data) => {
  console.log('Total matches:', data);
});
