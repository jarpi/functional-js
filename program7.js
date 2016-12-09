function duckCount() {
  // SOLUTION GOES HERE
  var args = Array.prototype.slice.call(arguments, 0);
  return (arguments[0] ? (0 + Object.prototype.hasOwnProperty.call(arguments[0], 'quack') + Function.prototype.call.apply(duckCount, args)) : 0);
  }


  module.exports = duckCount;

