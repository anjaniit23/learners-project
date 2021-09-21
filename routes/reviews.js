const express = require('express');
const router = express.Router();
const isEmpty = require("../validation/isEmpty");
const passport = require("passport");
const Review = require("../models/reviewmodel");
const validateReview = require("../validation/reviewV");
router.post("/addreview", (req, res) => {
    let errors = validateReview(req.body);
    if (!isEmpty(errors)) {
        return res.status(400).json(errors);
    }
    const newReview = new Review({
        text: req.body.text
    });
    newReview.save().then((review) => { return res.json(review) }).catch(err => console.log(err));

});

router.get("/", passport.authenticate('jwt', { session: false }), (req, res) => {
    return res.json(Review);
});
module.exports = router;
