const triggerPrompt = require('../prompt/triggerPrompt');
const addItemSchema = require('../prompt/schemas/addItemSchema');
const ArtPiece = require('../models/artPieceModel');
const readItems = require('../dataUtils/readItems');
const writeItems = require('../dataUtils/writeItems');

// called on `node index.js add`
function addItem() {
  let newArtPiece;

  // get input from user
  triggerPrompt(addItemSchema)
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
      console.log('write complete');
    })
    .catch((error) => {
      console.log('error:', error.message);
    });
}

module.exports = addItem;
