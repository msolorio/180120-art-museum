const Prompt = require('../Prompt');
const getOneItemPromptSchema = require('../schemas/getOneItemPromptSchema');

const getOneItemPrompt = new Prompt(getOneItemPromptSchema);

module.exports = getOneItemPrompt;
