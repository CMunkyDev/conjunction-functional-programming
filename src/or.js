// Return a list of numbers that the number is divisible by
const number = 12
const divisibleBy = []

for (var i = 2; i < number; i++) {
  if (number % i === 0) {
    divisibleBy.push(i)
  }
}

console.log(divisibleBy)
