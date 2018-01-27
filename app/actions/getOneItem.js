const getOneItemPrompt = require('../../prompt/instances/getOneItemPrompt');
const inventory = require('../../models/inventory/inventory');

function getOneItem() {
  return new Promise((resolve, reject) => {
    return getOneItemPrompt.trigger()
      .then((idObj) => {
        const requestedItem = inventory.getOneItem(idObj.id);

        resolve(requestedItem);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

module.exports = getOneItem;
