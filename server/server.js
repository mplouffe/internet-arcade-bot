'use strict';

const dialogflow = require('dialogflow');

const PORT = process.env.PORT || 3000;
const projectId = process.env.DF_PROJECT_ID || 'dos-glob-bot-210819';
const sessionId = 'session_id'

const query = 'hello';
const languageCode = 'en-US';
 
// Instantiate a DialogFlow client.
const sessionClient = new dialogflow.SessionsClient();
 
// Define session path
const sessionPath = sessionClient.sessionPath(projectId, sessionId);
 
// The text query request.
const request = {
  session: sessionPath,
  queryInput: {
    text: {
      text: query,
      languageCode: languageCode,
    },
  },
};
 
// Send request and log result
sessionClient
  .detectIntent(request)
  .then(responses => {
    console.log('Detected intent');
    const result = responses[0].queryResult;
    console.log(`  Query: ${result.queryText}`);
    console.log(`  Response: ${result.fulfillmentText}`);
    if (result.intent) {
      console.log(`  Intent: ${result.intent.displayName}`);
    } else {
      console.log(`  No intent matched.`);
    }
  })
  .catch(err => {
    console.error('ERROR:', err);
  });