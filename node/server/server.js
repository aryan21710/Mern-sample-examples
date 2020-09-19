const express = require('express');
const path = require('path');


const app = express();
app.disable('x-powered-by')
const publicPath = path.join(__dirname);
const port = process.env.PORT || 5000;
// IMPORT ALL MIDDLEWARES

console.log('PUBLICPATH:-' + publicPath);


app.get('/', (req, res) => {
  res.send('\nHEY WELCOME TO / OF PLAYGROUND REPOSITORY\n');
});




app.listen(port, () => {
	console.log('SERVER LISTENING ON:-' + port);
});
