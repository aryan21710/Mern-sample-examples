const fs = require('fs');
const emailData = require('./DATA/gtCandidateEmail');

const filteredEmailData = emailData.map(_ => _.email).join(' ');
console.log(`filteredEmailData ${filteredEmailData}`);

fs.appendFile('./js/DATA/parsedGtCandidateEmailAddresses.txt', filteredEmailData, 'utf8', (err) => {
	if (err) throw err;
	console.log(`NEW LIST OF PARSED EMAIL ADDRESSES WRITTEN TO THE FILE`);
});
console.log(`email Data is ${JSON.stringify(emailData,null,4)}`)
