const ArtPiece = require('../../models/artPiece/artPieceModel');
const inventory = require('../../models/inventory');


/**
 * populateInventory - builds inventory model from data from persistance layer
 *
 * @param  {object} data JavaScript version of data from persistance layer
 */
function populateInventory(data) {
  const instances = data.artPieces.map((entry) => {
    return new ArtPiece(entry);
  });

  inventory.artPieces = instances;
}

module.exports = populateInventory;
