const ArtPiece = rootRequire('./models/artPiece/artPieceModel');

function AcrylicPainting(config) {
  ArtPiece.apply(this, [config]);

  this.tools = ['paintbrush'];
  this.materials = ['acrylic paint', 'canvas'];
}

AcrylicPainting.prototype = Object.create(ArtPiece.prototype);

module.exports = AcrylicPainting;
