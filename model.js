const mongoose=require("mongoose");
const OrderSchema = new mongoose.Schema({
    Orders: {
         type: Array,required:true
     },
     total: {
         type: Number,required:true
        
     },
     Date:{type:String,default:Date.now()}
    })
   
 mongoose.model('orderset', OrderSchema);
 module.exports = mongoose.model('orderset');