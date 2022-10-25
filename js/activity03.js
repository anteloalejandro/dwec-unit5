function isPrime(x) {
  // One isn't a prime number, neither are any numbers less than 2
  if ( x < 2 ) return false

  // Check if its prime
  let prime = true
  for (let i = 2; i <= x/2 && prime; i++) {
    if (x % i == 0) prime = false
  }

  return prime
}
