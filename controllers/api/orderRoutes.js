const router = require('express').Router();
const { Order } = require('../../models');

router.post('/', async (req, res) => {
  try {
    const orderData = await order.create(req.body);

    req.session.save(() => {
      req.session.Order_id = OrderData.id;

      res.status(200).json(OrderData);
    });
  } catch (err) {
    res.status(400).json(err);
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