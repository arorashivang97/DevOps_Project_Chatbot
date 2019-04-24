const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


const Item = require('./models/Item');
const Customer = require('./models/Customer');
const Branch = require('./models/Branch');
const Account = require('./models/Account');
const Card = require('./models/Card');
const Form = require('./models/Form');
const Faq = require('./models/Faq');


const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: false }));

// Connect to MongoDB
mongoose
  .connect(
    'mongodb://mongo:27017/docker-node-mongo',
    { useNewUrlParser: true }
  )
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));


var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

 
db.once('open', function() {
    console.log("Connection Successful!");
    ObjectId = mongoose.Schema.ObjectId;
    // define Schema           
    

    var customer1 = new Customer({ username: 'cust1', password: 'password1'});    
    var customer2 = new Customer({ username: 'cust2', password: 'password2'});    
    var customer3 = new Customer({ username: 'cust3', password: 'password3'});    
    var customer4 = new Customer({ username: 'cust4', password: 'password4'});    
    var customer5 = new Customer({ username: 'cust5', password: 'password5'});    
 
    customer1.save(function (err, book) {
      if (err) return console.error(err);
      console.log(customer1.username + " saved to bookstore collection.");
    });
    
    customer2.save(function (err, book) {
      if (err) return console.error(err);
      console.log(customer2.username + " saved to bookstore collection.");
    });
    
    customer3.save(function (err, book) {
      if (err) return console.error(err);
      console.log(customer3.username + " saved to bookstore collection.");
    });
    
    customer4.save(function (err, book) {
      if (err) return console.error(err);
      console.log(customer4.username + " saved to bookstore collection.");
    });
    
    customer5.save(function (err, book) {
      if (err) return console.error(err);
      console.log(customer5.username + " saved to bookstore collection.");
    }); 
 
 
 
 
 
    var branch1 = new Branch({ name: 'branch1', location: 'location1',iifsc:'iifsc1',stime:'9:00',ftime:'16:00'});    
    var branch2 = new Branch({ name: 'branch2', location: 'location2',iifsc:'iifsc2',stime:'8:45',ftime:'15:45'});    
    var branch3 = new Branch({ name: 'branch3', location: 'location3',iifsc:'iifsc3',stime:'9:15',ftime:'16:15'});    
    var branch4 = new Branch({ name: 'branch4', location: 'location4',iifsc:'iifsc4',stime:'9:00',ftime:'16:00'});    
    var branch5 = new Branch({ name: 'branch5', location: 'location5',iifsc:'iifsc5',stime:'8:30',ftime:'15:30'});    
 
    branch1.save(function (err, book) {
      if (err) return console.error(err);
      console.log(branch1.name + " saved to bookstore collection.");
    });
    
    branch2.save(function (err, book) {
      if (err) return console.error(err);
      console.log(branch2.name + " saved to bookstore collection.");
    });
    
    branch3.save(function (err, book) {
      if (err) return console.error(err);
      console.log(branch3.name + " saved to bookstore collection.");
    });
    
    branch4.save(function (err, book) {
      if (err) return console.error(err);
      console.log(branch4.name + " saved to bookstore collection.");
    });
    
    branch5.save(function (err, book) {
      if (err) return console.error(err);
      console.log(branch5.name + " saved to bookstore collection.");
    }); 
 
 
 
  var c1 = customer1;
  var c2 = customer2;
  var c3 = customer3;
  var c4 = customer4;
  var c5 = customer5;
  
  console.log("c1 -----> "+c1._id);
  
   
    var account1 = new Account({ name: 'account1', dob: '21-4-2000',aadhar:'XYZABC111',acc_no:'2015001',balance:20000,user_id:c1._id});    
    var account2 = new Account({ name: 'account2', dob: '22-5-2001',aadhar:'XYZABC112',acc_no:'2015002',balance:30000,user_id:c2._id});    
    var account3 = new Account({ name: 'account3', dob: '23-6-2002',aadhar:'XYZABC113',acc_no:'2015003',balance:40000,user_id:c3._id});    
    var account4 = new Account({ name: 'account4', dob: '24-7-2003',aadhar:'XYZABC114',acc_no:'2015004',balance:50000,user_id:c4._id});    
    var account5 = new Account({ name: 'account5', dob: '25-8-2004',aadhar:'XYZABC115',acc_no:'2015005',balance:60000,user_id:c5._id});    
 
 
 
    account1.save(function (err, book) {
      if (err) return console.error(err);
      console.log(account1.name + " saved to bookstore collection.");
    });
    
    account2.save(function (err, book) {
      if (err) return console.error(err);
      console.log(account2.name + " saved to bookstore collection.");
    });
    
    account3.save(function (err, book) {
      if (err) return console.error(err);
      console.log(account3.name + " saved to bookstore collection.");
    });
    
    account4.save(function (err, book) {
      if (err) return console.error(err);
      console.log(account4.name + " saved to bookstore collection.");
    });
    
    account5.save(function (err, book) {
      if (err) return console.error(err);
      console.log(account5.name + " saved to bookstore collection.");
    });
 
 
 
 
     
    var card1 = new Card({ type: 'Debit', card_no: '12408881',status:true,user_id:c1._id});    
    var card2 = new Card({ type: 'Debit', card_no: '12408882',status:true,user_id:c2._id});    
    var card3 = new Card({ type: 'Credit', card_no:'12408883',status:false,user_id:c3._id});    
    var card4 = new Card({ type: 'Credit', card_no:'12408884',status:false,user_id:c4._id});    
    var card5 = new Card({ type: 'Debit', card_no: '12408885',status:true,user_id:c5._id});    
 
 
 
    card1.save(function (err, book) {
      if (err) return console.error(err);
      console.log(card1.type + " saved to bookstore collection.");
    });
    
    card2.save(function (err, book) {
      if (err) return console.error(err);
      console.log(card2.type + " saved to bookstore collection.");
    });
    
    card3.save(function (err, book) {
      if (err) return console.error(err);
      console.log(card3.type + " saved to bookstore collection.");
    });
    
    card4.save(function (err, book) {
      if (err) return console.error(err);
      console.log(card4.type + " saved to bookstore collection.");
    });
    
    card5.save(function (err, book) {
      if (err) return console.error(err);
      console.log(card5.type + " saved to bookstore collection.");
    });
 
 
    var form1 = new Form({ purpose: 'Account_Open', filepath: 'filepath1'});    
    var form2 = new Form({ purpose: 'Account_Close', filepath: 'filepath2'});    
    var form3 = new Form({ purpose: 'New_Card', filepath:'filepath3'});    
    var form4 = new Form({ purpose: 'Update_Card', filepath:'filepath4'});    
    var form5 = new Form({ purpose: 'Close_Card', filepath: 'filepath5'});    
 
 
 
    form1.save(function (err, book) {
      if (err) return console.error(err);
      console.log(form1.purpose + " saved to bookstore collection.");
    });
    
    form2.save(function (err, book) {
      if (err) return console.error(err);
      console.log(form2.purpose + " saved to bookstore collection.");
    });
    
    form3.save(function (err, book) {
      if (err) return console.error(err);
      console.log(form3.purpose + " saved to bookstore collection.");
    });
    
    form4.save(function (err, book) {
      if (err) return console.error(err);
      console.log(form4.purpose + " saved to bookstore collection.");
    });
    
    form5.save(function (err, book) {
      if (err) return console.error(err);
      console.log(form5.purpose + " saved to bookstore collection.");
    });
 

    var faq1 = new Faq({ query: 'faq1', ans: 'ans1'});    
    var faq2 = new Faq({ query: 'faq2', ans: 'ans2'});    
    var faq3 = new Faq({ query: 'faq3', ans:'ans3'});    
    var faq4 = new Faq({ query: 'faq4', ans:'ans4'});    
    var faq5 = new Faq({ query: 'faq5', ans: 'ans5'});    
 
 
 
    faq1.save(function (err, book) {
      if (err) return console.error(err);
      console.log(faq1.query + " saved to bookstore collection.");
    });
    
    faq2.save(function (err, book) {
      if (err) return console.error(err);
      console.log(faq2.query + " saved to bookstore collection.");
    });
    
    faq3.save(function (err, book) {
      if (err) return console.error(err);
      console.log(faq3.query + " saved to bookstore collection.");
    });
    
    faq4.save(function (err, book) {
      if (err) return console.error(err);
      console.log(faq4.query + " saved to bookstore collection.");
    });
    
    faq5.save(function (err, book) {
      if (err) return console.error(err);
      console.log(faq5.query + " saved to bookstore collection.");
    }); 

    //db.close();
    
}); 

//db.close();




//const Item = require('./models/Item');

app.get('/', (req, res) => {

  //res.send("hello world!")
  Item.find()
    .then(items => res.render('index', { items }))
    .catch(err => res.status(404).json({ msg: 'No items found' }));
});

app.post('/item/add', (req, res) => {
  const newItem = new Item({
    name: req.body.name
  });

  newItem.save().then(item => res.redirect('/'));
});


app.get('/testFind', function(req,res){
  Item.find(function (err,items){
    if(err) {
      console.log("in err ")
      return res.error(err);
    }
    console.log(items);
    res.json(items);
  })
})


app.get('/testFindCust', function(req,res){
  Customer.find(function (err,customers){
    if(err) {
      console.log("in err of customer")
      return res.error(err);
    }
    console.log(items);
    res.json(customers);
  })
})


///-------------------------------------------------------

//project related functions

//return details of the branch when the branch name is given
app.get('/branch_details_given_name/:name_id',async function(req, res){//userExistsInDB(username, password) {
    var name_inp = req.params.name_id;

  db.collection("branches").find({name:name_inp}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    res.json(result);
});
})


//return details of the branch when the branch location is given
app.get('/branch_details_given_location/:location',async function(req, res){//userExistsInDB(username, password) {
    var location_inp = req.params.location;

  db.collection("branches").find({location:location_inp}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    res.json(result);
});
})


//function to check if the user exists in db (use at time of login)
app.get('/users_exists/:username/:password',async function(req, res){//userExistsInDB(username, password) {
    var username_inp = req.params.username;
    var password_inp = req.params.password;

  db.collection("customers").find({username:username_inp,password:password_inp}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    res.json(result);
});
})


//function to get account details of the user
app.get('/account_details/:username/:password',async function(req, res){//userExistsInDB(username, password) {

      try {
        var username_inp = req.params.username;
        var password_inp = req.params.password;
        let collection = db.collection('customers');
        let user_details = (await collection.find(
            {
                username: username_inp,
                password: password_inp
            }).toArray());

        console.log("in try userCount "+user_details);

        console.log("in try userCount "+user_details[0]);

        console.log("in try userCount "+user_details[0]._id);
        //return userCount > 0;

        var id = user_details[0]._id;

        //res.json(user_details);


        collection = db.collection('accounts');
        let account_details = (await collection.find(
            {
                user_id : id
            }).toArray());


        res.json(account_details);



    } finally {
        //db.close();
        console.log("finally");
    }


})


//function to get card details of the user
app.get('/card_details/:username/:password',async function(req, res){//userExistsInDB(username, password) {

      try {
        var username_inp = req.params.username;
        var password_inp = req.params.password;
        let collection = db.collection('customers');
        let user_details = (await collection.find(
            {
                username: username_inp,
                password: password_inp
            }).toArray());

        console.log("in try userCount "+user_details);

        console.log("in try userCount "+user_details[0]);

        console.log("in try userCount "+user_details[0]._id);
        //return userCount > 0;

        var id = user_details[0]._id;

        //res.json(user_details);


        collection = db.collection('cards');
        let card_details = (await collection.find(
            {
                user_id : id
            }).toArray());


        res.json(card_details);



    } finally {
        //db.close();
        console.log("finally");
    }


})



//return all forms
app.get('/forms',async function(req, res){//userExistsInDB(username, password) {

  db.collection("forms").find({}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    res.json(result);
});
})


//return all faqs
app.get('/faqs',async function(req, res){//userExistsInDB(username, password) {

  db.collection("faqs").find({}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    res.json(result);
});
})

//----------------------------------------------------------------------------------



app.get('/allcustomers',function(req,res){

  db.collection("customers").find({}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    res.json(result);
    //db.close();
  });
})

//function to check if the user exists in db (use at time of login)
app.get('/checkUser',async function(username, password){//userExistsInDB(username, password) {
    try {
        let collection = db.collection('customers');
        let userCount = (await collection.find(
            {
                username: username,
                password: password
            }).limit(1).count());

        console.log("in try userCount "+userCount);
        return userCount > 0;
    } finally {
        //db.close();
        console.log("finally");
    }
})


//function to get branch details by location
app.get('/getBranchDetails_location',function(req,res){

  db.collection("branches").find({location:'location1'}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    res.json(result);
    //db.close();
  });
})

//function to get branch details by name
app.get('/getBranchDetails_name',async function(name){//userExistsInDB(username, password) {
    try {
        let collection = db.collection('branches');
        let details = (await collection.find(
            {
                name:'branch1'
            }));

        console.log("in try details ");
        console.log(details);
        return details;
    } finally {
        //db.close();
        console.log("finally");
    }
})




//hard coded
app.get('/branch_final',async function(req, res){//userExistsInDB(username, password) {
  db.collection("branches").find({name:'branch1'}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    res.json(result);
});
})




//function to get branch details by name
app.get('/getBranchDetails_actual',async function(name){//userExistsInDB(username, password) {
    try {
        let collection = db.collection('branches');
        var ans;
        let details = (await collection.find(
            {
                name:'branch1'
            }).toArray(function(err,result){
              if(err) throw err;
              ans.json(result);
            }));

        console.log("in try details ");
        console.log(ans);
        return ans;
    } finally {
        //db.close();
        console.log("finally");
    }
})








// async function userExistsInDB(username, password) {
//     let dbo = await MongoClient.connect('mongodb://mongo:27017/docker-node-mongo');
//     try {
//         let collection = dbo.collection('users');
//         let userCount = (await collection.find(
//             {
//                 username: username,
//                 password: password
//             }).limit(1).count());
//         return userCount > 0;
//     } finally {
//         db.close();
//     }
// }


// var answer =  userExistsInDB('cust1', 'password1');


// console.log("answer is "+answer);

const port = 3000;

app.listen(port, () => console.log('Server running...'));















/*
//test functions- not working

app.get('/getBranchDetails3',function(req,res){
  var dbo = mongoose.connection;
  dbo.on('error in 3', console.error.bind(console, 'connection error in 3:'));

  dbo.collection("branches").find({location:'location1'}).toArray(function(err, result) {
    if (err) throw err;


    console.log(result);
    res.json(result);
  });
    dbo.close();

})


app.get('/getBranchDetails4',function(req,res){
  var dbo = mongoose.connection;
  dbo.on('error in 4', console.error.bind(console, 'connection error in 4:'));

  dbo.collection("branches").find({location:'location1'}).toArray(function(err, result) {
    if (err) throw err;
    var x = {};

    res.json(x);

    console.log(result);
    res.json(result);
  });
    dbo.close();

})


app.get('/getBranchDetails_location_2',function(req,res){

  db.collection("branches").find({location:'location1'}).toArray(function(err, result) {
    if (err) throw err;
    var x = {};

    res.json(x);

    console.log(result);
    res.json(result);
    //db.close();
  });
})


*/