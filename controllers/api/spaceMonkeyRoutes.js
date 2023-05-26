const router = require('express').Router();
const { spaceMonkey } = require('../../models');

router.post('/', async (req, res) => {
  try {
    const spaceMonkeyData = await courier.create(req.body);

    req.session.save(() => {
      req.session.spaceMonkey_id = spaceMonkey.id;

      res.status(200).json(spaceMonkeyData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/spacemonkeys', async (req, res) => {
  try {
    const courierData = await review.findOne({ where: { id: req.body.spaceMonkey } });
  
    if (!spaceMonkeyData) {
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