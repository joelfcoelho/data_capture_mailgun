const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const idValidator = require('mongoose-id-validator');

// Opened tracking payload
let OpenedSchema = new Schema({
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
        tags: [String],
        campaigns: [String],
        ip: String,
        campaigns: [String],
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


OpenedSchema.plugin(idValidator);


module.exports = mongoose.model('Opened', OpenedSchema);