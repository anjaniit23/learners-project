const isEmpty = require("./isEmpty");
const validator = require("validator");
//exports.prop used instead of modeule.exports
const validateRegisteration = (data) => {
    let errors = {};
    data.name = !isEmpty(data.name) ? data.name : "";
    data.email = !isEmpty(data.email) ? data.email : "";
    data.password = !isEmpty(data.password) ? data.password : "";
    data.confirmPassword = !isEmpty(data.confirmPassword) ? data.confirmPassword : "";
    if (validator.isEmpty(data.name)) {
        errors.name = "Empty Name field";
    }
    if (validator.isEmpty(data.email)) {
        errors.email = "Empty Email field";
    }
    if (!validator.isEmail(data.email)) {
        errors.email = "Invalid email";
    }

    if (!validator.isLength(data.password, { min: 6, max: 20 })) {
        errors.password = "Password must contain 6 to 20 characters"
    }
    if (!validator.isLength(data.confirmPassword, { min: 6, max: 20 })) {
        errors.confirmPassword = "Confirm password must contain 6 to 20 characters"
    }
    return (errors);

}
module.exports = validateRegisteration;

