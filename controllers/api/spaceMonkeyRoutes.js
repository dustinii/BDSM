const router = require('express').Router();
const { Spacemonkey } = require('../../models');

router.post('/', async (req, res) => {
  try {
    const spacemonkeyData = await Spacemonkey.findAll();
    const spacemonkeys = spacemonkeyData.map((spacemonkey) => spacemonkey.get({ plain: true }));

    //rendering spacemonkey.handlebars view
    res.render('spacemonkey', { spacemonkeys });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/spacemonkeys', async (req, res) => {
  try {
    const spacemonkeyData = await Spacemonkey.findOne({ where: { id: req.body.spaceMonkey } });
  
    if (!spacemonkeyData) {
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