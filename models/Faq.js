const mongoose = require('mongoose');
const Schema = mongoose.Schema;
ObjectId = mongoose.Schema.ObjectId;



const FaqSchema = new Schema({
  query: String,
  ans:String
});

module.exports = Faq = mongoose.model('faq', FaqSchema);