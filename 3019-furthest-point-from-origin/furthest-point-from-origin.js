/**
 * @param {string} moves
 * @return {number}
 */
var furthestDistanceFromOrigin = function (a) {
  let cc1 = 0
  let cc2 = 0
  for (let c of a) {
    if (c === 'R') cc1++
    if (c === 'L') cc1--
    if (c === '_') cc2++
  }
  return Math.abs(cc1) + cc2
};