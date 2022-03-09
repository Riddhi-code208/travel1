const multer=require('multer');
var Storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads')
    },
    filename: (req, file, cb) => {
        console.log(file.originalname);
        cb(null, file.originalname + Date.now())
    }
});
var upload = multer({
    storage: Storage 
   }).array('image', 3);
module.exports={upload};