const removeOneItemPrompt = rootRequire('./prompt/instances/removeOneItemPrompt.js');
const inventory = rootRequire('./models/inventory/inventory');
const writeItems = rootRequire('./app/utils/dataUtils/writeItems');

function removeOneItem() {
  return new Promise((resolve, reject) => {
    let idToRemove;

    removeOneItemPrompt.trigger()
      .then((objId) => {
        idToRemove = objId.id;
        const updatedInventory = inventory.removeOneItem(idToRemove);

        return writeItems(updatedInventory);
      })
      .then(() => {
        resolve(`item removed with id: ${idToRemove}`);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

module.exports = removeOneItem;
