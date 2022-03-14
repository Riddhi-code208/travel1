const mongoose=require('mongoose');
const Schema = mongoose.Schema;
const Postschema = new Schema({
   title :{
       type :String,
       require:true
   },
   description : {
    type :String,
    require:true
   },
   status:{
    type :String,
    default:'public'
   },
   createDate:{
       type:Date,
       default:Date.now()
   }
});
module.exports=mongoose.model('post',Postschema);