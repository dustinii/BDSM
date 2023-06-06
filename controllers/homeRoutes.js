const router = require('express').Router();
const { restart } = require('nodemon');
const { Developer, Spacemonkey, Restaurant, Burger, Order, Review } = require('../models');
// const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  if(req.session.logged_in){
    console.log('logged in');
    console.log(req.session.user_id);
  } else {
    console.log('not logged in');
  }
  try {
    res.render('homepage', {logged_in: req.session.logged_in});
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

// Endpoint to render the selectMonkey page with all SpaceMonkeys
router.get('/selectMonkey', async (req, res) => {
  const dbres = await Spacemonkey.findAll();
  const spacemonkeys = dbres.map((spacemonkey) => spacemonkey.get({ plain: true }));
  res.render('selectMonkey', { spacemonkeys });
});

// Endpoint to create a new order in the database
router.post('/api/orders/create', async (req, res) => {
  const { burgerId, spacemonkeyId } = req.body;
  // Get the user id from the session
  const user_id = req.session.user_id; 
  try{
    await Order.create({ user_id: user_id, burger_id: burgerId, spacemonkey_id: spacemonkeyId });
    res.sendStatus(200);
  } catch (err) {
    console.log(err);
    res.status(500).json(err.message);
  }
});

// Endpoint to show the order confirmation page
router.get('/orders/confirmation', (req, res) => {
  res.render('orderConfirmation');
});

// Endpoint to show the tracking page and then redirect to the delivery confirmation page
router.get('/orders/tracking', (req, res) => {
  res.render('orderTracking');
});

router.get('/restaurants/:restaurantId', async (req, res) => {
  try {
    const restaurantId = req.params.restaurantId;

    // Find restaurant and associated burgers
    const restaurant = await Restaurant.findOne({
      where : { id: restaurantId },
      include: [ { model: Burger } ]
    });

    if (!restaurant) {
      res.status(404).send('Restaurant not found');
    }

    console.log(restaurant);

    // Render restaurant page
    res.render('restaurant', { restaurant: restaurant.toJSON() });
  } catch (err) {
    res.status(500).json(err.message);
  }
});

router.get('/about', (req, res) => {
  res.render('about');
});

// router.get('/reviews', async (req, res) => {
//   const dbres = await Review.findAll();
//   const reviews = dbres.map((review) => review.get({ plain: true }));
//   res.render('review', { reviews });
// });

router.get;

module.exports = router;
