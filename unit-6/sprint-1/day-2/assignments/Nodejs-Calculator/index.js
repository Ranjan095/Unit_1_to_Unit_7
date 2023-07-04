/** @format */

// index.js
const { add, sub, mult, divide, sin, cos, tan } = require("./app");
const crypto = require("crypto");
const operation = process.argv[2];
const num1 = +process.argv[3];
const num2 = +process.argv[4];

//  import the crypto module

//  get a commands using process.argv

// complete the  function

// console.log(crypto.randomBytes)

switch (operation) {
  case "add":
    {
      add(num1, num2);
    }
    break;
  case "mult":
    {
      mult(num1, num2);
    }
    break;
  case "sub":
    {
      sub(num1, num2);
    }
    break;
  case "divide":
    {
      divide(num1, num2);
    }
    break;
  case "sin":
    {
      sin(num1);
    }
    break;
  case "cos":
    {
      cos(num1);
    }
    break;
  case "tan":
    {
      tan(num1);
    }
    break;
  case "random":
    {
      if (!num1) {
        console.log("Provide length for random number generation.");
      } else {
        const x = crypto.randomBytes(num1);
        console.log(x.toString("binary"));
      }
    }
    break;
  default:
    console.log("Invalid operation");
}
