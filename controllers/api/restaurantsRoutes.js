const router = require('express').Router();
const { Restaurants } = require('../../models');

router.post('/', async (req, res) => {
  try {
    const restaurantsData = await Restaurants.create(req.body);

    req.session.save(() => {
      req.session.Restaurant_id = restauranstData.id;

      res.status(200).json(restaurantData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/browse', async (req, res) => {
  try {
    const restaurantsData = await Restaurants.findOne({ where: { id: req.body.restaurants } });
  
    if (!restuarantsData) {
      res
        .status(400)
        .json({ message: 'No restaurant found.' });
      return;
    }
  
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
