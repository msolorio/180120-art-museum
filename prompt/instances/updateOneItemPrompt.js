const Prompt = rootRequire('./prompt/Prompt');
const updateOneItemPromptSchema = rootRequire('./prompt/schemas/updateOneItemPromptSchema');

const updateOneItemPrompt = new Prompt(updateOneItemPromptSchema);

module.exports = updateOneItemPrompt;
