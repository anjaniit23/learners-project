const jwtstrategy = require("passport-jwt").Strategy;
const passport = require("passport");
const User = require("mongoose").model("users");
const extractJwt = require("passport-jwt").ExtractJwt;
const options = {};
const keys = require("./keys");
options.jwtFromRequest = extractJwt.fromAuthHeaderAsBearerToken();
options.secretOrKey = keys.key;

module.exports = passport => {
    passport.use(new jwtstrategy(options, (jwt_payload, done) => {
        User.findById(jwt_payload.id).then(user => {
            if (user) {
                return done(null, user);
            } else {
                return done(null, false);
            }
        })
            .catch(err => console.log(err));
    }))
};
