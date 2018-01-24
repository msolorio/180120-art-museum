const readItems = require('../dataUtils/readItems');
const populateInventory = require('./populateInventory');

function initializeProgram() {
  return new Promise((resolve, reject) => {

    readItems()
      .then((data) => {
        populateInventory(data);

        resolve();
      })
      .catch((error) => {
        reject(error);
      });

  });
}

module.exports = initializeProgram;
