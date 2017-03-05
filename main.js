const uscis = require('uscis');
const request = require('request');
const param = require('./param');
const caseNumber = param.casenumber;


uscis(caseNumber).then((status) => {
  if (status.title != 'Case Was Received'){ //If status changes from Received
    console.log(status.title);
    request.post({ // send a post request to telegram bot
      url:param.telegramurl,
      form:{
        chat_id:param.chatid,
        text:status.title //send the new title of the case
      }
    }, function(error, response, body){
      console.log(error); // console log any errors
    });
  }
});
