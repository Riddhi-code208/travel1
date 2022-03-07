const express = require('express');
const admincontroller = require('../controllers/admincontroller');
const routes = express.Router();
const passport=require('passport');

routes.route('/')
    .get(admincontroller.index);

routes.route('/login')
    .get(admincontroller.loginget)
    .post(admincontroller.loginpost, passport.authenticate('local', { failureRedirect: '/login', failureFlash: true }));

routes.route('/register')
    .get(admincontroller.registerget)
    .post(admincontroller.registerpost);

routes.route('/posts')
    .get(admincontroller.postsget)
    .post(admincontroller.postspost);

module.exports = routes;