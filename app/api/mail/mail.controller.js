const nodemailer = require('nodemailer');
const mg = require('nodemailer-mailgun-transport');
const config = require('../../config/environment');

const auth = {
    auth: {
        api_key: config.auth.api_key,
        domain: config.auth.domain
    }
}

function send(req, res) {

    const nodemailerMailgun = nodemailer.createTransport(mg(auth));

    nodemailerMailgun.sendMail({
        from: 'myemail@example.com',
        to: req.params.email,
        subject: 'Re:ceeve challenge.',
        html: 'Hello, this is a test e-mail with some html <a href="https://google.com">Click here</a>'
    }, (err, info) => {
        if (err) {
            return res.status(500).json(err);
        } else {
            return res.status(201).json(info);
        }
    });
}

module.exports.send = send;