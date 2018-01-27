const writeItems = rootRequire('./app/utils/dataUtils/writeItems');
const addItemPrompt = rootRequire('./prompt/instances/addItemPrompt');
const inventory = rootRequire('./models/inventory/inventory');

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
