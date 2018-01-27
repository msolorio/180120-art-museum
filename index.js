global.rootRequire = require('./utils/rootRequire');
const initializeCommandPrompt = rootRequire('./app/init/initializeCommandPrompt');
const initializeInventory = rootRequire('./app/init/initializeInventory');

initializeInventory()
  .then(() => {
    initializeCommandPrompt();
  })
  .catch((error) => {
    console.error(error.message);
  });
