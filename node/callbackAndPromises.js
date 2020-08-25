const request = require("request");
const requestPromise = require("request-promise");

const fs = require("fs");
const path = require("path");

// ASYNC CALLBACKs IN-ORDER :- TASKS NOT PERFORMED CONCURRENTLY (SIMULTANEOUSLY) BUT ONE AFTER ANOTHER.

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

const myPath = path.join(__dirname, "../js/testingDir/delmeUsingCallback.txt");
const myPathPromise = path.join(__dirname, "../js/testingDir/delmeUsingPromise.txt");

const writeToMyFile = (err) => {
  if (err) throw new Error(err);
  console.log(`write To FIle Status USING CALLBACKS true`);
  fs.appendFile(myPath, "DATA TO BE APPENDED USING CALLBACK", appendDataToFile);
};

const appendDataToFile = (err) => {
  if (err) throw new Error(err);
  console.log(`append To FIle Status USING CALLBACKS true`);
};

const writeTheContentsToTheFile = (err, response) => {
  if (err) throw new Error(err);
  //   console.log(`response ${JSON.parse(JSON.stringify(response.body))}`);
  if (response.statusCode === 400 || response.statusCode === 401)
    return response.error;
  // WE NEVER CALL THE writeToMyFile FUNCTION. (writeToMyFile() is wrong. SHOULD BE writeToMyFile) OTHERWISE IT WILL EXECUTE IMMEDIATLEY WITHOUT WAITING
  // FOR WRITING THE DATA WHICH IS response.body TO myPath file.
  fs.writeFile(myPath, response.body, writeToMyFile);
};

// OPTION USING CALLBACK IS BELOW
request(options, writeTheContentsToTheFile);

// ABOVE CODE CAN BE RE-WRITTEN USING PROMISES ALSO INSTEAD OF CALLBACKS.

const writeTheContentsToFileUsingPromise = (data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(myPathPromise, data, (err) => {
      if (err) reject(new Error(err));
      resolve(true);
    });
  });
};

const appendTheContentsToFileUsingPromise = (dataToBeAppended) => {
  return new Promise((res, rej) => {
    fs.appendFile(myPathPromise, dataToBeAppended, (err) => {
      if (err) rej(new Error(err));
      res(true);
    });
  });
};

// CALLING PROMISES IN ORDER 

requestPromise(options)
  .then((response) => {
    return writeTheContentsToFileUsingPromise(response);
  })
  .then((output) => {
    console.log(`write To FIle Status USING PROMISE ${output}`);
    return appendTheContentsToFileUsingPromise(
      "DATA TO BE APPENDED USING PROMISE"
    );
  })
  .then((output) => {
    console.log(`append To FIle Status USING PROMISE:- ${output}`);
  })
  .catch((err) => {
    console.log(`err ${err}`);
  });



