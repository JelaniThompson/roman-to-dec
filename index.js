'use strict';

module.exports = exports = r => r.toLowerCase().split('')
.map(n => exports.numerals[n] || 0)
.reduce((p, c, i, n) => c < n[i + 1] ? p - c : p + c, 0);

exports.numerals = {
  i: 1,
  v: 5,
  x: 10,
  l: 50,
  c: 100,
  d: 500,
  m: 1000
};
