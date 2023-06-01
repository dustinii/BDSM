const router = require('express').Router();
const { Review } = require('../../models');

router.post('/', async (req, res) => {
  try {
    const reviewData = await Review.create(req.body);

    req.session.save(() => {
      req.session.review_id = reviewData.id;

      res.status(200).json(reviewData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/reviews', async (req, res) => {
  try {
    const reviewData = await Review.findOne({ where: { id: req.body.review } });
  
    if (!reviewData) {
      res
        .status(400)
        .json({ message: 'No reviews found.' });
      return;
    }
  
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;