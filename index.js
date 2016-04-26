'use strict';

exports = module.exports = function rtd(roman) {
  roman = (roman || 'nulla').toLowerCase();

  // Return 0 if latin "nulla" is passed in.
  if (roman === 'nulla') {
    return 0;
  }

  // Convert each numeral to a base-10 numer:
  var numerals = roman.split('').map(function map(numeral) {
    return exports.romanMap[numeral] || 0;
  });

  // Use a numeral decoding scheme:
  return numerals.reduce(function decode(prev, cur, i, n) {
    var next = n[i + 1] || 0;
    return cur < next ? prev - cur : prev + cur;
  }, 0);
};

exports.romanMap = {
  i: 1,
  v: 5,
  x: 10,
  l: 50,
  c: 100,
  d: 500,
  m: 1000
};

['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M']
.forEach(function(cur) {
  console.log(cur, exports(cur));
});
