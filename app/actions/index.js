const addItem = rootRequire('./app/actions/addItem');
const getAllItems = rootRequire('./app/actions/getAllItems');
const getOneItem = rootRequire('./app/actions/getOneItem');
const removeOneItem = rootRequire('./app/actions/removeOneItem');

module.exports = {
  addItem,
  getAllItems,
  getOneItem,
  removeOneItem
};
