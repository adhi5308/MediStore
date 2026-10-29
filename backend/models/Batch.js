const mongoose=require("mongoose");
const schema=new mongoose.Schema({medicine:{type:mongoose.Schema.Types.ObjectId,ref:"Medicine",required:true,index:true},batchNumber:{type:String,required:true,trim:true},quantity:{type:Number,required:true,min:0},purchasePrice:{type:Number,required:true,min:0},sellingPrice:{type:Number,required:true,min:0},expiryDate:{type:Date,required:true,index:true},supplier:{type:String,default:"",trim:true}},{timestamps:true});
schema.index({medicine:1,batchNumber:1},{unique:true});
module.exports=mongoose.model("Batch",schema);
