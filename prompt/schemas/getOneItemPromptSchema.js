const PromptSchema = require('./PromptSchema');

const getOnePromptProps = [{
  name: 'id',
  description: 'id of requested item'
}];

const getOneItemPromptSchema = new PromptSchema(getOnePromptProps);

module.exports = getOneItemPromptSchema;
