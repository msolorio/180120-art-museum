const Prompt = require('../Prompt');
const commandSchema = require('../schemas/commandSchema');

const commandPrompt = new Prompt(commandSchema);

module.exports = commandPrompt;
