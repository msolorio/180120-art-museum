const readItems = require('../dataUtils/readItems');
const inventory = require('../../models/inventory/inventory');

function initializeInventory() {
  return new Promise((resolve, reject) => {
    readItems()
      .then((data) => {
        inventory.populateInventory(data.artPieces);
        resolve();
      })
      .catch((error) => {
        reject(error);
      });
  });
}

module.exports = initializeInventory;
