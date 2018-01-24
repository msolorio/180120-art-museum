const initializeCommandPrompt = require('./app/init/initializeCommandPrompt');
const initializeInventory = require('./app/init/initializeInventory');

initializeInventory()
  .then(() => {
    initializeCommandPrompt();
  })
  .catch((error) => {
    console.error(error.message);
  });
