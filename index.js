'use strict';

exports = module.exports = function rtd(roman) {
  if (!roman || roman === 'nulla') {
    return 0;
  }

  return roman.toLowerCase().split('').map(function map(numeral) {
    return exports.numerals[numeral] || 0;
  }).reduce(function decode(prev, cur, i, n) {
    var next = n[i + 1] || 0;
    return cur < next ? prev - cur : prev + cur;
  }, 0);
};

exports.numerals = {
  i: 1,
  v: 5,
  x: 10,
  l: 50,
  c: 100,
  d: 500,
  m: 1000
};
