var start = new process.hrtime();

function howManyHundreds(num) {
  var mod = num % 100;
  var howMany = (num - mod) / 100;
  return howMany
}

console.log(howManyHundreds(1000), "=?", 10);
console.log(howManyHundreds(894), "=?", 8);
console.log(howManyHundreds(520), "=?", 5);
console.log(howManyHundreds(99), "=?", 0);
console.log(howManyHundreds(0), "=?", 0);


var end = new process.hrtime();
time = end[1] - start[1];

# Displays execution time to compare it to Math.floor speed in "howmanyfloor.js":
console.log(time + " ns excecution time.");
