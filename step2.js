const fs = require("fs");
const step1 = require("./step1");
const axios = require("axios");
const process = require("process");

async function webCat(url) {
  try {
    let resp = await axios.get(url);
    console.log(resp.data);
  } catch (err) {
    console.log(`Error fetching ${url}: ${err}`);
    process.exit(1);
  }
}

let path = process.argv[2];

if (path.slice(0, 4) === "http") {
  webCat(path);
} else {
  step1.cat(path);
}

module.exports = {
  webCat: webCat,
};
