var start = new process.hrtime();

function howManyHundreds(num) {
  var howMany = num / 100;
  return Math.floor(howMany)
}

console.log(howManyHundreds(1000), "=?", 10);
console.log(howManyHundreds(894), "=?", 8);
console.log(howManyHundreds(520), "=?", 5);
console.log(howManyHundreds(99), "=?", 0);
console.log(howManyHundreds(0), "=?", 0);

var end = new process.hrtime();
time = end[1] - start[1];
console.log(time + " ns excecution time.");