const actions = require('./actions');

const command = process.argv[2];

function routeCommand(command) {
  switch(command) {
    case 'add':
      actions.addItem();
      return;

    case 'get-all':
      actions.getAllItems();
      return;

    case 'get-one':
      actions.getOneItem();
      return;

    default:
      console.log('command not recognized');
      return;
  }
}
routeCommand(command);
