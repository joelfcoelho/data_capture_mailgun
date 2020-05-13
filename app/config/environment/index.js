const _ = require('lodash');

let env = process.env.NODE_ENV || 'development';

// All configurations will extend these options
let all = {
    env: env,

    // Server port
    port: process.env.PORT || 3002,

    // Mongoose connection
    mongoose: {
        uri: 'mongodb://receevechallenge:receevechallenge1@ds259499.mlab.com:59499/receeve'
    },

    // Mailgun auth
    auth: {
        api_key: '',
        domain: ''
    }
};

// Export the config object based on the NODE_ENV
module.exports = _.merge(
    all,
    require(`./${env}.js`)
);
