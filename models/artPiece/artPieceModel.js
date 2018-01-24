// TODO: assign unique ID to art piece instance

const inputtedArtPieceProps = require('./inputtedArtPieceProps');

function ArtPiece(config) {
  inputtedArtPieceProps.forEach((prop) => {
    this[prop] = config[prop];
  });
}

// TODO: implement update functionality via prototype method
ArtPiece.prototype.update = function() {
  console.log('in ArtPiece.prototype.update');
};

module.exports = ArtPiece;
