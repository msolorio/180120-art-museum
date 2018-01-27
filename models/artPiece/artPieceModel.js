const generateRandomHash = rootRequire('./app/utils/generateRandomHash');

const inputtedArtPieceProps = rootRequire('./models/artPiece/inputtedArtPieceProps');

function ArtPiece(config) {
  if (config._id) this._id = config._id;
  
  else this._id = generateRandomHash();

  inputtedArtPieceProps.forEach((prop) => {
    this[prop] = config[prop];
  });
}

// TODO: implement update functionality via prototype method
ArtPiece.prototype.update = function() {
  console.log('in ArtPiece.prototype.update');
};

module.exports = ArtPiece;
