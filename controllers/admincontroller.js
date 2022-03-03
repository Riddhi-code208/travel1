const Post = require('../models/postmodel');
const User = require('../models/usermodel');

module.exports = {
    index: (req, res) => {
        res.send("welcome");
    },
    loginget: (req, res) => {
        res.send("login page");
    },
    loginpost: (req, res) => {
        res.send("login successful");
    },
    registerget: (req, res) => {
        res.send("registration page");
    },
    registerpost: (req, res) => {
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            phone: req.body.phone,
            password: req.body.password,
            role: req.body.role,
        });
        newUser.save()
            .then(res => {
                console.log("submited", res);
            }).catch(err => {
                console.log("not submited", err);
            });
        res.end();
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
        res.end();
    },
    postsget: (req, res) => {
        res.send("post get successful");
    }
}