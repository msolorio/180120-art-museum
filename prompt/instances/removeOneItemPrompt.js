const Prompt = rootRequire('./prompt/Prompt');
const removeOneItemPromptSchema = rootRequire('./prompt/schemas/removeOneItemPromptSchema');

const removeOneItemPrompt = new Prompt(removeOneItemPromptSchema);

module.exports = removeOneItemPrompt;
