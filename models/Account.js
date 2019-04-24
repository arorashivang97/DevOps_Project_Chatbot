const mongoose = require('mongoose');
const Schema = mongoose.Schema;
ObjectId = mongoose.Schema.ObjectId;

const AccountSchema = new Schema({
  name:String,
  dob:String,
  aadhar:String,
  acc_no:String,
  balance:Number,
  user_id:ObjectId
});

module.exports = Account = mongoose.model('account', AccountSchema);