const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(new GoogleStrategy({
  clientID: process.env.clientID,
  clientSecret: process.env.clientSecret,
  callbackURL: process.env.callbackURL,
  scope: ['email', 'profile'],
}, (accessToken, refreshToken, profile, done) => {
  done(null, profile);
}));

passport.serializeUser((obj, serialize) => {
  serialize(null, obj);
});

passport.deserializeUser((user, deserialize) => {
  deserialize(null, user);
});
