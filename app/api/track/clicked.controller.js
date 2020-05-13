const utils = require('../../components/utils');
const Clicked = require('../../models/Clicked');
const AWS = require('aws-sdk');
const credentials = new AWS.SharedIniFileCredentials({profile: 'sns_profile'});
const sns = new AWS.SNS({credentials: credentials, region: 'eu-central-1'});

function index(req, res) {

  let query = {};

  Clicked.find(query)
    .then(clicks => {
      return res.status(200).json(clicks);
    })
    .catch(utils.handleError(req, res));
}


function create(req, res) {

  let clicked = new Clicked();
  Object.assign(clicked, {
    ...req.body
  });

  let params = {
    Message: JSON.stringify(clicked),
    Subject: 'Your tracking subscription',
    TopicArn: 'arn:aws:sns:eu-central-1:284659625355:receeveTopic'
  };

  clicked.save()
    .then(c => {
      sns.publish(params, function(err, data) {
        if (err) console.log(err, err.stack);
        else console.log(data);
      });
      return res.status(200).json(c);
    })
    .catch(utils.handleError(req, res));
}


module.exports = {
  index: index,
  create: create
};
