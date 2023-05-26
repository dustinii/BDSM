const router = require('express').Router();
const { Review } = require('../../models');

router.post('/', async (req, res) => {
  try {
    const reviewData = await courier.create(req.body);

    req.session.save(() => {
      req.session.review_id = reviewData.id;

      res.status(200).json(reviewData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/spacemonkeys', async (req, res) => {
  try {
    const courierData = await review.findOne({ where: { id: req.body.courier } });
  
    if (!reviewData) {
      res
        .status(400)
        .json({ message: 'No space monkey found.' });
      return;
    }
  
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;