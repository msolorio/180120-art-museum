const PromptSchema = require('./PromptSchema');

const props = [
  {
    name: 'command',
    description: 'please provide a command\n- add\n- update\n- remove\n- get-all\n- get-one\n- exit\n\n'
  }
];

const commandSchema = new PromptSchema(props);

module.exports = commandSchema;
