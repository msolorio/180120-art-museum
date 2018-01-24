const initializeCommandPrompt = require('./app/init/initializeCommandPrompt');
const initializeProgram = require('./app/init/initializeProgram');

initializeProgram()
  .then(() => {
    initializeCommandPrompt();
  })
  .catch((error) => {
    console.error(error.message);
  });
