const router = require('express').Router();
const { restart } = require('nodemon');
const { Developer, Spacemonkey, Restaurant, Burger } = require('../models');
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

router.get('/spacemonkeys', async (req, res) => {
  const dbres = await Spacemonkey.findAll();
  const spacemonkeys = dbres.map((spacemonkey) => spacemonkey.get({ plain: true }));
  res.render('spacemonkey', { spacemonkeys });
});

router.get('/developers', async (req, res) => {
  const dbres = await Developer.findAll();
  const developers = dbres.map((developer) => developer.get({ plain: true }));
  res.render('developers', { developers });
});

router.get('/browse', async (req, res) => {
  try {
    const restaurantData = await Restaurant.findAll();
    const restaurants = restaurantData.map(restaurant => restaurant.get({
      plain:true
    }));
    console.log(restaurants);
    res.render('browse', {restaurants});
  } catch (err) {
    res.status(500).json(err.message);
  }
  
});

router.get('/order/:restaurantId', async (req, res) => {
  try {
    const orderData = await Burger.findAll({
      where: {
        id: req.params.restaurantId
      }
    });
    const orders = orderData.map(order => order.get({
      plain: true
    }));
    res.render('order', {orders});
  } catch (err) {
    res.status(500).json(err.message);
  }
});

router.get('/about', (req, res) => {
  res.render('about');
});

module.exports = router;
