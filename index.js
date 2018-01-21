const command = process.argv[2];

function routeCommand(command) {
  switch(command) {
    case 'add':
      console.log('command add used');
      return;

    case 'get-all':
      console.log('command get-all used');
      return;

    case 'get-one':
      console.log('command get-one used');
      return;

    default:
      console.log('command not recognized');
      return;
  }
}
routeCommand(command);
