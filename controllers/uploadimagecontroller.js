const uploadimagemodel = require('../models/uploadimagemodel');
const mongoose = require('mongoose');
const {storage, upload}=require('../controllers/multermiddleware');
const fs=require('fs');
const path=require('path');
module.exports = {
    uploadimage: (req, res) => {
        upload(req,res,err=>{
        
        var obj = {
            img: {
                data: fs.readFileSync(path.join(__dirname + '/uploads/' + 
                req.filename)),
                contentType: 'image/png'
            }
        }
        uploadimagemodel.create(obj, (err, item) => {
            if (err) throw err;
            console.log("successfully uploaded");
        })
    })
        res.end();
    },
}