const Schema = require('./Schema');

const props = [
  'artist',
  'title',
  'year',
  'medium'
];

const addItemSchema = new Schema(props);

module.exports = addItemSchema;
