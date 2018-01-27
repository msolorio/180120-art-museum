const PromptSchema = rootRequire('./prompt/schemas/PromptSchema');

const updateOneItemPromptProps = [{
  name: 'id',
  description: 'id of item to update'
}, {
  name: 'property',
  description: 'property to update'
}, {
  name: 'value',
  description: 'value to update'
}];

const updateOneItemPromptSchema = new PromptSchema(updateOneItemPromptProps);

module.exports = updateOneItemPromptSchema;
