const prompt = rootRequire('prompt');

function Prompt(schema) {
  this.schema = schema;
}

Prompt.prototype.trigger = function() {
  return new Promise((resolve, reject) => {
    prompt.start();

    prompt.get(this.schema, (error, response) => {
      if (error) reject(error);

      resolve(response);
    });
  });
};

module.exports = Prompt;
