const mongoose=require("mongoose");
const schema=new mongoose.Schema({medicine:{type:mongoose.Schema.Types.ObjectId,ref:"Medicine",required:true},batch:{type:mongoose.Schema.Types.ObjectId,ref:"Batch",required:true},type:{type:String,enum:["received","sold","expired","damaged"],required:true},quantity:{type:Number,required:true,min:1},note:{type:String,default:""},occurredAt:{type:Date,default:Date.now}},{timestamps:true});
module.exports=mongoose.model("StockMovement",schema);
