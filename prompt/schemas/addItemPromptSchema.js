const PromptSchema = require('./PromptSchema');
const inputtedArtPieceProps = require('../../models/artPiece/inputtedArtPieceProps');

const props = inputtedArtPieceProps.map((prop) => {
  return {
    name: prop,
    description: prop
  };
});

const addItemPromptSchema = new PromptSchema(props);

module.exports = addItemPromptSchema;
