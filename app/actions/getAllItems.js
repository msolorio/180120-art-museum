const inventory = require('../../models/inventory/inventory');
const trimArtPieces = require('../utils/trimArtPieces');

function getAllItems() {
  const artPieces = inventory.getAllItems();
  const artPiecesTrimmed = trimArtPieces(artPieces);

  return new Promise((resolve) => {
    resolve(`formatted art pieces: ${JSON.stringify(artPiecesTrimmed, undefined, 2)}`);
  });
}

module.exports = getAllItems;
