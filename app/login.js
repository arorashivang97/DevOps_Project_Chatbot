const
  express = require('express'),
  bodyParser = require('body-parser'),
  app = express().use(bodyParser.json()); 

var request = require("request");


// var database = require("./../database.js");

app.use(bodyParser.urlencoded({ extended: false }));

app.set('view engine', 'ejs');

app.set('views', __dirname + '/views');

app.listen(process.env.PORT || 4999, () => console.log('Login is listening'));

app.get('/login', function(req, res){ 
 	res.render('login');
});

app.post('/login', function(req, res) {
  console.log('You sent the username "' + req.body.username + '".');
  console.log('You sent the password "' + req.body.password + '".');
  // var ans = await database.users_exists(req.body.username, req.body.password);
  // res.redirect('https://7a45a4f4.ngrok.io/webhook');
  request.post("http://3d54cbf9.ngrok.io/LoginConfirm",{ json: { username: req.body.username, password: req.body.password } }, function(error, response, body) {
  	console.log(body);
  });
});
