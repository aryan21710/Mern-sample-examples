const path = require("path");
const util = require("util");
const fs = require("fs");
const readLocalDir = util.promisify(fs.readdir);
const fileStat = util.promisify(fs.stat);


let commonPath =
  "/Users/aryansharma/Desktop/CODING/MyProjects/Nyaywebsite/frontend/public/documents/uploads/";

const fetchAllUploadedDocuments = async (userEmail) => {
  const myArray = [];

  try {
    const myPath = path.join(commonPath, `${userEmail}`);
    console.log(`myPath is ${myPath}`);
    const readDirStatus = await readLocalDir(myPath);
    console.log(`readDirStatus1 ${readDirStatus}\n`);
    for (let dir of readDirStatus) {
      console.log(`dir ${dir}`);
      const newPath = path.join(myPath, `/${dir}`);
      console.log(`newPath ${newPath}`);
      const readDirStatus = await readLocalDir(newPath);
      console.log(`readDirStatus2 ${readDirStatus}`);
      for (let dir of readDirStatus) {
        console.log(`dir ${dir}`);
        const newPath1 = path.join(newPath, `/${dir}`);
        console.log(`newPath1 ${newPath1}`);
        const readDirStatus = await readLocalDir(newPath1);
        console.log(`allFiles under ${dir}:- ${readDirStatus}\n`);
        readDirStatus.forEach((file) => myArray.push(`${newPath1}/${file}`));
      }
    }
  } catch (err) {
    console.log(`err is ${err}`);
  }
  return myArray;
};

(async () => {
  const userEmail = [
    "seemasam2113@gmail.com",
    "seemawowexp@gmail.com",
    "aryan21710@gmail.com",
  ];
  let finalOutput = [];
  let status = "";
  for (let email of userEmail) {
    const output = await fetchAllUploadedDocuments(email);
    finalOutput = [...finalOutput, ...output];
  }
  console.log(`finalOutput  ${JSON.stringify(finalOutput, null, 4)}\n\n`);

  for (let file of finalOutput) {
    try {
      await fileStat(file);
    } catch (err) {
      status = err;
    }
  }

  status.length === 0
    ? console.log(`ALL FILES PASSED ${finalOutput.length}`)
    : console.log(err);
})();
