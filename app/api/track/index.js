const router                = require('express').Router();
const controller_delivered  = require('./delivered.controller');
const controller_clicked    = require('./clicked.controller');
const controller_opened     = require('./opened.controller');
const controller_unsubs     = require('./unsubscribed.controller');
const controller_complained = require('./complained.controller');
const controller_failed     = require('./failed.controller');

// Routes for each type of tracking
// GET /type to list all tracking of this type
// POST /type post endpoint for mailgun webhooks

router.get('/delivered', controller_delivered.index); 
router.post('/delivered', controller_delivered.create); 

router.get('/clicked', controller_clicked.index); 
router.post('/clicked', controller_clicked.create);

router.get('/opened', controller_opened.index); 
router.post('/opened', controller_opened.create);

router.get('/unsubscribed', controller_unsubs.index); 
router.post('/unsubscribed', controller_unsubs.create);

router.get('/complained', controller_complained.index); 
router.post('/complained', controller_complained.create);

router.get('/failed', controller_failed.index); 
router.post('/failed', controller_failed.create);

module.exports = router;
