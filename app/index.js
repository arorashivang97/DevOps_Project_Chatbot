'use strict';

// Chatbot app

// Imports dependencies and set up http server
const
  express = require('express'),
  bodyParser = require('body-parser'),
  app = express().use(bodyParser.json()); // creates express http server


var database = require("./../database.js");

var username='';
var password='';

// Sets server port and logs message on success
app.listen(process.env.PORT || 1337, () => console.log('webhook is listening'));

const PAGE_ACCESS_TOKEN = "EAAJDcmMFRPoBALmQEc9seyWdZCP9b5OgHro2UEM6tahUhe21b4HKSFSy7cWutaNWu63ZCLg8QbUgNd7xdkBptxzROXctvmD0fZCTCGeULf3OI9btWV0pJjS8dNspHjmPkoBS0D7o5fFENEERgGDeIv47ggBZANSeeAK3nfEonROve8cizgRm";

const request = require('request');


// Adds support for GET requests to our webhook
app.get('/webhook', (req, res) => {
  // Your verify token. Should be a random string.
  let VERIFY_TOKEN = "<YOUR_VERIFY_TOKEN>"
    
  // Parse the query params
  let mode = req.query['hub.mode'];
  let token = req.query['hub.verify_token'];
  let challenge = req.query['hub.challenge'];
    
  // Checks if a token and mode is in the query string of the request
  if (mode && token) {
  
    // Checks the mode and token sent is correct
    if (mode === 'subscribe' && token === VERIFY_TOKEN) {
      
      // Responds with the challenge token from the request
      console.log('WEBHOOK_VERIFIED');
      res.status(200).send(challenge);
    
    } else {
      // Responds with '403 Forbidden' if verify tokens do not match
      res.sendStatus(403);      
    }
  }
});

// Creates the endpoint for our webhook 
app.post('/webhook', (req, res) => {  

  // Parse the request body from the POST
  let body = req.body;

  // Check the webhook event is from a Page subscription
  if (body.object === 'page') {

    // Iterate over each entry - there may be multiple if batched
    body.entry.forEach(function(entry) {

      // Gets the body of the webhook event
      let webhook_event = entry.messaging[0];
      console.log(webhook_event);

      // Get the sender PSID
      let sender_psid = webhook_event.sender.id;
      // console.log(webhook_event.message.nlp.entities)
      console.log('Sender PSID: ' + sender_psid);

      // Check if the event is a message or postback and
      // pass the event to the appropriate handler function
      if (webhook_event.message) {
        handleMessage(sender_psid, webhook_event.message);        
      } else if (webhook_event.postback) {
        handlePostback(sender_psid, webhook_event.postback);
      }

    });

    // Return a '200 OK' response to all events
    res.status(200).send('EVENT_RECEIVED');

  } else {
    // Return a '404 Not Found' if event is not from a page subscription
    res.sendStatus(404);
  }

});

app.post('/LoginConfirm', (req, res) => {
  console.log('lalal');
  console.log(req.body);
  username = req.body.username;
  password = req.body.password;
  res.status(200).send('Login_Successful');
});

// function firstEntity(nlp, name) {
//   return nlp && nlp.entities && nlp.entities[name] && nlp.entities[name][0];
// }

// Handles messages events
async function handleMessage(sender_psid, received_message) {
  let response;
  var user='';
  var pwd='';
  // Checks if the message contains text
  if (received_message.text) {    
    // Create the payload for a basic text message, which
    // will be added to the body of our request to the Send API
    
    // const greeting = firstEntity(received_message.nlp, 'greetings');
    // if (greeting && greeting.confidence > 0.8) {
    if(received_message.text == 'Hello'){
      response = {
        "text": `Hi there! Please Select from the following options:
                 1) Login
                 2) Account details
                 3) Branch details from name
                 4) Branch details from location
                 5) Card Info 
                 6) Forms
                 7) FAQS
                 8) Signout`
      }
    }
    else if(received_message.text == 1){
      response = {
        "attachment":{
          "type":"template",
          "payload":{
            "template_type":"button",
            "text":"Try the URL button!",
            "buttons":[
              {
                "type":"web_url",
                "url":"http://c885ef81.ngrok.io/login",
                "title":"URL Button",
                "webview_height_ratio": "full"
              }
            ]
          }
        }
      }
      // response = {
      //   "attachment": {
      //     "type": "template",
      //     "payload": {
      //       "template_type": "generic",
      //       "elements": [{
      //         "title": "Please click on the below button",
      //         "buttons": [
      //           {
      //             "type": "postback",
      //             "title": "Login",
      //             "payload": "yes",
      //           }
      //         ],
      //       }]
      //     }
      //   }
      // }
    }
    else if(received_message.text == 2){
      if(username=='' && password==''){
        response = {
          "text": 'Please Login first. Press 1 to login' 
        }
      }
      else{
        var ans = await database.account_details(username,password);
        console.log('/////////////////////////////////////////');
        // console.log(database.branch_details_given_name("branch1"));
        console.log(ans);
        console.log(JSON.stringify(ans[0]));
        console.log('/////////////////////////////////////////');
        response = {
          "text": JSON.stringify(ans[0]) 
        }
      }
    }
    else if(received_message.text == 3){
      var ans = await database.branch_details_given_name('branch1');
      console.log('/////////////////////////////////////////');
      console.log(ans);
      console.log(JSON.stringify(ans[0]));
      console.log('/////////////////////////////////////////');
      response = {
        "text": JSON.stringify(ans[0]) 
      }
    }
    else if(received_message.text == 4){
      var ans = await database.branch_details_given_location('location1');
      console.log('/////////////////////////////////////////');
      console.log(ans);
      console.log(JSON.stringify(ans[0]));
      console.log('/////////////////////////////////////////');
      response = {
        "text": JSON.stringify(ans[0]) 
      }
    }
    else if(received_message.text == 5){
      if(username=='' && password==''){
        response = {
          "text": 'Please Login first. Press 1 to login' 
        }
      }
      else{
        var ans = await database.card_details(username,password);
        console.log(ans);
        console.log(JSON.stringify(ans[0]));
        response = {
          "text": JSON.stringify(ans[0]) 
        }  
      }
      
    }
    else if(received_message.text == 6){
      var ans = await database.forms();
      console.log(ans);
      console.log(JSON.stringify(ans[0]));
      response = {
        "text": JSON.stringify(ans)
      }
    }
    else if(received_message.text == 7){
      var ans = await database.faqs();
      console.log(ans);
      console.log(JSON.stringify(ans[0]));
      response = {
        "text": JSON.stringify(ans) 
      }
    }
    else if(received_message.text == 8){
      username='';
      password='';
      response = {
        "text": 'You have successfully signed out' 
      }
    }
    else{
      response = {
      "text": `You sent the message: "${received_message.text}". Now send me an attachment!`
      }  
    }
    
  } else if (received_message.attachments) {
    // Get the URL of the message attachment
    let attachment_url = received_message.attachments[0].payload.url;
    response = {
      "attachment": {
        "type": "template",
        "payload": {
          "template_type": "generic",
          "elements": [{
            "title": "Is this the right picture?",
            "subtitle": "Tap a button to answer.",
            "image_url": attachment_url,
            "buttons": [
              {
                "type": "postback",
                "title": "Yes!",
                "payload": "yes",
              },
              {
                "type": "postback",
                "title": "No!",
                "payload": "no",
              }
            ],
          }]
        }
      }
    }
  } 
  
  // Send the response message
  callSendAPI(sender_psid, response);    
}

// Handles messaging_postbacks events
function handlePostback(sender_psid, received_postback) {
  let response;
  
  // Get the payload for the postback
  let payload = received_postback.payload;

  // Set the response based on the postback payload
  if (payload === 'yes') {
    response = { "text": "Thanks!" }
  } else if (payload === 'no') {
    response = { "text": "Oops, try sending another image." }
  }
  // Send the message to acknowledge the postback
  callSendAPI(sender_psid, response);
}

// Sends response messages via the Send API
function callSendAPI(sender_psid, response) {
	// Construct the message body
	let request_body = {
		"recipient": {
		  "id": sender_psid
    },
		"message": response
	}
	// Send the HTTP request to the Messenger Platform
	request({
		"uri": "https://graph.facebook.com/v2.6/me/messages",
		"qs": { "access_token": PAGE_ACCESS_TOKEN },
		"method": "POST",
		"json": request_body
	}, (err, res, body) => {
	if (!err) {
		console.log('message sent!')
	} else {
		console.error("Unable to send message:" + err);
	}
	}); 
}


// Login page
// var app2 = express();
// app2.set('view engine', 'ejs');

// app2.listen(process.env.PORT || 4999, () => console.log('Login is listening'));

// app2.get('/', function(req, res){ 
//   res.render('login',{user: "Great User",title:"homepage"});
// });

// const
//   express = require('express'),
//   bodyParser = require('body-parser'),
//   app2 = express().use(bodyParser.json()); 

// app2.use(bodyParser.urlencoded({ extended: false }));

// app2.set('view engine', 'ejs');

// app2.set('views', __dirname + '/views');

// app2.listen(process.env.PORT || 4999, () => console.log('Login is listening'));

// app2.get('/login', function(req, res){ 
//   res.render('login');
// });

// app2.post('/login', function(req, res) {
//   console.log('You sent the username "' + req.body.username + '".');
//   console.log('You sent the password "' + req.body.password + '".');
// });

const
  // express = require('express'),
  // bodyParser = require('body-parser'),
  app2 = express().use(bodyParser.json()); 

// var request = require("request");


// var database = require("./../database.js");

app2.use(bodyParser.urlencoded({ extended: false }));

app2.set('view engine', 'ejs');

app2.set('views', __dirname + '/views');

app2.listen(process.env.PORT || 4999, () => console.log('Login is listening'));


app2.get('/login', function(req, res){ 
  res.render('login');
});

app2.post('/login', async function(req, res) {
  console.log('You sent the username "' + req.body.username + '".');
  console.log('You sent the password "' + req.body.password + '".');
  var ans = await database.users_exists(req.body.username, req.body.password);
  // console.log(ans.length > 0);
  if(ans.length > 0){
    res.send('Login Successful');
    request.post("http://773bd199.ngrok.io/LoginConfirm",{ json: { username: req.body.username, password: req.body.password } }, function(error, response, body) {
      console.log(body);
    });  
  }
  else{
    res.send('Login Unsuccessful');
  }
  
});