const Prompt = rootRequire('./prompt/Prompt');
const getOneItemPromptSchema = rootRequire('./prompt/schemas/getOneItemPromptSchema');

const getOneItemPrompt = new Prompt(getOneItemPromptSchema);

module.exports = getOneItemPrompt;
