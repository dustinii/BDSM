const router = require('express').Router();
const userRoutes = require('./userRoutes');
const restaurantsRoutes = require('./restaurantsRoutes');
const orderRoutes = require('./orderRoutes');
const spaceMonkeyRoutes = require('./spaceMonkeyRoutes');
const reviewRoutes = require('./reviewRoutes');

router.use('/users', userRoutes);
router.use('/spacemonkeys', spaceMonkeyRoutes);
router.use('/reviewRoutes', reviewRoutes);

module.exports = router;
