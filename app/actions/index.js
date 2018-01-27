const addItem = rootRequire('./app/actions/addItem');
const getAllItems = rootRequire('./app/actions/getAllItems');
const getOneItem = rootRequire('./app/actions/getOneItem');
const removeOneItem = rootRequire('./app/actions/removeOneItem');
const updateOneItem = rootRequire('./app/actions/updateOneItem');

module.exports = {
  addItem,
  getAllItems,
  getOneItem,
  removeOneItem,
  updateOneItem
};
