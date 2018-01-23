// TODO: assign unique ID to art piece instance
function ArtPiece(config) {
  this.title = config.title;
  this.artist = config.artist;
  this.year = config.year;
  this.medium = config.medium;
}

// TODO: implement update functionality via prototype method
ArtPiece.prototype.update = function() {
  console.log('in ArtPiece.prototype.update');
};

module.exports = ArtPiece;
