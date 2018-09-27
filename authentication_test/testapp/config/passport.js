const mongoose = require('mongoose');
const passport = require('passport');
const localStrategy = require('passport-local');

const Users = mongoose.model('users');

passport.use(new localStrategy ({
    usernameField: 'user[email]',
    passwordField: 'user[password',
}, (email, password, done) => {
    users.findOne({ email })
        .then((user) => {
            if(!user || !user.validatePassword(password)) {
                return done(null, false, { errors: { 'email or password': 'is invalid' } });
            }

            return done(null, user);

        }).catch(done);
}));