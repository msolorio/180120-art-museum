const writeItems = require('../utils/dataUtils/writeItems');
const addItemPrompt = require('../../prompt/instances/addItemPrompt');
const inventory = require('../../models/inventory/inventory');

function addItem() {
  return new Promise((resolve, reject) => {
    return addItemPrompt.trigger()
      .then((config) => {
        const updatedInventory = inventory.addItem(config);

        return writeItems(updatedInventory);
      })
      .then(() => {
        resolve('write complete');
      })
      .catch((error) => {
        reject(error);
      });
  });
}

module.exports = addItem;
