function tribonacci(n) {
  // Covers base case T0 = 0.
  if (n == 0) return 0
  // Covers these base cases: T1 = 1 and T2 = 1.
  if (n == 1 || n == 2) return 1

  // T x = T x-1 + T x-2 + T x-3
  return tribonacci(n-1)+tribonacci(n-2)+tribonacci(n-3)
}
