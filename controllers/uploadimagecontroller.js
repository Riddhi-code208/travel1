const uploadimagemodel = require('../models/uploadimagemodel');
const mongoose = require('mongoose');
const { storage, upload } = require('../controllers/multermiddleware');
const fs = require('fs');
const path = require('path');
const express = require('express');
const app=require('../index');
module.exports = {
    uploadimage: (req, res) => {
        upload(req, res, err => {
            if (err) { console.log(err); }
            else {
                var obj = new uploadimagemodel({
                    name: req.body.name,
                    image: {
                        data: req.file.filename,
                        contentType: 'image/png'
                    }
                })
                obj.save()
                    .then(() => res.send("image uploaded successfully"))
                    .catch(err => res.send(err))
            }
        })
    },
    getuploadimage: (req, res, next) => {
        uploadimagemodel.find({},(err,image)=> {
            if (err) return next(err);
            else
            res.render('page', {
                image: image.toString('base64')
              })
        });
    }
}
