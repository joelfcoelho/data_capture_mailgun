const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const idValidator = require('mongoose-id-validator');

// Clicked tracking payload
let ClickedSchema = new Schema({
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
        url: String,
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


ClickedSchema.plugin(idValidator);


module.exports = mongoose.model('Clicked', ClickedSchema);