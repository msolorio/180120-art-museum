const Prompt = rootRequire('./prompt/Prompt');
const commandSchema = rootRequire('./prompt/schemas/commandSchema');

const commandPrompt = new Prompt(commandSchema);

module.exports = commandPrompt;
