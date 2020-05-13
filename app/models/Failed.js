const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const idValidator = require('mongoose-id-validator');

// Failed tracking payload
let FailedSchema = new Schema({
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
        severity: String,
        reason: String,
        envelope: {
            transport: String,
            sender: String,
            'sending_ip': String,
            targets: String
        },
        flags: {
            'is-routed': Boolean,
            'is-authenticated': Boolean,
            'is-system-test': Boolean,
            'is-test-mode': Boolean,
            'is-delayed-bounce': Boolean
        },
        'delivery-status': {
            tls: Boolean,
            'mx-host': String,
            code: Number,
            description: String,
            'session-seconds': Number,
            utf8: Boolean,
            'attempt-no': Number,
            message: String,
            'certificate-verified': Boolean
        },
        message: {
            headers: {
                to: String,
                'message-id': String,
                from: String,
                subject: String
            }
        },
        storage: {
            url: String,
            key: String
        },
        recipient: String,
        'recipient-domain': String,
        campaigns: [String],
        tags: [String]
    }
});


FailedSchema.plugin(idValidator);


module.exports = mongoose.model('Failed', FailedSchema);