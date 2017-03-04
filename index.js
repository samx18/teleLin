const uscis = require('uscis');
const caseNumber = 'LIN1690517100';
uscis(caseNumber).then((status) => {
  if (status.title != 'Case Was Received'){
    console.log(status.title);
  }
});
