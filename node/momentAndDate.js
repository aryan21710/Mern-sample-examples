const moment=require('moment');

const todaysDate=new Date();
const formatedDate=moment(todaysDate).format('MM/DD/YYYY');

console.log(`formatedDate  ${formatedDate}`)