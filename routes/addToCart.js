const express = require('express');
const router = express.Router();
const isEmpty = require("../validation/isEmpty");
const passport = require("passport");
const AddToCart = require("../models/addToCartModel");
const validateAddToCart = require('../validation/addToCartV');



router.get("/", passport.authenticate('jwt', { session: false }), (req, res) => {
    let errors = {};
    AddToCart.find({ user: req.user.id })
        .then(items => {
            if (isEmpty(items)) {
                errors.nouser = "No Item added to your cart";
                return res.status(400).json(errors);
            } else {
                return res.json(items);
            }
        })
        .catch(err => console.log(err));
});
router.post("/additem", passport.authenticate('jwt', { session: false }), (req, res) => {
    let errors = validateAddToCart(req.body);
    if (!isEmpty(errors)) {
        return res.status(400).json(errors);
    }
    AddToCart.find({ user: req.user.id }).then(userCurrent => {

        if (!isEmpty(userCurrent)) {
            AddToCart.findOne({ name: req.body.name }).then(dish => {
                if (!isEmpty(dish)) {// !isEmpty(dish) can also be used
                    errors.dish = "Dish already added to cart,you can increase or decrease the Qty";
                    return res.status(400).json(errors);
                } else {
                    const newItem = new AddToCart({
                        user: req.user.id,
                        name: req.body.name,
                        price: req.body.price,
                        quantity: req.body.quantity
                    });
                    newItem.save().then(item => res.json(item)).catch(err => console.log(err));

                }
            }).catch(err => console.log(err));
        } else {
            const newItem = new AddToCart({
                user: req.user.id,
                name: req.body.name,
                price: req.body.price,
                quantity: req.body.quantity
            });
            newItem.save().then(item => res.json(item)).catch(err => console.log(err));
        }

    })

});
router.delete("/:id", passport.authenticate('jwt', { session: false }), (req, res) => {
    AddToCart.find({ user: req.user.id }).then(userCurrent => {
        if (!isEmpty(userCurrent)) {
            AddToCart.findById(req.params.id).then(item => {
                if (item) {
                    item.remove().then(() => { return res.json({ ItemRemoved: "Item removed from the cart :(" }); }).catch(err => console.log(err))
                } else {
                    return res.status(400).json({ InvalidId: "No dish corresponding to given id" });
                }
            });
        } else {
            return res.status(400).json({ error: "Oops no items to delete ,your cart was empty" })
        }
    })
});
router.post("/incQty/:id", passport.authenticate('jwt', { session: false }), (req, res) => {
    AddToCart.find({ user: req.user.id }).then(userCurrent => {
        //console.log(userCurrent, "currentuser ");
        if (!isEmpty(userCurrent)) {
            AddToCart.findById(req.params.id).then(item => {
                //console.log(item, "item ");
                if (!isEmpty(item)) {
                    let qty = item.quantity;
                    item.quantity = qty + 1;
                    //console.log(item.quantity, "item Qty ");
                    item.save().then(() => { return res.json(item) }).catch(err => console.log(err));
                } else {
                    return res.status(400).json({ noItems: "No such Dish present" });
                }
            })
        } else {
            return res.status(400).json({ error: "Oops cart is empty,nothing to increase" });
        }

    })
});
router.post("/decQty/:id", passport.authenticate('jwt', { session: false }), (req, res) => {
    AddToCart.find({ user: req.user.id }).then(userCurrent => {
        // console.log(userCurrent, "currentuser ");
        if (!isEmpty(userCurrent)) {
            AddToCart.findById(req.params.id).then(item => {
                // console.log(item, "item ");
                if (!isEmpty(item) && item.quantity >= 1) {
                    let qty = item.quantity;
                    item.quantity = qty - 1;
                    // console.log(item.quantity, "item Qty ");
                    item.save().then(() => { return res.json(item) }).catch(err => console.log(err));
                } else {
                    return res.status(400).json({ noItems: "No such Dish present" });
                }
            })
        } else {
            return res.status(400).json({ error: "Oops cart is empty,nothing to decrease" });
        }

    })
});

module.exports = router;