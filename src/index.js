module.exports = function getZerosCount(number) {
  var count = 0;
 var devisor = 5;
  while(devisor <= number){
    count += Math.floor(number/devisor);
    devisor*=5;
  }
  return count;
}
