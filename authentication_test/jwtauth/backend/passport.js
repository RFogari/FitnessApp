//passport.js

const JWTStrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;
const mongoose = require('moongoose');
const User = mongoose.model('users');

opts.jwtFromRequest = ExtractJWT.fromAuthHeaderAsBearerToken();
opts.secretOrKey = 'secret';

module.exports = passport => {
    passport.use(new JWTStrategy(opts, (jwt_payload, done) => {
        user.findByID(jwt_payload.id)
            .then(user => {
                if(uer) {
                    return done(null, user);
                }
                return done(null, false);
            })
            .catch(err => console.error(err));
    }));
}