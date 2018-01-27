const inventory = require('../../models/inventory/inventory');

function getAllItems() {
  const artPieces = inventory.getAllItems();

  const artPiecesTrimmed = artPieces.map((piece) => {
    return {
      title: piece.title,
      artist: piece.artist,
      _id: piece._id
    };
  });

  return new Promise((resolve) => {
    resolve(`formatted art pieces: ${JSON.stringify(artPiecesTrimmed, undefined, 2)}`);
  });
}

module.exports = getAllItems;
