const request = require('request');
const param = require('./param')
//request.post

request.post({
  url:param.telegramurl,
  form:{
    chat_id:param.chatid,
    text:'Hello'
  }
}, function(error, response, body){
  console.log(response);
});

//https://api.telegram.org/bot273793972:AAGcfnNtxJTaP9h7QdGor1mYKvk7T-DX-6g/sendMessage -d chat_id=116271844 -d text='Hello'
