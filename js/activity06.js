function fibonacci(n) {
  // Covers both base cases: F1 = 1 and F0 = 0
  if (n <= 1) return n
  // F x = F x-1 + F x-2
  return fibonacci(n-1)+fibonacci(n-2)
}
