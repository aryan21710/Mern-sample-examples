const util = require("util");
const path = require("path");
const fs = require("fs");
const fsPromises = require("fs").promises;
const readDir = util.promisify(fs.readdir);
const fileStats = util.promisify(fs.stat);
const mkDir = util.promisify(fs.mkdir);
const myPath = path.join(__dirname, "../js");
const createNewDir = () => mkDir("tempDir");
const readTheDir = () => readDir(myPath);
const filesArray = [];

const copyFilesToNewDir = (filesArray) => {
  for (let i = 0; i <= filesArray.length - 1; i++) {
    const filename = filesArray[i].split("/")[filesArray[i].split("/").length - 1];
    fsPromises.copyFile(filesArray[i],`tempDir/${filename}`,fs.constants.COPYFILE_EXCL)
      .then(() => {
        console.log(`${filesArray[i]} COPIED`);
      }).catch((err) => console.log(`err ${err}`));
  }
};

Promise.resolve(createNewDir())
  .then(() => {
    return readTheDir();
  })
  .then((output) => {
    for (let i = 0; i <= output.length - 1; i++) {
      const fileAndDirName = output[i];
      const filePath=path.join(__dirname, `../js/${fileAndDirName}`)
      Promise.resolve(fileStats(filePath)).then((response) => {
          !response.isDirectory() && filesArray.push(filePath);
          output.length - 1 === i && copyFilesToNewDir(filesArray);
        })
        .catch((err) => console.log(`err ${err}`));
    }
  }).catch((err) => console.log(`err ${err}`));
