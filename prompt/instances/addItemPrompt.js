const Prompt = require('../Prompt');
const addItemPromptSchema = require('../schemas/addItemPromptSchema');

const addItemPrompt = new Prompt(addItemPromptSchema);

module.exports = addItemPrompt;
