const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const idValidator = require('mongoose-id-validator');

// Unsubscribed tracking payload
let UnsubscribedSchema = new Schema({
    signature: {
        timestamp: String,
        token: String,
        signature: String
    },
    'event-data': {
        event: String,
        id: String,
        timestamp: Number,
        'log-level': String,
        recipient: String,
        geolocation: {
            country: String,
            region: String,
            city: String
        },
        campaigns: [String],
        tags: [String],
        ip: String,
        'client-info': {
            'client-type': String,
            'client-os': String,
            'device-type': String,
            'client-name': String,
            'user-agent': String
        },
        message: {
            headers: {
                'message-id': String
            }
        }
    }
});


UnsubscribedSchema.plugin(idValidator);


module.exports = mongoose.model('Unsubscribed', UnsubscribedSchema);