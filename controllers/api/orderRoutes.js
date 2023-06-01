const router = require('express').Router();
const { Order } = require('../../models');

router.get('/:id', async (req, res) => {
  try {
    const orderData = await Order.findall();
    const order = orderData.map((order)=> 
      order.get({plain : true}));

    res.render('order', {order});

    // const orderData = await Order.findByPk(req.params.id, {
    //   include: [{ model: Burger }, { model: Restaurant }],
    // });

    if (!orderData) {
      res.status(404).json({ message: 'No order found with that id!' });
      return;
    }

    res.status(200).json(orderData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  try {
    const newOrder = await Order.create({
      ...req.body,
      userId: req.session.userId,
    });

    res.status(200).json(newOrder);
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