const mongoose = require('mongoose');
const Schema = mongoose.Schema;
ObjectId = mongoose.Schema.ObjectId;


const FormSchema = new Schema({
  purpose:String,
  filepath:String
});

module.exports = Form = mongoose.model('form', FormSchema);
