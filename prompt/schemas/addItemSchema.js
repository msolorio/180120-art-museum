const addItemSchema = {
  properties: {
    artist: {
      description: 'artist',
      message: 'artist name not provided',
      required: true
    },
    title: {
      description: 'title',
      message: 'title not provided',
      required: true
    },
    year: {
      description: 'year',
      message: 'year not provided',
      required: true
    },
    medium: {
      description: 'medium',
      message: 'medium not provided',
      required: true
    }
  }
};

module.exports = addItemSchema;
