const fs = require("fs");
function writeFile(filename, data) {
  fs.writeFileSync(filename, data, "utf8");
}
function readFile(filename) {
  return fs.readFileSync(filename, "utf8");
}
module.exports = { writeFile, readFile };
