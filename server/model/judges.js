const mongoose=require("mongoose");

var schema= new mongoose.Schema({
 jno:{
 	type: String
 },
 jname:{
 	type: String
 },
 leaveFrom:{
 	type: String
 },
 leaveTill:{
 	type: String
 },
 nature:{
 	type: String
 }
})

const Judgesdb = mongoose.model('judgedb', schema);

module.exports = Judgesdb;