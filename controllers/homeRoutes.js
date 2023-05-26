const router = require('express').Router();
const { Developer } = require('../models');
// const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    res.render('homepage');
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

router.get('/signup', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('signup');
});


router.get('/developers', async (req, res) => {
  const dbres = await Developer.findAll();
  const developers = dbres.map((developer) => developer.get({ plain: true }));
  res.render('developers', { developers });
});


module.exports = router;
