const PromptSchema = require('./PromptSchema');

const props = [
  'artist',
  'title',
  'year',
  'medium'
];

const addItemPromptSchema = new PromptSchema(props);

module.exports = addItemPromptSchema;
