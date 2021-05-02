// dialogflow
const dialogflow = require('@bottender/dialogflow');

// MachineLearning
const Dialogflow = dialogflow({
  projectId: process.env.GOOGLE_APPLICATION_PROJECT_ID,
  // actions: {
  //   eatFood: SayHello,
  // },
});

module.exports = Dialogflow;
