const routes = require('./routes');

const args = process.argv;

const command = args[2];

function routeCommand(command) {
  switch(command) {
    case 'add':
      routes.addItem(args);
      return;

    case 'get-all':
      routes.getAllItems();
      return;

    case 'get-one':
      routes.getOneItem();
      return;

    default:
      console.log('command not recognized');
      return;
  }
}
routeCommand(command);
