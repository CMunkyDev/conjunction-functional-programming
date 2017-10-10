// Return a list of numbers that the number is divisible by
const number = 12

function divisibleBy(num, current=2) {
  const divisible = num % current === 0 ? [current] : []

  if (current === num - 1) return divisible
  return divisible.concat(divisibleBy(num, current + 1))
}

console.log(divisibleBy(number))
