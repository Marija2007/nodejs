// 1. Local module for file write и read
const fileModule = require("./fileModule");
fileModule.writeFile("homework.txt", "Zdravo od Node.js!");
console.log(fileModule.readFile("homework.txt"));

// 2. Append 
const fs = require("fs");
fs.appendFile("homework.txt", "\nDodadeno so append!", (err) => {
  if (err) {
    console.log("Greska:", err);
  } else {
    console.log("Nov tekst e dodaden!");
    const data = fs.readFileSync("homework.txt", "utf8");
    console.log("Sodrzina sega:\n", data);
  }
}); 

// 3. Read
fs.appendFile("homework.txt", "\nUste eden red!", (err) => {
  if (err) {
    console.log("Greska:", err);
  } else {
    console.log("Uste eden red e dodaden!");
    const data = fs.readFileSync("homework.txt", "utf8");
    console.log("Sodrzina sega:\n", data);
  }
});

// 4.  async/await with try/catch
const fsp = require("fs").promises;
async function run() {
  try {
    await fsp.appendFile("homework.txt", "\nAsync append!");
    const data = await fsp.readFile("homework.txt", "utf8");
    console.log("Sodrzina po async append:\n", data);
  } catch (err) {
    console.error("Se sluci greska:", err);
  }
}

