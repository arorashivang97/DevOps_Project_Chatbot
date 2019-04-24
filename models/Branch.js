const mongoose = require('mongoose');
const Schema = mongoose.Schema;
ObjectId = mongoose.Schema.ObjectId;


const BranchSchema = new Schema({
  name:String,
  location:String,
  iifsc:String,
  stime:String,
  ftime:String
});

module.exports = Branch = mongoose.model('branch', BranchSchema);
