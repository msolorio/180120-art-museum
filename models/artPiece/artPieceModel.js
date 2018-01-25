const generateRandomHash = require('../../app/utils/generateRandomHash');

const inputtedArtPieceProps = require('./inputtedArtPieceProps');

function ArtPiece(config) {
  this._id = generateRandomHash();

  inputtedArtPieceProps.forEach((prop) => {
    this[prop] = config[prop];
  });
}

// TODO: implement update functionality via prototype method
ArtPiece.prototype.update = function() {
  console.log('in ArtPiece.prototype.update');
};

module.exports = ArtPiece;
