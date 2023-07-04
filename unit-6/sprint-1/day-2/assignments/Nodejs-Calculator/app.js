/** @format */

const add = (a, b) => {
  console.log(a + b);
};
const sub = (a, b) => {
  console.log(a - b);
};
const mult = (num1, num2) => {
  console.log(num1 * num2);
};
const divide = (a, b) => {
  console.log(a / b);
};
const sin = (x) => {
  console.log(Math.sin(x));
};
const cos = (x) => {
  console.log(Math.cos(x));
};
const tan = (x) => {
  console.log(Math.tan(x));
};
module.exports = { add, sub, mult, divide, sin, cos, tan };
