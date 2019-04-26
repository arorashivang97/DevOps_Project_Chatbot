
'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const path = require('path');
const winston = require('winston')
const time = () => (new Date()).toLocaleTimeString();
const fs = require('fs');
const env = process.env.NODE_ENV || 'development';
const logDir = 'log';
let app = express();


var http = require('http');
var Promise = require("bluebird");
var request_1 = Promise.promisifyAll(require("request"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
        extended: true
}));

var id = 1

//create the directory if it does not exist

if (!fs.existsSync(logDir)){
  fs.mkdirSync(logDir)
}

const logger = new (winston.Logger)({
  transports: [
  new (winston.transports.Console)({
    colorize: true,
    timestamp : time,
    level: 'info'
  }),

  new (winston.transports.File)({
    filename: `${logDir}/result.json`,
    timestamp: time,
    level:env === 'development' ? 'debug' : 'info',
    
  })
  ]
});

app.post('/log', function(req, res){

    id = id +1;
    logger.info({"index":{"index":"Spe_Bank", "_id":id}, "level":'info', 'message':"", "timemstamp":time})

  }

)

app.post('/logging', function(req, res){
 // console.log(req.body);
  //console.log(res)
  //console.log(JSON.stringify(res.body))
  console.log(req.body)
  var tag = req.body.call_name;
  console.log(tag)
  var method = req.body.method;
  var aiText = req.body.text_entry;
  var sender = req.body.sender_id;
  id = id + 1;
  logger.info({"type":'api-call', "call_name":tag, "method":method, "text_entry":aiText, "sender_id":sender })

})


// Set Express to listen out for HTTP requests


var server = app.listen(process.env.PORT || 3000, function () {
        console.log("Listening on port %s", server.address().port);
});