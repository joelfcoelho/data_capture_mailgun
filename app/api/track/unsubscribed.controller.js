const utils = require('../../components/utils');
const Unsubscribed = require('../../models/Unsubscribed');
const AWS = require('aws-sdk');
const credentials = new AWS.SharedIniFileCredentials({profile: 'sns_profile'});
const sns = new AWS.SNS({credentials: credentials, region: 'eu-central-1'});

function index(req, res) {

  let query = {};

  Unsubscribed.find(query)
    .then(unsubs => {
      return res.status(200).json(unsubs);
    })
    .catch(utils.handleError(req, res));
}


function create(req, res) {

  let unsubscribed = new Unsubscribed();
  Object.assign(unsubscribed, {
    ...req.body
  });
  
  let params = {
    Message: JSON.stringify(unsubscribed),
    Subject: 'Your tracking subscription',
    TopicArn: 'arn:aws:sns:eu-central-1:284659625355:receeveTopic'
  };

  unsubscribed.save()
    .then(u => {
      sns.publish(params, function(err, data) {
        if (err) console.log(err, err.stack);
        else console.log(data);
      });
      return res.status(200).json(u);
    })
    .catch(utils.handleError(req, res));
}


module.exports = {
  index: index,
  create: create
};
