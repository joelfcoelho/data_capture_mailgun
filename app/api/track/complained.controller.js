const utils = require('../../components/utils');
const Complained = require('../../models/Complained');
const AWS = require('aws-sdk');
const credentials = new AWS.SharedIniFileCredentials({profile: 'sns_profile'});
const sns = new AWS.SNS({credentials: credentials, region: 'eu-central-1'});

function index(req, res) {

  let query = {};

  Complained.find(query)
    .then(unsubs => {
      return res.status(200).json(unsubs);
    })
    .catch(utils.handleError(req, res));
}


function create(req, res) {

  let complained = new Complained();
  Object.assign(complained, {
    ...req.body
  });

  let params = {
    Message: JSON.stringify(complained),
    Subject: 'Your tracking subscription',
    TopicArn: 'arn:aws:sns:eu-central-1:284659625355:receeveTopic'
  };

  complained.save()
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
