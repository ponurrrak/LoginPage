const router = require('express').Router();
const passport = require('passport');

router.get('/google', passport.authenticate('google'));

router.get('/google/callback', passport.authenticate('google', {
  successRedirect: '/user/logged',
  failureRedirect: '/user/no-permission',
}));

router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

module.exports = router;
