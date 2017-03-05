const uscis = require('uscis');
const request = require('request');
const param = require('./param');
const caseNumber = param.casenumber;
uscis(caseNumber).then((status) => {
  if (status.title != 'Case Was Received'){
    console.log(status.title);
    request.post({
      url:param.telegramurl,
      form:{
        chat_id:param.chatid,
        text:status.title
      }
    }, function(error, response, body){
      console.log(response);
    });
  }
});
