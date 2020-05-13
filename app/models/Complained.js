const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const idValidator = require('mongoose-id-validator');

// Complained tracking payload
let ComplainedSchema = new Schema({
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
        tags: [String],
        campaigns: [String],
        flags: {
            'is-routed': Boolean,
            'is-authenticated': Boolean,
            'is-system-test': Boolean,
            'is-test-mode': Boolean
        },
        message: {
            headers: {
                to: String,
                'message-id': String,
                from: String,
                subject: String
            }
        }
    }
});


ComplainedSchema.plugin(idValidator);


module.exports = mongoose.model('Complained', ComplainedSchema);