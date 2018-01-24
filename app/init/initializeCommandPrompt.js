const performAsyncAction = require('../performAsyncAction');
const commandPrompt = require('../../prompt/instances/commandPrompt');

function initializeCommandPrompt() {
  commandPrompt.trigger()
    .then((response) => {
      return performAsyncAction(response.command);
    })
    .then((completionMessage) => {
      if (completionMessage !== 'exit') {
        console.log(completionMessage);
        initializeCommandPrompt();
      }
    })
    .catch((error) => {
      console.error(error.message);
    });
}

module.exports = initializeCommandPrompt;
