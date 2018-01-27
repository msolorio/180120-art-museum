const ArtPiece = rootRequire('./models/artPiece/artPieceModel');

function Inventory() {}

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

Inventory.prototype.getOneItem = function(id) {
  return this.artPieces.find((piece) => {
    return piece._id === id;
  });
};

Inventory.prototype.removeOneItem = function(id) {
  this.artPieces = this.artPieces.filter((piece) => {
    return piece._id !== id;
  });

  return { artPieces: this.artPieces };
};

/**
 * Inventory.prototype.updateOneItem - updates one property of item with value
 * specified in the inventory
 *
 * @param  {string} prop  property to update
 * @param  {string} value the value the property will be updated with
 * @return {type} - the full updated item object
 */
Inventory.prototype.updateOneItem = function(updateInfo) {
  const { id, property, value } = updateInfo;

  const itemToUpdate = this.artPieces.find(piece => piece._id === id);
  itemToUpdate[property] = value;

  return { artPieces: this.artPieces };
};

module.exports = Inventory;
