const { urlencoded, response } = require('express');
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const { port, mongodburl,host} = require('./config/configuration');
const app = express();

//configure mongoose 
// mongoose.connect(mongodburl, { useNewUrlParser: true })
//     .then(res => {
//         console.log("database connected",mongodburl);
//     }).catch(err => {
//         console.log("database disconnected", err);
//     });


//configure middleware
app.use(express.json());
app.use(urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'upload')));

//configure views engine
app.set('view engine', 'ejs')

//routes
const adminroutes = require('./routes/adminroutes');
const userroutes = require('./routes/userroutes');
app.use("/", adminroutes);
app.use("/user", userroutes);

//server listening
app.listen(port,host, () => {
    console.log('running server at', port);
});

module.exports=app;