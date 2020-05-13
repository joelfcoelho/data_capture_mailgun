const utils = require('../../components/utils');
const Failed = require('../../models/Failed');
const AWS = require('aws-sdk');
const credentials = new AWS.SharedIniFileCredentials({profile: 'sns_profile'});
const sns = new AWS.SNS({credentials: credentials, region: 'eu-central-1'});

function index(req, res) {

    let query = {};

    Failed.find(query)
        .then(fails => {
            return res.status(200).json(fails);
        })
        .catch(utils.handleError(req, res));
}


function create(req, res) {

    let failed = new Failed();
    Object.assign(failed, {
        ...req.body
    });

    let params = {
      Message: JSON.stringify(failed),
      Subject: 'Your tracking subscription',
      TopicArn: 'arn:aws:sns:eu-central-1:284659625355:receeveTopic'
    };

    failed.save()
        .then(f => {
            sns.publish(params, function(err, data) {
              if (err) console.log(err, err.stack);
              else console.log(data);
            });
            return res.status(200).json(f);
        })
        .catch(utils.handleError(req, res));
}


module.exports = {
    index: index,
    create: create
};
