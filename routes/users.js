const express = require('express');
const router = express.Router();
const validateRegisteration = require("../validation/register");
const validateLogIn = require("../validation/login");
const bcrypt = require("bcrypt");
const isEmpty = require("../validation/isEmpty");
const User = require("../models/userModel");
const uri = require('../server/keys');
const jwt = require("jsonwebtoken");

router.get('/', (req, res) => {
    res.send({ text: "In User route" });
});
router.post('/register', (req, res) => {

    console.log(req.body);
    let errors = validateRegisteration(req.body);
    if (!isEmpty(errors)) {
        return res.status(400).json(errors);
    }
    User.findOne({ email: req.body.email })
        .then(user => {
            if (user) {
                errors.usererr = "User already exists";
                console.log("user exists");
                return res.status(400).json(errors);
            } else {
                const newUser = new User({
                    name: req.body.name,
                    email: req.body.email,
                    password: req.body.password

                })
                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(newUser.password, salt, (err, hash) => {
                        newUser.password = hash;
                        newUser.save().then((user) => { return res.json(user) }).catch(err => console.log(err))

                    });
                });
            }
        })
        .catch(err => console.log(err));


});
router.post('/login', (req, res) => {
    const errors = validateLogIn(req.body);
    if (!isEmpty(errors)) {
        return res.status(400).json(errors);
    }
    User.findOne({ email: req.body.email })
        .then(user => {
            if (!user) {
                errors.nouser = "No user with that email";
                return res.status(400).json(errors);
            } else {
                console.log(user);
                bcrypt.compare(req.body.password, user.password)
                    .then(match => {
                        if (!match) {
                            errors.invalidPassword = "Invalid Password";
                            return res.status(400).json(errors);
                        } else {
                            console.log(match);
                            const payload = { id: user.id, name: user.name, email: user.email };
                            jwt.sign(payload, uri.key, { algorithm: uri.algo, expiresIn: 36000 }, (err, token) => {
                                if (!err) {
                                    res.json({
                                        success: true,
                                        token: "Bearer" + token
                                    })
                                }
                            })
                        }
                    })
            }

        })
        .catch(err => console.log(err));
});

module.exports = router;