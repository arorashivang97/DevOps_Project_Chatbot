const mongoose = require('mongoose');
const Schema = mongoose.Schema;
ObjectId = mongoose.Schema.ObjectId;



const CustomerSchema = new Schema({
  username:String,
  password:String,
});

module.exports = Customer = mongoose.model('customer', CustomerSchema);