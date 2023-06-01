const router = require('express').Router();
const { Order } = require('../../models');

router.post('/', async (req, res) => {
  try {
    const orderData = await Order.findall();
    const order = orderData.map((order)=> 
      order.get({plain : true}));

    res.render('order', {order});
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/order', async (req, res) => {
  try {
    const orderData = await Order.findOne({ where: { id: req.body.order } });
  
    if (!orderData) {
      res
        .status(400)
        .json({ message: 'No order found.' });
      return;
    }
  
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;