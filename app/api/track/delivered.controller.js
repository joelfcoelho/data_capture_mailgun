const utils = require('../../components/utils');
const Delivered = require('../../models/Delivered');
const AWS = require('aws-sdk');
const credentials = new AWS.SharedIniFileCredentials({profile: 'sns_profile'});
const sns = new AWS.SNS({credentials: credentials, region: 'eu-central-1'});



function index(req, res) {

  let query = {};

  Delivered.find(query)
    .then(deliveries => {
      return res.status(200).json(deliveries);
    })
    .catch(utils.handleError(req, res));
}


function create(req, res) {

  let delivered = new Delivered();
  Object.assign(delivered, {
    ...req.body
  });

  let params = {
    Message: JSON.stringify(delivered),
    Subject: 'Your tracking subscription',
    TopicArn: 'arn:aws:sns:eu-central-1:284659625355:receeveTopic'
  };

  delivered.save()
    .then(d => {
      sns.publish(params, function(err, data) {
        if (err) console.log(err, err.stack); 
        else console.log(data);
      });
      return res.status(200).json(d);
    })
    .catch(utils.handleError(req, res));
}


module.exports = {
  index: index,
  create: create
};