const mongoose = require('mongoose');
const Schema = mongoose.Schema;
ObjectId = mongoose.Schema.ObjectId;


const CardSchema = new Schema({
  type:String,
  card_no:String,
  status:Boolean,
  user_id:ObjectId
});

module.exports = Card = mongoose.model('card', CardSchema);