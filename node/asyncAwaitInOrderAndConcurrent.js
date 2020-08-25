/*
Make a GET request to a public endpoint to get a post object
List the content of a local directory and pick the file that ends with the .txt extension.
Read the content of this file and and append it to the body of the post obtained from step 1
Write the result to a file locally called final.txt
*/

const util = require("util");
const path = require("path");
const fs = require("fs");
const requestPromise = require("request-promise");
const readLocalDir = util.promisify(fs.readdir);
const fileRead = util.promisify(fs.readFile);
const fileWrite = util.promisify(fs.writeFile);
const myPath = path.join(__dirname, "../react-playground/src/styles");
const newPath = path.join(__dirname, "../js/testingDir");

console.log(`myPath ${myPath}`);

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjNkMGE0MTg4MjY2OTYxMmQxYzEyOTUiLCJlbWFpbCI6InNlZW1hc2FtMjExM0BnbWFpbC5jb20iLCJpYXQiOjE1OTc4Njc4NzZ9.BRzxGq8fxULM9B0lDUOWU2SRpmtMqjDZUfTqt031KuM";

const options = {
  url: "http://localhost:9001/case/getAllCases/5f3d0a41882669612d1c1295",
  userEmail: "seemasam2113@gmail.com",
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
};

const readLocalDirForJsFiles = async () => {
  try {
    const p1 = await readLocalDir(myPath);
    const listOfJsFiles = p1.filter((files) => files.match(/^[a-zA-Z]*\.css$/g));
    const contentsOfFile = [];
    for (let i = 0; i <= listOfJsFiles.length - 1; i++) {
      contentsOfFile.push(await fileRead(path.join(myPath, `${listOfJsFiles[i]}`)));
    }
    if (listOfJsFiles.length === contentsOfFile.length) {
      return contentsOfFile;
    }
  } catch (err) {
    console.log(`err in readLocalDirForJsFiles ${err}`);
  }
};

const readTheListOfCasesFromCaseEndPoint = async () => {
  try {
    return await requestPromise(options);
  } catch (err) {
    console.log(`err in readTheListOfCasesFromCaseEndPoint ${err}`);
  }
};

// OPTION 2
(async () => {
  try {
    const finalOutput = await Promise.all([
      readLocalDirForJsFiles(),
      readTheListOfCasesFromCaseEndPoint(),
    ]);
    const mergeOutput = finalOutput[0] + finalOutput[1];
    await fileWrite(`${newPath}/delme.txt`, mergeOutput);
  } catch (err) {
    console.log(`err in promise.all ${err}`);
  }
})();

// OPTION 1

// (async () => {
//   await readLocalDirForJsFiles();
//   await readTheListOfCasesFromCaseEndPoint();
//   await writeToFile();
// })();

