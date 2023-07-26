import dynamoClient from '../dynamo/client.mjs';

describe('insertTable', () => {

  describe('transact write', () => {

    it('inserts new document', async () => {
  
      await dynamoClient.transactWrite({ 
        TransactItems: [
          {
            Put: {
              ConditionExpression: 'attribute_not_exists(pk)',
              TableName: process.env.TABLE_NAME,
              Item: {
                pk: 'Account#001',
                sk: '#Account',
              }
            }
          }
        ]
      }).promise();
  
    });
  
    it('inserts new document with undefined value', async () => {
  
      await dynamoClient.transactWrite({ 
        TransactItems: [
          {
            Put: {
              ConditionExpression: 'attribute_not_exists(pk)',
              TableName: process.env.TABLE_NAME,
              Item: {
                pk: 'Account#002',
                sk: '#Account',
                name: undefined
              }
            }
          }
        ]
      }).promise();
  
    });
  });
});