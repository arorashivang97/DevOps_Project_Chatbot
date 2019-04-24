
/*const Schema = mongoose.Schema;


const BookSchema = new Schema({
  title:String,
  pages:Number
});

const AuthorSchema = new Schema({
  name:String,
  age:Number,
  books:[BookSchema]
});

const Author = mongoose.model('author',AuthorSchema);

module.exports = Author;*/


const mongoose = require('mongoose');
const Schema = mongoose.Schema;
ObjectId = mongoose.Schema.ObjectId;



const ItemSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Item = mongoose.model('item', ItemSchema);

const CustomerSchema = new Schema({
  username:String,
  password:String,
});

module.exports = Customer = mongoose.model('customer', CustomerSchema);


const BranchSchema = new Schema({
  name:String,
  location:String,
  iifsc:String,
  stime:String,
  ftime:String
});

module.exports = Branch = mongoose.model('branch', BranchSchema);


const AccountSchema = new Schema({
  name:String,
  dob:String,
  aadhar:String,
  acc_no:String,
  balance:Number,
  user_id:ObjectId
});

module.exports = Account = mongoose.model('account', AccountSchema);


const CardSchema = new Schema({
  type:String,
  card_no:String,
  status:Boolean,
  user_id:ObjectId
});

module.exports = Card = mongoose.model('card', CardSchema);


const FormSchema = new Schema({
  purpose:String,
  filepath:String
});

module.exports = Form = mongoose.model('form', FormSchema);


const FaqSchema = mongoose.Schema({
  query: String,
  ans:String
});

module.exports = Faq = mongoose.model('faq', FaqSchema);


module.exports = {
    User: User,
    Question: Question,
    Answer: Answer,
    Module: Module,
    Role: Role
};