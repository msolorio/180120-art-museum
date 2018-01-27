const inventory = rootRequire('./models/inventory/inventory');
const updateOneItemPrompt = rootRequire('./prompt/instances/updateOneItemPrompt');
const writeItems = rootRequire('./app/utils/dataUtils/writeItems');

function updateOneItem() {
  return new Promise((resolve, reject) => {
    let idToUpdate;
    return updateOneItemPrompt.trigger()
      .then((updateInfo) => {
        idToUpdate = updateInfo.id;
        const updatedInventory = inventory.updateOneItem(updateInfo);

        return writeItems(updatedInventory);
      })
      .then(() => {
        resolve(`update complete for item: ${idToUpdate}`);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

module.exports = updateOneItem;
