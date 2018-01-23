const routeCommand = require('./routeCommand');
const Prompt = require('../prompt/Prompt');
const commandSchema = require('../prompt/schemas/commandSchema');

const commandPrompt = new Prompt(commandSchema);

function initializeCommandPrompt() {
  commandPrompt.trigger()
    .then((response) => {
      return routeCommand(response.command);
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