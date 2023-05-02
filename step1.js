// write a function cat that takes one argument,path, and returns the contents of the file with that path
const fs = require("fs");
const process = require("process");

function cat(path) {
  fs.readFile(path, "utf8", (err, data) => {
    if (err) {
      console.log("Error reading file");
      console.log(err);
      return;
    }
    console.log(data);
  });
}

module.exports = {
  cat: cat,
};

cat(process.argv[2]);
