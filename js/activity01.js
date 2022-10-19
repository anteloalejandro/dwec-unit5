function even_or_odd(x) {
  return x%2==0 ? 'even' : 'odd'
}

for (let i = 0; i < 500; i++) {
  const rand = parseInt(Math.random()*10000+1);
  document.write(rand + " is " + even_or_odd(rand))
}