const ArtPiece = require('../artPiece/artPieceModel');

function Inventory() {
  this.testProp = 'testProp';
}

Inventory.prototype.populateInventory = function(artPieces) {
  this.artPieces = artPieces.map((entry) => {
    return new ArtPiece(entry);
  });
};

Inventory.prototype.addItem = function(config) {
  const newArtPiece = new ArtPiece(config);
  this.artPieces.push(newArtPiece);

  return { artPieces: this.artPieces };
};

Inventory.prototype.getAllItems = function() {
  return this.artPieces;
};

// TODO: method to remove item by Id

// TODO: method to update an item by Id

module.exports = Inventory;