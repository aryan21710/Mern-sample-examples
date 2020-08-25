const util = require("util");
const path = require("path");
const fs = require("fs");
const readDir = util.promisify(fs.readdir);
const fileStats = util.promisify(fs.stat);
const fileWrite = util.promisify(fs.writeFile);
const fileRead = util.promisify(fs.readFile);
const mkDir = util.promisify(fs.mkdir);
const myPath = path.join(__dirname, "../js");

const newfunc = async (filename) => {
  try {
    const fullFilename = path.join(__dirname, `../js/${filename}`);
    const fileStat = await fileStats(fullFilename);
    if (fileStat.isFile()) {
      const readTheFile = await fileRead(fullFilename);
      await fileWrite(`tempDir/${filename}`, readTheFile);
    }
  } catch (error1) {
    console.log(`error1 ${error1}`);
  }
};

const somefunc = async () => {
  try {
    await mkDir("tempDir");
    const readTheDir = await readDir(myPath);
    if (Array.isArray(readTheDir)) readTheDir.map(newfunc);
  } catch (error2) {
    console.log(`error2 ${error2}`);
  }
};

somefunc()
  .then((output) => {
    console.log(`ALL FILES MOVED TO THE NEW DIR`);
  })
  .catch((err) => console.log(`err ${err}`));
