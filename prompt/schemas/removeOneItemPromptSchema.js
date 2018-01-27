const PromptSchema = rootRequire('./prompt/schemas/PromptSchema');

const removeOneItemPromptProps = [{
  name: 'id',
  description: 'id of item to remove'
}];

const removeOneItemPromptSchema = new PromptSchema(removeOneItemPromptProps);

module.exports = removeOneItemPromptSchema;
