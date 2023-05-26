const router = require('express').Router();
const { Restaurant } = require('../../models');

router.post('/', async (req, res) => {
  try {
    const restaurantData = await Restaurant.create(req.body);

    req.session.save(() => {
      req.session.Restaurant_id = restaurantData.id;

      res.status(200).json(restaurantData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/restaurant', async (req, res) => {
  try {
    const restaurantData = await Restaurant.findOne({ where: { id: req.body.restaurant } });
  
    if (!restuarantData) {
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
