const add = require("./subtract");

module.exports.subtractTen =  function(num) {
  return subtract(num,10);
}

module.exports.subtractFive = function(num) {
  return subtract(num, 5);
}
