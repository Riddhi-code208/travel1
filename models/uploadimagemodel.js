const mongoose=require('mongoose');
const Schema = mongoose.Schema;
const Imageschema = new Schema({
    name:{
        type:String,
        required:true
    },
    image:
    {
        data: Buffer,
        contentType: String
    }
});
module.exports = new mongoose.model('image', Imageschema);