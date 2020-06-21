// BUG: value is being logged as 1, when it should be 2
let value = 1;
if (value === 1) {
  let value = 2;
}
console.log(value);
