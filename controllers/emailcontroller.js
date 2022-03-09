const User = require('../models/usermodel');
const mongoose = require('mongoose');
var nodemailer = require('nodemailer');
const { db } = require('../models/usermodel');
module.exports = {
    sendemail: (req, res) => {
        const query = { role: "admin" }
        const query1 = { role: "user", username: "umang" }
        const password = req.body.password;
        const subject = req.body.subject;
        const text = req.body.text;
        db.collection("users").find(query).toArray((err, res) => {
            db.collection("users").find(query1).toArray((err, result) => {
                result.forEach(result => {
                    console.log(result.email)
                    res.forEach(res => {
                        console.log(res.email, password)
                        var transporter = nodemailer.createTransport({
                            service: 'gmail',
                            secure: false,
                            requireTLS: false,
                            auth: {
                                user: res.email,
                                pass: password
                            }
                        });
                        var mailOptions = {
                            from: res.email,
                            to: result.email,
                            subject: subject,
                            text: text
                        };
                        transporter.sendMail(mailOptions, function (error, info) {
                            if (error) {
                                console.log(error);
                            } else {
                                console.log('Email sent: ' + info);
                            }
                        });
                    });
                });


            });
        })
        res.end();
    },
}