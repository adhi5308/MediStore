const mongoose=require("mongoose");
const schema=new mongoose.Schema({name:{type:String,required:true,trim:true},genericName:{type:String,default:"",trim:true},category:{type:String,required:true,trim:true},manufacturer:{type:String,default:"",trim:true},unit:{type:String,default:"tablet"},reorderLevel:{type:Number,default:10,min:0},description:{type:String,default:"",trim:true}},{timestamps:true});
module.exports=mongoose.model("Medicine",schema);
