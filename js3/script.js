// 1. Core module (fs)
const fs = require("fs");
fs.writeFile("homework.txt", "Zdravo od Node.js!", (err) => {
  if (err) {
    console.log("Greska pri zapisuvanje:", err);
  } else {
    console.log("Fajlot e uspesno zapisan!");
  }
});
// 2. Local module
const sayHello = require("./hello");
sayHello();

// 3. 
const chalk = require("chalk");

console.log(chalk.green("Ova e zelen tekst!"));
console.log(chalk.red.bold("Ova e crven i bold tekst!"));

