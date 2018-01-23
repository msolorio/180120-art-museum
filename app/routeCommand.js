const actions = require('./actions');

function routeCommand(actionName) {
  switch(actionName) {
    case 'add':
      return actions.addItem();

    case 'exit':
      return new Promise((resolve) => resolve('exit'));

    default:
      return new Promise((resolve) => resolve('command not recognized'));
  }
}

module.exports = routeCommand;
