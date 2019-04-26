const mongoose = require('mongoose');


const Item = require('./models/Item');
const Customer = require('./models/Customer');
const Branch = require('./models/Branch');
const Account = require('./models/Account');
const Card = require('./models/Card');
const Form = require('./models/Form');
const Faq = require('./models/Faq');





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
    var shabaz = new Customer({ username: 'shabaz', password: 'password'});    
    var shivang = new Customer({ username: 'shivang', password: 'password'});    
    var vaibhav = new Customer({ username: 'vaibhav', password: 'password'});    
 
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

    shabaz.save(function (err, book) {
      if (err) return console.error(err);
      console.log(shabaz.username + " saved to bookstore collection.");
    }); 
    shivang.save(function (err, book) {
      if (err) return console.error(err);
      console.log(shivang.username + " saved to bookstore collection.");
    }); 
    vaibhav.save(function (err, book) {
      if (err) return console.error(err);
      console.log(vaibhav.username + " saved to bookstore collection.");
    }); 
 
 
 
 
 
    var branch1 = new Branch({ name: 'branch1', location: 'IIITB, E-city1',iifsc:'iifsc1',stime:'9:00',ftime:'16:00'});    
    var branch2 = new Branch({ name: 'branch2', location: 'Hebbal',iifsc:'iifsc2',stime:'8:45',ftime:'15:45'});    
    var branch3 = new Branch({ name: 'branch3', location: 'Tech Mahindra, E-city2',iifsc:'iifsc3',stime:'9:15',ftime:'16:15'});    
  
 
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
    
 
 
 
  var c1 = customer1;
  var c2 = customer2;
  var c3 = customer3;
  var c4 = customer4;
  var c5 = customer5;
  var c6 = shabaz;
  var c7 = shivang;
  var c8 = vaibhav;
  
  console.log("c1 -----> "+c1._id);
  
   
    var account1 = new Account({ name: 'account1', dob: '21-4-2000',aadhar:'XYZABC111',acc_no:'2015001',balance:20000,user_id:c1._id});    
    var account2 = new Account({ name: 'account2', dob: '22-5-2001',aadhar:'XYZABC112',acc_no:'2015002',balance:30000,user_id:c2._id});    
    var account3 = new Account({ name: 'account3', dob: '23-6-2002',aadhar:'XYZABC113',acc_no:'2015003',balance:40000,user_id:c3._id});    
    var account4 = new Account({ name: 'account4', dob: '24-7-2003',aadhar:'XYZABC114',acc_no:'2015004',balance:50000,user_id:c4._id});    
    var account5 = new Account({ name: 'account5', dob: '25-8-2004',aadhar:'XYZABC115',acc_no:'2015005',balance:60000,user_id:c5._id});    
    var account6 = new Account({ name: 'account6', dob: '04-11-1996',aadhar:'XYZABC116',acc_no:'2015006',balance:60000,user_id:c6._id});    
    var account7 = new Account({ name: 'account7', dob: '26-11-1997',aadhar:'XYZABC117',acc_no:'2015007',balance:60000,user_id:c7._id});    
    var account8 = new Account({ name: 'account8', dob: '23-11-1996',aadhar:'XYZABC118',acc_no:'2015008',balance:60000,user_id:c8._id});    
 
 
 
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
     account6.save(function (err, book) {
      if (err) return console.error(err);
      console.log(account6.name + " saved to bookstore collection.");
    });
     account7.save(function (err, book) {
      if (err) return console.error(err);
      console.log(account7.name + " saved to bookstore collection.");
    });
     account8.save(function (err, book) {
      if (err) return console.error(err);
      console.log(account8.name + " saved to bookstore collection.");
    });
 
 
 
 
     
    var card1 = new Card({ type: 'Debit', card_no: '12408881',status:true,user_id:c1._id});    
    var card2 = new Card({ type: 'Debit', card_no: '12408882',status:true,user_id:c2._id});    
    var card3 = new Card({ type: 'Credit', card_no:'12408883',status:false,user_id:c3._id});    
    var card4 = new Card({ type: 'Credit', card_no:'12408884',status:false,user_id:c4._id});    
    var card5 = new Card({ type: 'Debit', card_no: '12408885',status:true,user_id:c5._id});    
    var card6 = new Card({ type: 'Debit', card_no: '12408886',status:true,user_id:c6._id});    
    var card7 = new Card({ type: 'Debit', card_no: '12408887',status:true,user_id:c7._id});    
    var card8 = new Card({ type: 'Debit', card_no: '12408888',status:true,user_id:c8._id});    
 
 
 
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

    card6.save(function (err, book) {
      if (err) return console.error(err);
      console.log(card6.type + " saved to bookstore collection.");
    });
    card7.save(function (err, book) {
      if (err) return console.error(err);
      console.log(card7.type + " saved to bookstore collection.");
    });
    card8.save(function (err, book) {
      if (err) return console.error(err);
      console.log(card8.type + " saved to bookstore collection.");
    });        
 
 
    var form1 = new Form({ purpose: 'Account_Open', filepath: 'filepath1'});    
    var form2 = new Form({ purpose: 'Account_Close', filepath: 'filepath2'});    
    var form3 = new Form({ purpose: 'New_Card', filepath:'./form/New_Card.pdf'});    
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
 

    var faq1 = new Faq({ query: '1) What is an EMI?', ans: 'EMI or Equated Monthly Instalment is a fixed amount paid by you to the bank on a specific date every month. The EMIs are fixed when you borrow money from the bank as a loan. EMIs are used to pay both interest and principal amount of a loan in a way that over a specific number of years, the loan amount is repaid to the bank alongwith interest. '});    
    var faq2 = new Faq({ query: '2) What are the number of properties I can own?', ans: 'You can own as many properties as you want.'});    
    var faq3 = new Faq({ query: '3) What makes of cars does our bank finance?', ans:'We finance all makes of new cars, and second hand cars not more than five years old. Thus, you are free to choose any vehicle you want to own.'});    
    var faq4 = new Faq({ query: '4) What Security do I have to furnish for availing the Car Loan?', ans:'A charge on the vehicle financed is noted with local Transport Authorities . Your spouses guarantee, if his/her income has been considered for fixing the loan amount, would also be required. Some other security may also be required in certain cases.'});    
    var faq5 = new Faq({ query: '5) What is EMI? How is it calculated?', ans: 'EMI stands for Equated Monthly Instalments. This instalment comprises both principal and interest components. Your EMI would be calculated depending on the tenor you choose, to repay your loan. The EMI would be higher if you choose to repay within a shorter period as against a longer-term loan. A shorter repayment period, however, reduces your interest cost over the term of the loan.'});    
 
 
 
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

//project related functions


//return details of the branch when the branch name is given
exports.branch_details_given_name = async function(name_id) {
  var name_inp = name_id;
  let collection = db.collection('branches');
  let branch_details = await collection.find({name:name_inp}).toArray();
  console.log(branch_details);
  return branch_details;
};



//return details of the branch when the branch location is given
exports.branch_details_given_location = async function(location){

  var location_inp = location;
  let collection = db.collection('branches');
  
  let branch_details = await collection.find({location:location_inp}).toArray();
  console.log(branch_details);
  return branch_details;
}




//function to check if the user exists in db (use at time of login)
exports.users_exists = async function(username,password){//userExistsInDB(username, password) {


    var username_inp = username;
    var password_inp = password;

    let collection = db.collection('customers');
  
  let user_details = await collection.find({username:username_inp,password:password_inp}).toArray();
  console.log(user_details);
  return user_details;
}


//function to get account details of the user
exports.account_details = async function(username,password){//',async function(req, res){//userExistsInDB(username, password) {

      try {
        var username_inp = username;
        var password_inp = password;
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


        return account_details;



    } finally {
        //db.close();
        console.log("finally");
    }
}


//function to get card details of the user
exports.card_details = async function(username,password){//userExistsInDB(username, password) {

      try {
        var username_inp = username;
        var password_inp = password;
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


        return card_details;



    } finally {
        //db.close();
        console.log("finally");
    }


}



// //return all forms
exports.forms = async function(){//userExistsInDB(username, password) {


  let collection = db.collection('forms');
  
  let form_details = await collection.find().toArray();
  console.log(form_details);
  return form_details;
}


// //return all faqs
exports.faqs = async function(){//userExistsInDB(username, password) {

  let collection = db.collection('faqs');
  
  let faq_details = await collection.find().toArray();
  console.log(faq_details);
  return faq_details;
}


//return details of the branch when the branch location is given
exports.branch_details = async function(){

  let collection = db.collection('branches');
  
  let branch_det = await collection.find().toArray();
  console.log(branch_det);
  return branch_det;
}
