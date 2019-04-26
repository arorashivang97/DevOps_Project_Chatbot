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
const path = require('path');
const winston = require('winston');
const time = () => (new Date()).toLocaleTimeString();
const fs = require('fs');
const env = process.env.NODE_ENV || 'development';
const logDir = 'log';

var id = 1



if (!fs.existsSync(logDir)){
  fs.mkdirSync(logDir)
}

const logger = new (winston.createLogger)({
  transports: [
  new (winston.transports.Console)({
    colorize: true,
    timestamp : time,
    level: 'info'
  }),

  new (winston.transports.File)({
    filename: `${logDir}/logs`,
    timestamp: time,
    level:env === 'development' ? 'debug' : 'info',
    
  })
  ]
});



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
  var tag='';
  // Checks if the message contains text
  if (received_message.text) {    
    // Create the payload for a basic text message, which
    // will be added to the body of our request to the Send API
    
    // const greeting = firstEntity(received_message.nlp, 'greetings');
    // if (greeting && greeting.confidence > 0.8) {


    id = id +1;
    logger.info({"index":{"_index":"Spe_Bank", "_type":"something", "_id":id}});
    logger.info({"method":"GET", "call_name":'', "text_entry":received_message.text, "sender_id":sender_psid, "timestamp":time})

    if(received_message.text == 'Hi all'){
      response = {
        "text": `Hi there! Please Select from the following options:
                 1) Login
                 2) Account details
                 3) Branch details
                 4) Card Info 
                 5) FAQS
                 6) Signout`
      }
      tag = 'Hello';
      id = id +1;
          logger.info({"index":{"_index":"Spe_Bank", "_type":"something", "_id":id}});
    logger.info({"method":"GET", "call_name":'', "text_entry":received_message.text, "sender_id":sender_psid, "timestamp":time})

    }
    else if(received_message.text == 1){
      response = {
        "attachment":{
          "type":"template",
          "payload":{
            "template_type":"button",
            "text":"Click on the button to Login!",
            "buttons":[
              {
                "type":"web_url",
                "url":"http://localhost:4999/login",
                "title":"URL Button",
                "webview_height_ratio": "full"
              }
            ]
          }
        }
      }


      tag = '1';
      id = id +1;
    logger.info({"index":{"_index":"Spe_Bank", "_type":"something", "_id":id}});
    logger.info({"method":"GET", "call_name":'', "text_entry":received_message.text, "sender_id":sender_psid, "timestamp":time})

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
        tag = '2';
        id = id +1;
    logger.info({"index":{"_index":"Spe_Bank", "_type":"something", "_id":id}});
    logger.info({"method":"GET", "call_name":'', "text_entry":received_message.text, "sender_id":sender_psid, "timestamp":time})
      }
      else{
        var ans = await database.account_details(username,password);
        console.log('/////////////////////////////////////////');
        // console.log(database.branch_details_given_name("branch1"));
        console.log(ans);
        console.log(JSON.stringify(ans[0]));
        var resp = 'Dear '+username+', Your account number '+ans[0].acc_no+' has a bank balance of Rs. '+ans[0].balance
        console.log('/////////////////////////////////////////');
        response = {
          //"text": JSON.stringify(ans[0]) 
          "text": resp
        }
        tag = '2';
        id = id +1;
    logger.info({"index":{"_index":"Spe_Bank", "_type":"something", "_id":id}});
    logger.info({"method":"GET", "call_name":'', "text_entry":received_message.text, "sender_id":sender_psid, "timestamp":time})
      }
    }
    else if(received_message.text == 3){
      var ans = await database.branch_details();
      console.log('/////////////////////////////////////////');
      console.log(ans);
      console.log(JSON.stringify(ans[0]));

      var resp = 'Here are the branch details:'+' 1)Name: '+ans[0].name+',located at:'+ans[0].location+',iifsc code:'+ans[0].iifsc+',Workings hours:'+ans[0].stime+'-'+ans[0].ftime+'- from Monday to Friday'
                                              +' 2)Name: '+ans[1].name+',located at:'+ans[1].location+',iifsc code:'+ans[1].iifsc+',Workings hours:'+ans[1].stime+'-'+ans[1].ftime+'- from Monday to Friday'
                                              +' 3)Name: '+ans[2].name+',located at:'+ans[2].location+',iifsc code:'+ans[2].iifsc+',Workings hours:'+ans[2].stime+'-'+ans[2].ftime+'- from Monday to Friday';


      console.log('/////////////////////////////////////////');
      response = {
        //"text": JSON.stringify(ans[0]) 
        "text": resp
      }

      tag = '3';
      id = id +1;
    logger.info({"index":{"_index":"Spe_Bank", "_type":"something", "_id":id}});
    logger.info({"method":"GET", "call_name":'', "text_entry":received_message.text, "sender_id":sender_psid, "timestamp":time})
    }
    // else if(received_message.text == 4){
    //   var ans = await database.branch_details_given_location('location1');
    //   console.log('/////////////////////////////////////////');
    //   console.log(ans);
    //   console.log(JSON.stringify(ans[0]));
    //   console.log('/////////////////////////////////////////');
    //   response = {
    //     "text": JSON.stringify(ans[0]) 
    //   }
    //   tag = '4';
    //   id = id +1;
    //   logger.info({"index":{"index":"Spe_Bank", "_id":id}, "level":'info',  "timemstamp":time});
    //   logger.info({"type":'api-call',"method":"GET", "call_name":tag, "text_entry":response, "sender_id":sender_psid})
    // }
    else if(received_message.text == 4){
      if(username=='' && password==''){
        response = {
          "text": 'Please Login first. Press 1 to login' 
        }
        tag = '5';
        id = id +1;
    logger.info({"index":{"_index":"Spe_Bank", "_type":"something", "_id":id}});
    logger.info({"method":"GET", "call_name":'', "text_entry":received_message.text, "sender_id":sender_psid, "timestamp":time})
      }
      else{
        var ans = await database.card_details(username,password);
        console.log(ans);
        console.log(JSON.stringify(ans[0]));

        var resp = 'Card details to your card is:'+'Card Type:'+ans[0].type+',Card Number: '+ans[0].card_no+',Status:Active'

        response = {
          //"text": JSON.stringify(ans[0]) 
          "text": resp
        }

        tag = '4';
        id = id +1;
    logger.info({"index":{"_index":"Spe_Bank", "_type":"something", "_id":id}});
    logger.info({"method":"GET", "call_name":'', "text_entry":received_message.text, "sender_id":sender_psid, "timestamp":time})
      }
      
    }
    // else if(received_message.text == 5){
    //   var ans = await database.forms();
    //   console.log(ans);
    //   console.log(JSON.stringify(ans[0]));
    //   response = {
    //     "text": JSON.stringify(ans)
    //   }


    //     tag = '5';
    //     id = id +1;
    //     logger.info({"index":{"index":"Spe_Bank", "_id":id}, "level":'info',  "timemstamp":time});
    //     logger.info({"type":'api-call',"method":"GET", "call_name":tag, "text_entry":response, "sender_id":sender_psid})
    // }
    else if(received_message.text == 5){
      var ans = await database.faqs();
      console.log(ans);
      console.log(JSON.stringify(ans[0]));

      var resp = 'Here are some of the Frequently Asked Questions (FAQs)'+
                  '1)'+ans[0].query+', Ans: '+ans[0].ans+
                  '2)'+ans[1].query+', Ans: '+ans[1].ans+
                  '3)'+ans[2].query+', Ans: '+ans[2].ans+
                  '4)'+ans[3].query+', Ans: '+ans[3].ans+
                  '5)'+ans[4].query+', Ans: '+ans[4].ans


      response = {
        //"text": JSON.stringify(ans) 
        "text": resp
      }

        tag = '5';
        id = id +1;
    logger.info({"index":{"_index":"Spe_Bank", "_type":"something", "_id":id}});
    logger.info({"method":"GET", "call_name":'', "text_entry":received_message.text, "sender_id":sender_psid, "timestamp":time})
    }
    else if(received_message.text == 6){
      username='';
      password='';
      response = {
        "text": `You have successfully signed out.
                 Dear Customer, The bot never CALL/SMS/Email asking you for your personal bank info or to deposit money into any bank a/c for promotional rewards. Beware of fraudsters and do not act on such messages. Please read data security policies on our website www.demobankchatbot.com`
        }

        tag = '6';
        id = id +1;
    logger.info({"index":{"_index":"Spe_Bank", "_type":"something", "_id":id}});
    logger.info({"method":"GET", "call_name":'', "text_entry":received_message.text, "sender_id":sender_psid, "timestamp":time})
    }
    else{
      response = {
      "text": `You sent the message: "${received_message.text}". Now send me an attachment!`
      }  

        tag = '8';
        id = id +1;
    logger.info({"index":{"_index":"Spe_Bank", "_type":"something", "_id":id}});
    logger.info({"method":"GET", "call_name":'', "text_entry":received_message.text, "sender_id":sender_psid, "timestamp":time})
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
  if(ans.length > 0){
    res.send('Login Successful');
    request.post("http://45d9af87.ngrok.io/LoginConfirm",{ json: { username: req.body.username, password: req.body.password } }, function(error, response, body) {
      console.log(body);
    });  
  }
  else{
    res.send('Login Unsuccessful');
  }
  
});



