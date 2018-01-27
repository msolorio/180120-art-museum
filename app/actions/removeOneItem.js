const removeOneItemPrompt = rootRequire('./prompt/instances/removeOneItemPrompt.js');

function removeOneItem() {
  return new Promise((resolve) => {
    resolve('in removeOneItem');
  });
}

module.exports = removeOneItem;
