const isEmpty = require("./isEmpty");
const validator = require("validator");

const validateLogIn = (data) => {

    let errors = {};
    data.email = !isEmpty(data.email) ? data.email : "";
    data.password = !isEmpty(data.password) ? data.password : "";
    if (validator.isEmpty(data.email)) {
        errors.email = "Email field can't be empty";
    }
    if (!validator.isLength(data.password, { min: 6, max: 20 })) {
        errors.password = "Password must contain characters between 6 to 20";
    }
    return (errors);
}

module.exports = validateLogIn;