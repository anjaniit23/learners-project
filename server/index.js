//require
const express = require('express');
const router = express.Router();
const http = require('http');
const cors = require('cors');
const mongoose = require("mongoose");
const keys = require("./keys");
const users = require("../routes/users");
const addToCart = require("../routes/addToCart");
const passport = require("passport");
const reviews = require("../routes/reviews");
//use
const app = express();
//used for parsing incoming req into json objects
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//using routes
app.use("/api/users", users);
app.use("/api/addToCart", addToCart);
app.use("/api/reviews", reviews)
const server = http.createServer(app);
//connecting mongodb

mongoose.connect(keys.uri).then(() => { console.log("connected mongodb"); }).catch(err => { console.log(err); });
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