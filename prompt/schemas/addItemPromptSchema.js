const PromptSchema = rootRequire('./prompt/schemas/PromptSchema');
const inputtedArtPieceProps = rootRequire('./models/artPiece/inputtedArtPieceProps');

const props = inputtedArtPieceProps.map((prop) => {
  return {
    name: prop,
    description: prop
  };
});

const addItemPromptSchema = new PromptSchema(props);

module.exports = addItemPromptSchema;
