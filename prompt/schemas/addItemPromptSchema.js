const PromptSchema = require('./PromptSchema');
const artist = 'artist';
const title = 'title';
const year = 'year';
const medium = 'medium';
const props = [
  {
    name: artist,
    description: artist
  },
  {
    name: title,
    description: title
  },
  {
    name: year,
    description:year
  },
  {
    name: medium,
    description: medium
  }
];

const addItemPromptSchema = new PromptSchema(props);

module.exports = addItemPromptSchema;
