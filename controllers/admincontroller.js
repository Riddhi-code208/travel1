const Post = require('../models/postmodel');
const User = require('../models/usermodel');
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const { db } = require('../models/postmodel');
const { query } = require('express');

module.exports = {
    index: (req, res) => {
        res.send("welcome");
    },
    loginpost: (req, res) => {

        const query = { username: req.body.username }
        console.log(query)
        db.collection("users").find(query).toArray((err, result) => {
            if (result == 0) console.log("result not found", result);
            result.forEach(result => {
                const result1 = bcrypt.compareSync(req.body.password, result.password);
                if (result1) {
                    console.log('login successful', result.username, result.password);
                }
                else {
                    console.log("Bad request. Password don't match ");
                }
            })

        })
        res.end();
    },
    registerget: (req, res) => {
        db.collection("users").find().toArray((err, result) => {
            if (err) throw err;
            console.log(result);
            res.send(result);
        });
    },
    registerpost: (req, res) => {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            phone: req.body.phone,
            password: hash,
            role: req.body.role,
        });
        newUser.save()
            .then(res => {
                console.log("submited", res);
            }).catch(err => {
                console.log("not submited", err);
            });
        res.send("inserted");
    },

    postspost: (req, res) => {
        const newPost = new Post({
            title: req.body.title,
            description: req.body.description,
            status: req.body.status,
        });
        newPost.save()
            .then(res => {
                console.log("submited", res);
            }).catch(err => {
                console.log("not submited", err);
            });
        res.send("inserted");
    },
    postsget: (req, res) => {
        db.collection("posts").find().toArray((err, result) => {
            if (err) throw err;
            console.log(result);
            res.send(result);
        });
    },
}