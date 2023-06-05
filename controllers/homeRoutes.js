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

router.get('/review', async (req, res) => {
  const dbres = await Review.findAll();
  const reviews = dbres.map((review) => review.get({ plain: true }));
  res.render('reviews', { reviews });
});

router.get('/browse', async (req, res) => {
  try {
    const restaurantData = await Restaurant.findAll();
    const restaurants = restaurantData.map(restaurant => restaurant.get({
      plain:true
    }));
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
  const { burger_id, spacemonkey_id } = req.body;
  // Get the user id from the session
  const user_id = req.session.user_id; 
  try{
    const order = await Order.create({ user_id: user_id, burger_id: burger_id, spacemonkey_id: spacemonkey_id });
    res.status(200).json(order);
  } catch (err) {
    console.log(err);
    res.status(500).json(err.message);
  }
});

// Endpoint to show the order confirmation page
router.get('/orders/confirmation/:id', async (req, res) => {
  // get new order information by id
  const orderData = await Order.findOne({
    where: { id: req.params.id },
    include: [
      {
        model: Burger, 
        include: [ Restaurant ]
      },
      {
        model: Spacemonkey
      },
    ],
  });
  
  // console.log(orderData);
  const order = orderData.get({plain: true});
  console.log(order);
  // render orderConfirmation with the new order info.
  res.render('orderConfirmation', {order});
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

router.get('/review', async (req, res) => {
  const dbres = await Review.findAll();
  const reviews = dbres.map((review) => review.get({ plain: true }));
  res.render('reviews', { reviews });
});

router.get('/orders/deliveryConfirmation', async (req, res) => {
  res.render('deliveryConfirmation');
});

module.exports = router;
