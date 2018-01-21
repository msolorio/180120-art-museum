const ArtPiece = require('../models/artPieceModel');
const readItems = require('../dataUtils/readItems');
const writeItems = require('../dataUtils/writeItems');

function getConfig(args) {
  return {
    title: args[3],
    artist: args[4],
    year: args[5],
    medium: args[6]
  };
}

// to test addItem call node index.js passing in the proper configs for the
// art piece
// eg. `node index.js add 'self portrait' 'van gogh' 1949 'acrylic paint'`
function addItem(args) {
  const config = getConfig(args);
  const newArtPiece = new ArtPiece(config);

  readItems()
    .then((data) => {
      data.artPieces.push(newArtPiece);
      return writeItems(JSON.stringify(data));
    })
    .then(() => {
      console.log('write complete');
    })
    .catch((errorMessage) => console.error(errorMessage));
}

module.exports = addItem;
