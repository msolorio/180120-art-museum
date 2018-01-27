const actions = require('./actions');

function performAsyncAction(actionName) {
  switch(actionName) {
    case 'add':
      return actions.addItem();

    case 'get-all':
      return actions.getAllItems();

    case 'get-one':
      return actions.getOneItem();

    case 'exit':
      return new Promise((resolve) => resolve('exit'));

    default:
      return new Promise((resolve) => resolve('command not recognized'));
  }
}

module.exports = performAsyncAction;
