//require
const express = require('express');
const router = express.Router();
const http = require('http');
const cors = require('cors');
const mongoose = require("mongoose");
const uri = require("./uri");
const users = require("../routes/users");
const addToCart = require("../routes/addToCart");
const passport = require("passport");
//use
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/users", users);
app.use("/api/addToCart", addToCart);
const server = http.createServer(app);
//connecting mongodb

mongoose.connect(uri.uri).then(() => { console.log("connected mongodb"); }).catch(err => { console.log(err); });
//initialising and configuring passport
app.use(passport.initialize());
require("./passport")(passport);

//alowing access
router.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
//port:an endpoint where server and client interact/communicate
server.listen(process.env.PORT || 5000, () => {
    console.log(`listening to PORT ${5000}`);
});