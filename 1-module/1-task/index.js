function factorial(n) {
  let i = 1;
  while (n != 0) {
    i = i * n--;
  }
  return i;
  /*let i;
  for (i = 1; n != 0; ) {
    i = i * n--;
  }
  return i;*/
}
