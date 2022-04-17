const nFactor = function(n) {
  //base case
  if (n === 0 || n === 1) {
    return 1;
  }
  else {
    return n * nFactor(n - 1)
  }
}

console.log(nFactor(0))
console.log(nFactor(1))
console.log(nFactor(2))
console.log(nFactor(3))
console.log(nFactor(10))
