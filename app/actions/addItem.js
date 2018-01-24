const ArtPiece = require('../../models/artPiece/artPieceModel');
const writeItems = require('../dataUtils/writeItems');
const addItemPrompt = require('../../prompt/instances/addItemPrompt');
const inventory = require('../../models/inventory');

// called on `node index.js add`
function addItem() {
  let newArtPiece;

  // get input from user
  return new Promise((resolve, reject) => {
    return addItemPrompt.trigger()
      .then((config) => {
        newArtPiece = new ArtPiece(config);
        inventory.artPieces.push(newArtPiece);

        return writeItems(inventory);
      })
      .then(() => {
        console.log('Write complete');
      })
      .catch((error) => {
        reject(error);
      });
  });
}

module.exports = addItem;
