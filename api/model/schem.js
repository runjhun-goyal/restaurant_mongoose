//for making table
var mongoose=require('mongoose');
var regis=new mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    name:String,
    email:String,
    pwd:String
})

module.exports=mongoose.model('regis',regis)