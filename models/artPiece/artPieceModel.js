const generateRandomHash = rootRequire('./app/utils/generateRandomHash');

const inputtedArtPieceProps = rootRequire('./models/artPiece/inputtedArtPieceProps');

function ArtPiece(config) {
  if (config._id) this._id = config._id;

  else this._id = generateRandomHash();

  inputtedArtPieceProps.forEach((prop) => {
    this[prop] = config[prop];
  });
}

module.exports = ArtPiece;
