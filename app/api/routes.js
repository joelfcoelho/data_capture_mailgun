const router = require('express').Router(); // Get an instance of the express Router

// API routes start with /
router.get('/', (req, res) => {
    res.status(200).json({ message: 're:ceeve code challenge' });
});

router.use('/mail', require('./mail')); // Mail routes
router.use('/track', require('./track')); // Tracking routes

module.exports = router;
