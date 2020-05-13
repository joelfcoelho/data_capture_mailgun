const router     = require('express').Router();
const controller = require('./mail.controller');

// GET /send/:email Send an email to specified email via mailgun api
router.get('/send/:email', controller.send); 

module.exports = router;
