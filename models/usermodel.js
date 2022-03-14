const mongoose=require('mongoose');
const Schema = mongoose.Schema;
const Userschema = new Schema({
   username :{
       type :String,
       require:true
   },
   email : {
    type :String,
    require:true
   },
   phone:{
    type :Number,
    require:true
   },
   password:{
    type :String,
    require:true
   },
   role:{
    type :String,
    require:true
   },
});
module.exports=mongoose.model('user',Userschema);