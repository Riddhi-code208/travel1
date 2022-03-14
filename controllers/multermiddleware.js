const multer=require('multer');
const Storage = multer.diskStorage({
    destination: 'uploads',
    filename: (req, file, cb) => {
        console.log(file.originalname);
        cb(null,Date.now()+ file.originalname )
    }
});
var upload = multer({
    storage: Storage 
   }).single('testimage')
module.exports={upload};