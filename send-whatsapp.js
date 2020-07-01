const accountSid = 'your acount sid';
const authToken = 'your auth token';
const number='the number you have to send message';
const client = require('twilio')(accountSid, authToken);

client.messages
      .create({
         from: 'whatsapp:your purchased twilio no.',
         body: 'otp for the verifiction is'+parseInt(Math.random()*100000),
         to: 'whatsapp:receiptent'
       })
      .then(message => console.log(message.sid));

//+14243222518      
