const isEmpty = require("./isEmpty");
const validator = require("validator");

const validateReview = (data) => {
    let errors = {};
    data.text = !isEmpty(data.text) ? data.text : "";
    if (validator.isEmpty(data.text)) {
        errors.text = "Review can't be empty if you wanna submit it :)";
    }
    return errors;
};
module.exports = validateReview;
