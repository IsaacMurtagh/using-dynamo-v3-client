import AWS from 'aws-sdk';

const config = {};

if (process.env.JEST_WORKER_ID) {
  config.endpoint = 'localhost:8000';
  config.sslEnabled = false,
  config.region = 'local-env';
  config.credentials = {
    accessKeyId: 'accessKeyId',
    secretAccessKey: 'accessKeyId',
  };
}

const client = new AWS.DynamoDB.DocumentClient(config);
export default client;