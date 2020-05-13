const utils = require('../../components/utils');
const Opened = require('../../models/Opened');
const AWS = require('aws-sdk');
const credentials = new AWS.SharedIniFileCredentials({profile: 'sns_profile'});
const sns = new AWS.SNS({credentials: credentials, region: 'eu-central-1'});

function index(req, res) {

    let query = {};

    Opened.find(query)
        .then(opens => {
            return res.status(200).json(opens);
        })
        .catch(utils.handleError(req, res));
}


function create(req, res) {

    let opened = new Opened();
    Object.assign(opened, {
        ...req.body
    });

    let params = {
      Message: JSON.stringify(opened),
      Subject: 'Your tracking subscription',
      TopicArn: 'arn:aws:sns:eu-central-1:284659625355:receeveTopic'
    };

    opened.save()
        .then(o => {
            sns.publish(params, function(err, data) {
              if (err) console.log(err, err.stack);
              else console.log(data);
            });
            return res.status(200).json(o);
        })
        .catch(utils.handleError(req, res));
}


module.exports = {
    index: index,
    create: create
};
