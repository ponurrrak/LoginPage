const router = require('express').Router();

router.use('/', (req, res, next) => {
  if(req.user || req.url === '/no-permission') {
    next();
  } else {
    res.redirect('/user/no-permission');
  }
});

router.get('/logged', (req, res) => {
  res.render('logged', {
    avatar: req.user._json.picture,
    displayName: req.user.displayName,
  });
});

router.get('/no-permission', (req, res) => {
  res.render('noPermission');
});

router.get('/profile', (req, res) => {
  res.render('profile');
});

router.get('/profile/settings', (req, res) => {
  res.render('profileSettings');
});

module.exports = router;
