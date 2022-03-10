const express = require('express');
const admincontroller = require('../controllers/admincontroller');
const emailcontroller = require('../controllers/emailcontroller');
const uploadimagecontroller = require('../controllers/uploadimagecontroller');
const routes = express.Router();

routes.route('/')
    .get(admincontroller.index);

routes.route('/login')
    .post(admincontroller.loginpost);

routes.route('/register')
    .get(admincontroller.registerget)
    .post(admincontroller.registerpost);

routes.route('/posts')
    .get(admincontroller.postsget)
    .post(admincontroller.postspost);
routes.route('/email')
    .post(emailcontroller.sendemail);
routes.route('/uploadimage')
.get(uploadimagecontroller.getuploadimage)
    .post(uploadimagecontroller.uploadimage);
module.exports = routes;