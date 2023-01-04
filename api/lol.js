// Download the helper library from https://www.twilio.com/docs/node/install
// Set environment variables for your credentials
// Read more at http://twil.io/secure
const accountSid = "ACd9c69af863e10dc91660b0d892d0cf75";
const authToken = "8bce6d72157b6ed08dd10f9f80110225";
const client = require("twilio")(accountSid, authToken);

client.messages
  .create({ body: "lol", from: "+17402652106", to: "+393516171688" })
  .then(message => console.log(message.sid));
  