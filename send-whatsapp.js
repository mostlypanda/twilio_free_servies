const accountSid = 'AC12501fb836448592d2573cb762a5e940';
const authToken = '561af201cc2d4fd01ffaa7b32c2d6464';
const number='9358668593';
const client = require('twilio')(accountSid, authToken);

client.messages
      .create({
         from: 'whatsapp:+14155238886',
         body: 'otp for the verifiction is'+parseInt(Math.random()*100000),
         to: 'whatsapp:+919997257010'
       })
      .then(message => console.log(message.sid));

//+14243222518      