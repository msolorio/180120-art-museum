const readItems = rootRequire('./app/utils/dataUtils/readItems');
const inventory = rootRequire('./models/inventory/inventory');

function initializeInventory() {
  return new Promise((resolve, reject) => {
    readItems()
      .then((data) => {
        inventory.populateInventory(data.artPieces);
        resolve();
      })
      .catch((error) => {
        reject(error);
      });
  });
}

module.exports = initializeInventory;
