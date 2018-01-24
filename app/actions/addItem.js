const ArtPiece = require('../../models/artPieceModel');
const readItems = require('../dataUtils/readItems');
const writeItems = require('../dataUtils/writeItems');
const addItemPrompt = require('../../prompt/instances/addItemPrompt');
// called on `node index.js add`
function addItem() {
  let newArtPiece;

  // get input from user
  return new Promise((resolve, reject) => {
    return addItemPrompt.trigger()
      .then((config) => {
        newArtPiece = new ArtPiece(config);

        // read from data.json
        return readItems();
      })
      .then((dataFromDb) => {
        dataFromDb.artPieces.push(newArtPiece);

        // write to data.json
        return writeItems(dataFromDb);
      })
      .then(() => {
        resolve('add item complete');
      })
      .catch((error) => {
        reject(error);
      });
  });
}

module.exports = addItem;
