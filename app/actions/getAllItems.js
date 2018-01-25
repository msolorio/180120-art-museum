const inventory = require('../../models/inventory/inventory');

function getAllItems() {
  const artPieces = inventory.getAllItems();

  return new Promise((resolve) => {
    resolve(`formatted art pieces: ${JSON.stringify(artPieces, undefined, 2)}`);
  });
}

module.exports = getAllItems;
