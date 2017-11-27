'use strict'

const Writable = require('stream').Writable;
const util = require('util');

module.exports = CountStream;

util.inherits(CountStream, Writable);

function nop() {}

function CountStream(matchText, options) {
  Writable.call(this, options);
  this.count = 0;
  this.matchText = new RegExp(matchText, 'ig');
}

CountStream.prototype._write = function(chunk, encoding, cb) {
  // console.log(chunk.toString());
  const matches = chunk.toString().match(this.matchText);
  
  if (matches) {
    this.count += matches.length;
  }

  cb = nop
}

CountStream.prototype.end = function() {
  this.emit('total', this.count)
}


