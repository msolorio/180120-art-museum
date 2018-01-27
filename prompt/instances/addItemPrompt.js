const Prompt = rootRequire('./prompt/Prompt');
const addItemPromptSchema = rootRequire('./prompt/schemas/addItemPromptSchema');

const addItemPrompt = new Prompt(addItemPromptSchema);

module.exports = addItemPrompt;
