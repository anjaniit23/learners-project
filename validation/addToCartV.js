const validator = require("validator");
const isEmpty = require("./isEmpty");

const validateAddToCart = (data) => {
    let errors = {};
    data.name = !isEmpty(data.name) ? data.name : "";
    data.price = data.price.toString(); data.quantity = data.quantity.toString();
    console.log(typeof (data.price), typeof (data.quantity));
    if (validator.isEmpty(data.name)) {
        errors.name = "Name is required";
    }

    if (!validator.isFloat(data.price, { min: 0 })) {
        errors.price = "price can't be negative";
    }
    if (!validator.isInt(data.quantity, { min: 0 })) {
        errors.quantity = "quantity can't be negative";
    }
    if (validator.isEmpty(data.price)) {
        errors.price = "price is required";
    }
    if (validator.isEmpty(data.quantity)) {
        errors.quantity = "quantity is required";
    }
    return (errors);

};

module.exports = validateAddToCart;