const mongoose=require('mongoose');
const Schema = mongoose.Schema;
const Imageschema = new Schema({
    img:
    {
        data: Buffer,
        contentType: String
    }
});
module.exports = new mongoose.model('image', Imageschema);