const { urlencoded, response } = require('express');
const express = require('express');
const path = require('path');
const { port,host} = require('./config/configuration');
const app = express();

//configure postgres
const { Client } = require('pg');

const client = new Client({
    user: 'riddhi',
    host: 'localhost',
    database: 'travel',
    password: 'riddhi123',
    port: 5432,
});

client.connect(console.log("connected"));


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