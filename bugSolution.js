function foo(a, b) {
  if (a === null || a === undefined || b === null || b === undefined) {
    return NaN; // Or throw an error: throw new Error('Arguments cannot be null or undefined');
  }
  return a + b;
}

console.log(foo(null, 1)); // Output: NaN
console.log(foo(1, null)); // Output: NaN
console.log(foo(1, 0));   // Output: 1
console.log(foo(0, 1));   // Output: 1
console.log(foo(undefined, 5)); // Output: NaN